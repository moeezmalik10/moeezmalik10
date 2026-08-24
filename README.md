# Muhammad Moeez — Portfolio (Next.js)

A 3D, RAG-chatbot-powered portfolio built with Next.js 14 (App Router),
TypeScript, Tailwind CSS, React Three Fiber, Framer Motion, and Lenis.

**Start here → [`MASTERPLAN.md`](./MASTERPLAN.md)** for the full step-by-step
setup (Supabase schema, seeding the chatbot's knowledge base, environment
variables, deployment).

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in your keys
npm run dev
```

## What's in here

- `src/app/` — routes, layouts, API route handlers, the contact Server Action, and SEO (`sitemap.ts`, `robots.ts`).
- `src/components/` — UI, including the 3D hero (`hero/`) and the AI chat widget (`chatbot/`).
- `src/lib/` — integrations (GitHub, Medium, Resend, Supabase) and the RAG pipeline (`ai/`).
- `src/data/profile.ts` — single source of truth for every fact on the site and in the chatbot.
- `supabase/schema.sql` — pgvector + contact-log tables.
- `scripts/seed-embeddings.ts` — embeds `profile.ts` into Supabase for the chatbot.

## Legacy site

The previous Create React App version of this portfolio (and a static
Tailwind/GSAP `index.html` build) live in [`legacy-cra-app/`](./legacy-cra-app/)
for reference — they're no longer the active site.
