import { createClient } from "@supabase/supabase-js";

/**
 * Browser-safe Supabase client (anon key only — respects Row Level
 * Security). Use this in Client Components. For privileged server-side
 * work (embeddings, contact log writes) use `./server.ts` instead.
 */
export function getSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) return null;
  return createClient(url, anonKey);
}
