import { openai } from "@ai-sdk/openai";
import { streamText, type CoreMessage } from "ai";
import { retrieveRelevantContext } from "@/lib/ai/retrieval";
import { buildSystemPrompt } from "@/lib/ai/systemPrompt";
import type { Locale } from "@/types";

export const runtime = "edge";

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return new Response(
      "Byte isn't wired up yet — add OPENAI_API_KEY to .env.local and restart the dev server. See MASTERPLAN.md.",
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
      model: openai("gpt-4o-mini"),
      system,
      messages,
      temperature: 0.6,
      maxTokens: 400,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("[/api/chat]", error);
    return new Response("Byte hit an error talking to OpenAI — please try again in a moment.", {
      status: 502,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
