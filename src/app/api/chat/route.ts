import { openai } from "@ai-sdk/openai";
import { streamText, type CoreMessage } from "ai";
import { retrieveRelevantContext } from "@/lib/ai/retrieval";
import { buildSystemPrompt } from "@/lib/ai/systemPrompt";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  const query = typeof lastUserMessage?.content === "string" ? lastUserMessage.content : "";

  const context = await retrieveRelevantContext(query);
  const system = buildSystemPrompt(context);

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system,
    messages,
    temperature: 0.6,
    maxTokens: 400,
  });

  return result.toDataStreamResponse();
}
