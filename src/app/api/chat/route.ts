import { groq } from "@ai-sdk/groq";
import { streamText, type CoreMessage } from "ai";
import { retrieveRelevantContext } from "@/lib/ai/retrieval";
import { buildSystemPrompt } from "@/lib/ai/systemPrompt";
import type { Locale } from "@/types";

export const runtime = "edge";

// Groq (console.groq.com) is the chat model — genuinely free, no billing
// required, and fast. OpenAI is only used (optionally) for embeddings if you
// wire up the Supabase vector-search path later — see retrieval.ts.
const CHAT_MODEL = "llama-3.3-70b-versatile";

export async function POST(req: Request) {
  if (!process.env.GROQ_API_KEY) {
    return new Response(
      "Byte isn't wired up yet — add GROQ_API_KEY to .env.local and restart the dev server. Free key: console.groq.com. See MASTERPLAN.md.",
      { status: 503, headers: { "Content-Type": "text/plain" } }
    );
  }

  const { messages, locale }: { messages: CoreMessage[]; locale?: Locale } = await req.json();

  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  const query = typeof lastUserMessage?.content === "string" ? lastUserMessage.content : "";

  try {
    const context = await retrieveRelevantContext(query);
    const system = buildSystemPrompt(context, locale ?? "en");

    const result = await streamText({
      model: groq(CHAT_MODEL),
      system,
      messages,
      temperature: 0.6,
      maxTokens: 400,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("[/api/chat]", error);
    return new Response("Byte hit an error talking to Groq — please try again in a moment.", {
      status: 502,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
