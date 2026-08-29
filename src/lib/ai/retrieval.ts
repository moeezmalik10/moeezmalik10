import OpenAI from "openai";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getKnowledgeChunks } from "@/lib/ai/knowledge";

const EMBEDDING_MODEL = "text-embedding-3-small";
const MATCH_COUNT = 5;

/**
 * Returns the most relevant knowledge chunks for `query`, joined into a
 * single context string ready to inject into the system prompt.
 *
 * Two paths:
 *  1. Supabase configured + seeded -> real pgvector cosine-similarity search.
 *  2. Otherwise -> naive keyword overlap over the same chunks in-memory, so
 *     the chatbot still works with zero infra setup (just an OpenAI key for
 *     the chat completion itself).
 */
export async function retrieveRelevantContext(query: string): Promise<string> {
  const supabase = getSupabaseServerClient();

  if (supabase && process.env.OPENAI_API_KEY) {
    try {
      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const embeddingRes = await openai.embeddings.create({
        model: EMBEDDING_MODEL,
        input: query,
      });
      const queryEmbedding = embeddingRes.data[0]?.embedding;

      if (queryEmbedding) {
        const { data, error } = await supabase.rpc("match_documents", {
          query_embedding: queryEmbedding,
          match_count: MATCH_COUNT,
        });

        if (!error && data && data.length > 0) {
          return data.map((row: { content: string }) => row.content).join("\n\n");
        }
      }
    } catch (error) {
      console.error("[retrieveRelevantContext] vector search failed, falling back", error);
    }
  }

  return naiveKeywordFallback(query);
}

function naiveKeywordFallback(query: string): string {
  const chunks = getKnowledgeChunks();
  const queryWords = query
    .toLowerCase()
    .split(/\W+/)
    .filter((w) => w.length > 2);

  const scored = chunks
    .map((chunk) => {
      const lower = chunk.text.toLowerCase();
      const score = queryWords.reduce((acc, w) => acc + (lower.includes(w) ? 1 : 0), 0);
      return { chunk, score };
    })
    .sort((a, b) => b.score - a.score);

  const top = scored.filter((s) => s.score > 0).slice(0, MATCH_COUNT);
  const selected = top.length > 0 ? top : scored.slice(0, MATCH_COUNT);

  return selected.map((s) => s.chunk.text).join("\n\n");
}
