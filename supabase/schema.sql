-- Run this once in the Supabase SQL editor for a fresh project.

-- 1. Enable pgvector
create extension if not exists vector;

-- 2. Knowledge base for the RAG chatbot.
-- text-embedding-3-small produces 1536-dimensional vectors.
create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  chunk_id text unique not null,
  content text not null,
  embedding vector(1536) not null,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

-- ivfflat index for fast approximate cosine search once the table has data.
create index if not exists documents_embedding_idx
  on documents using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

-- 3. Similarity search RPC used by src/lib/ai/retrieval.ts
create or replace function match_documents (
  query_embedding vector(1536),
  match_count int default 5
)
returns table (
  id uuid,
  chunk_id text,
  content text,
  similarity float
)
language sql stable
as $$
  select
    documents.id,
    documents.chunk_id,
    documents.content,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  order by documents.embedding <=> query_embedding
  limit match_count;
$$;

-- 4. Contact form submissions log (best-effort, written after email sends)
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

-- Row Level Security: only the service role (used server-side) may read/write.
alter table documents enable row level security;
alter table contact_submissions enable row level security;
