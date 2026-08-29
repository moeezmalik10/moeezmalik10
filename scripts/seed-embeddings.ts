/**
 * One-off script: embeds every knowledge chunk from src/lib/ai/knowledge.ts
 * with OpenAI and upserts it into Supabase's `documents` table.
 *
 * Run with: npm run seed:embeddings
 * Re-run whenever src/data/profile.ts changes.
 */
import "dotenv/config";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import { getKnowledgeChunks } from "../src/lib/ai/knowledge";

const EMBEDDING_MODEL = "text-embedding-3-small";

async function main() {
  const { OPENAI_API_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;

  if (!OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not set in .env.local");
  if (!NEXT_PUBLIC_SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set in .env.local");
  }

  const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
  const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const chunks = getKnowledgeChunks();
  console.log(`Embedding ${chunks.length} knowledge chunks...`);

  for (const chunk of chunks) {
    const embeddingRes = await openai.embeddings.create({
      model: EMBEDDING_MODEL,
      input: chunk.text,
    });
    const embedding = embeddingRes.data[0]?.embedding;
    if (!embedding) {
      console.warn(`  ! no embedding returned for "${chunk.id}", skipping`);
      continue;
    }

    const { error } = await supabase
      .from("documents")
      .upsert({ chunk_id: chunk.id, content: chunk.text, embedding }, { onConflict: "chunk_id" });

    if (error) {
      console.error(`  ! failed to upsert "${chunk.id}":`, error.message);
    } else {
      console.log(`  ✓ ${chunk.id}`);
    }
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
