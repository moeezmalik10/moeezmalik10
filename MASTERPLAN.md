# Master Plan — Moeez Portfolio (Next.js / R3F / RAG Chatbot)

This document is the step-by-step build plan for converting the portfolio into a
production-grade Next.js 14 (App Router) site with a 3D hero, a RAG chatbot
"virtual clone," live GitHub/Medium feeds, a working contact-form pipeline, and
strict SEO. All boilerplate described here has already been written to this
repo — this file explains **why** it's structured this way and **what's left**
for you to do (installing dependencies and supplying real API keys).

## 0. Decisions made on your behalf (and why)

| Choice point | Decision | Reason |
|---|---|---|
| Server Actions vs. Express | **Server Actions** | Next.js App Router already gives you a server runtime co-located with the frontend. A separate Express server means two deployments, two envs, CORS to manage — not worth it for a portfolio contact form. |
| Sanity vs. Supabase | **Supabase** | The RAG chatbot needs a vector store (`pgvector`). Supabase gives you Postgres + `pgvector` + auth + storage in one project, so the same DB holds embeddings *and* contact-form submissions. Sanity is a better fit if you wanted a visual CMS for blog posts, which wasn't in scope here. |
| Raw OpenAI SDK vs. Vercel AI SDK | **Vercel AI SDK (`ai` package)** | Handles streaming, the `useChat` hook, and provider abstraction for you. The raw `openai` package is still a dependency (used only for generating embeddings in the seed script). |

If you'd rather use Sanity or Express, the boundaries are clean enough
(`src/lib/supabase/*`, `src/app/actions/contact.ts`) that swapping is a
contained change, not a rewrite.

## 1. Prerequisites

1. Node.js 18.18+ installed.
2. Accounts (free tiers are enough to start):
   - [OpenAI](https://platform.openai.com) — chat completions + embeddings.
   - [Supabase](https://supabase.com) — Postgres + pgvector.
   - [Resend](https://resend.com) — transactional email.
3. Copy `.env.example` to `.env.local` and fill in the values as you get them.

## 2. Install dependencies

```bash
npm install
```

This installs Next.js, React Three Fiber, Framer Motion, Lenis, the Vercel AI
SDK, the Supabase JS client, Resend, and supporting libs already declared in
`package.json`.

## 3. Provision Supabase

1. Create a new Supabase project.
2. In the SQL editor, run `supabase/schema.sql` — it:
   - enables the `pgvector` extension,
   - creates a `documents` table (`content text`, `embedding vector(1536)`, `metadata jsonb`),
   - creates a `match_documents(query_embedding, match_count)` SQL function for
     cosine-similarity search,
   - creates a `contact_submissions` table to log every contact-form message.
3. Copy the project URL + anon key + service role key into `.env.local`.

## 4. Seed the chatbot's knowledge base

The chatbot must never invent facts about you. Its knowledge comes from one
place: `src/data/profile.ts` (structured data — skills, projects, education,
achievements, contact info). `src/lib/ai/knowledge.ts` serializes that into
short text chunks; `scripts/seed-embeddings.ts` embeds each chunk with OpenAI
and upserts it into Supabase's `documents` table.

```bash
npm run seed:embeddings
```

Re-run this any time you edit `src/data/profile.ts`.

> If you later get a real resume PDF, add a small parser step that appends its
> text as more chunks before embedding — don't hand-type resume content into
> the prompt directly, since it'll drift out of sync with the actual file.

## 5. Run it

```bash
npm run dev
```

Visit `http://localhost:3000`. The chatbot widget (bottom-right) will answer
using vector search over the seeded chunks; if Supabase isn't configured yet,
it falls back to a naive keyword search over the same chunks so the widget
still works with zero setup (see `src/lib/ai/retrieval.ts`).

## 6. Architecture map (where each requirement lives)

1. **3D Hero + mouse-tracking particles**
   `src/components/hero/Hero.tsx` + `src/components/hero/ParticleCanvas.tsx`
   — a client-only React Three Fiber `<Canvas>` with a `THREE.Points` field
   that eases toward the pointer position each frame.

2. **AI chatbot / virtual clone**
   `src/app/api/chat/route.ts` (edge streaming endpoint, Vercel AI SDK) +
   `src/lib/ai/retrieval.ts` (vector search) + `src/lib/ai/systemPrompt.ts`
   (persona + guardrails) + `src/components/chatbot/ChatWidget.tsx`
   (`useChat` UI). It answers *only* from retrieved context and is instructed
   to say so when it doesn't know something, rather than fabricate.

3. **GitHub + Medium live feeds**
   `src/lib/integrations/github.ts` / `medium.ts` fetch and normalize the raw
   APIs; `src/app/api/github/route.ts` / `medium/route.ts` expose them as
   cached Route Handlers (`revalidate = 3600`, i.e. ISR-style hourly cache).

4. **Contact form pipeline**
   `src/app/actions/contact.ts` is a `"use server"` Server Action: validates
   with `zod`, sends via Resend (`src/lib/email/resend.ts`), and logs the
   submission to Supabase. `src/components/sections/Contact.tsx` binds to it
   with `useFormState`/`useFormStatus` — no client-side fetch, no API route
   needed for this one.

5. **SEO**
   `src/app/layout.tsx` exports a full `Metadata` object (title template,
   OpenGraph, Twitter card, JSON-LD `Person` schema). `src/app/sitemap.ts` and
   `src/app/robots.ts` use the Next.js Metadata API's typed route conventions
   — no hand-written XML.

## 7. Deploying

Vercel is the path of least resistance (same team as Next.js + the AI SDK):

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add every variable from `.env.example` in the Vercel project's
   Environment Variables settings.
4. Deploy. Re-run `npm run seed:embeddings` locally (pointed at the
   production Supabase project) whenever `profile.ts` changes — it's a
   one-off script, not part of the build.

## 8. What's intentionally left as a placeholder

- No real resume PDF is wired in (the old repo's PDF belonged to the original
  template author, not you — see `src/data/profile.ts` comments).
- LinkedIn has no public API for personal profiles, so "live" LinkedIn data
  isn't fetched automatically — the profile URL is just a link, same as the
  static build.
- `CONTACT_FROM_EMAIL` defaults to Resend's shared sandbox sender
  (`onboarding@resend.dev`); verify your own domain in Resend before going to
  production so email doesn't land in spam.
