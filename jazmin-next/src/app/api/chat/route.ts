import { createHash } from "node:crypto";
import { NextRequest } from "next/server";
import {
  AssistantProviderError,
  AssistantRateLimitError,
  generateAssistantReply,
} from "@/lib/assistant/claude";
import { AssistantConfigurationError } from "@/lib/assistant/config";
import { checkRateLimit } from "@/lib/assistant/rate-limit";
import { InvalidChatRequestError, parseChatRequest } from "@/lib/assistant/request";
import type { AssistantApiResponse } from "@/lib/assistant/types";

export const runtime = "nodejs";

function json(body: unknown, status = 200, headers?: HeadersInit) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

export async function POST(request: NextRequest) {
  if (!(request.headers.get("content-type") ?? "").includes("application/json")) {
    return json({ error: "invalid_content_type" }, 415);
  }

  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const identifier = createHash("sha256")
    .update(`${process.env.ASSISTANT_RATE_LIMIT_SALT ?? "jazmin"}:${forwarded}`)
    .digest("hex");
  const rate = checkRateLimit(identifier);
  if (!rate.allowed) {
    return json({ error: "rate_limit" }, 429, {
      "Retry-After": String(rate.retryAfter),
    });
  }

  try {
    const { message, history } = await parseChatRequest(request);
    const answer = await generateAssistantReply(message, history);
    return json({ answer } satisfies AssistantApiResponse);
  } catch (error) {
    if (error instanceof InvalidChatRequestError) return json({ error: error.code }, 400);
    if (error instanceof AssistantConfigurationError) {
      console.error(error.message);
      return json({ error: "ai_not_configured" }, 503);
    }
    if (error instanceof AssistantRateLimitError) {
      return json({ error: "provider_rate_limit" }, 429);
    }
    if (error instanceof AssistantProviderError) {
      return json({ error: "ai_unavailable" }, 502);
    }
    console.error("Error inesperado en /api/chat", error);
    return json({ error: "internal_error" }, 500);
  }
}
