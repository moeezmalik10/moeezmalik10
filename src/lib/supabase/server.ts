import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service role key — bypasses Row
 * Level Security. Never import this from a Client Component; the
 * `server-only` import above makes that a build-time error if you try.
 *
 * Returns null (rather than throwing) when Supabase isn't configured yet,
 * so features that depend on it (vector search, contact-form logging) can
 * degrade gracefully instead of crashing the whole route.
 */
export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) return null;
  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
