import "server-only";
import Anthropic from "@anthropic-ai/sdk";
import { getAssistantConfig } from "./config";
import { assistantSystemPrompt } from "./system-prompt";
import type { AssistantHistoryMessage } from "./types";

export class AssistantRateLimitError extends Error {}
export class AssistantProviderError extends Error {}

export async function generateAssistantReply(
  message: string,
  history: AssistantHistoryMessage[],
) {
  const { apiKey, model } = getAssistantConfig();
  const client = new Anthropic({ apiKey, timeout: 30_000, maxRetries: 1 });

  try {
    const response = await client.messages.create({
      model,
      max_tokens: 500,
      system: assistantSystemPrompt,
      messages: [...history, { role: "user", content: message }],
    });
    const answer = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    if (!answer) throw new AssistantProviderError("Claude devolvió una respuesta vacía.");
    return answer;
  } catch (error) {
    if (error instanceof AssistantProviderError) throw error;
    if (error instanceof Anthropic.RateLimitError) {
      console.error("Claude API rate limit", { requestId: error.requestID });
      throw new AssistantRateLimitError();
    }
    if (error instanceof Anthropic.APIError) {
      console.error("Claude API error", { status: error.status, requestId: error.requestID });
    } else {
      console.error("No se pudo conectar con Claude", error);
    }
    throw new AssistantProviderError();
  }
}
