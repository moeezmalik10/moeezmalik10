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
| Raw OpenAI SDK vs. Vercel AI SDK | **Vercel AI SDK (`ai` package)** | Handles streaming, the `useChat` hook, and provider abstraction for you. |
| OpenAI vs. Groq for the chat model | **Groq** (`llama-3.3-70b-versatile`) | OpenAI's API is pay-as-you-go with no real free tier — a ChatGPT subscription does *not* grant API credits, so a fresh key fails with a quota error until billing is added. Groq's free tier needs no card at all and is fast. The `openai` package stays as an *optional* dependency for embeddings only, if you later wire up the Supabase vector-search path — nothing in the default runtime path needs it. |

If you'd rather use Sanity or Express, the boundaries are clean enough
(`src/lib/supabase/*`, `src/app/actions/contact.ts`) that swapping is a
contained change, not a rewrite.

## 1. Prerequisites

1. Node.js 18.18+ installed.
2. Accounts (all free, no card required for Groq/Resend/Supabase):
   - [Groq](https://console.groq.com/keys) — the chatbot's chat model.
   - [Resend](https://resend.com) — transactional email.
   - [Supabase](https://supabase.com) — optional, only for the pgvector-backed RAG upgrade (§8).
   - [OpenAI](https://platform.openai.com) — optional, only needed alongside Supabase for embeddings; requires funded billing.
3. Copy `.env.example` to `.env.local` and fill in the values as you get them.

## 2. Install dependencies

```bash
npm install
```

This installs Next.js, React Three Fiber, Framer Motion, Lenis, the Vercel AI
SDK, the Supabase JS client, Resend, and supporting libs already declared in
`package.json`.

## 3. Get a free Groq key (chatbot)

1. Sign up at [console.groq.com](https://console.groq.com/keys) — no card required.
2. Create an API key, put it in `.env.local` as `GROQ_API_KEY`.

That's it — the chatbot works out of the box from here. Its knowledge comes
from one place, `src/data/profile.ts` (skills, projects, education,
achievements, contact info), serialized into text chunks by
`src/lib/ai/knowledge.ts`. With no Supabase configured, `src/lib/ai/retrieval.ts`
does a naive keyword search over those chunks — no embeddings, no vector DB,
zero extra setup, and it's what's running by default.

## 4. Run it

```bash
npm run dev
```

Visit `http://localhost:3000`. The chatbot widget (bottom-right) will answer
using the keyword-search fallback described above unless you've done the
optional Supabase upgrade in §8.

## 5. Architecture map (where each requirement lives)

1. **3D Hero + mouse-tracking particles**
   `src/components/hero/Hero.tsx` + `src/components/hero/ParticleCanvas.tsx`
   — a client-only React Three Fiber `<Canvas>` with a `THREE.Points` field
   that eases toward the pointer position each frame.

2. **AI chatbot / virtual clone**
   `src/app/api/chat/route.ts` (edge streaming endpoint, Vercel AI SDK, Groq
   model) + `src/lib/ai/retrieval.ts` (keyword search by default, real
   pgvector search if you do the optional Supabase upgrade in §8) +
   `src/lib/ai/systemPrompt.ts` (persona + guardrails) +
   `src/components/chatbot/ChatWidget.tsx` (`useChat` UI). It answers *only*
   from retrieved context and is instructed to say so when it doesn't know
   something, rather than fabricate.

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

## 6. Deploying

Vercel is the path of least resistance (same team as Next.js + the AI SDK):

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add every variable from `.env.example` in the Vercel project's
   Environment Variables settings (at minimum: `GROQ_API_KEY`,
   `RESEND_API_KEY`, `CONTACT_TO_EMAIL`).
4. Deploy.

## 7. What's intentionally left as a placeholder

- No real resume PDF is wired in (the old repo's PDF belonged to the original
  template author, not you — see `src/data/profile.ts` comments).
- LinkedIn has no public API for personal profiles, so "live" LinkedIn data
  isn't fetched automatically — the profile URL is just a link, same as the
  static build.
- `CONTACT_FROM_EMAIL` defaults to Resend's shared sandbox sender
  (`onboarding@resend.dev`); verify your own domain in Resend before going to
  production so email doesn't land in spam.

## 8. Optional upgrade: real vector-search RAG with Supabase

The keyword-search fallback (§3) works fine for a site this size, but if you
want genuine semantic search over the knowledge base:

1. Create a Supabase project.
2. In the SQL editor, run `supabase/schema.sql` — it enables `pgvector`,
   creates a `documents` table (`content text`, `embedding vector(1536)`,
   `metadata jsonb`), a `match_documents(...)` similarity-search function,
   and a `contact_submissions` table for logging contact-form messages.
3. Copy the project URL + anon key + service role key into `.env.local`.
4. This path also needs OpenAI (Groq doesn't offer an embeddings API), so add
   a **funded** `OPENAI_API_KEY` — embeddings are extremely cheap
   (`text-embedding-3-small` is a fraction of a cent per chatbot conversation
   worth of text), but the key still needs billing enabled to work at all.
5. Run `npm run seed:embeddings` — it embeds every chunk from
   `src/lib/ai/knowledge.ts` and upserts it into Supabase. Re-run any time you
   edit `src/data/profile.ts`.

Once both `NEXT_PUBLIC_SUPABASE_URL`/`SUPABASE_SERVICE_ROLE_KEY` and
`OPENAI_API_KEY` are set, `src/lib/ai/retrieval.ts` automatically switches
from keyword search to real vector search — no code changes needed.
