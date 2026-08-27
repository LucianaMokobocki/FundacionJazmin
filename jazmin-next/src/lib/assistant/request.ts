import type { AssistantHistoryMessage } from "./types";

const MAX_MESSAGE_LENGTH = 1_500;
const MAX_HISTORY_MESSAGES = 12;

export type ParsedChatRequest = {
  message: string;
  history: AssistantHistoryMessage[];
};

export class InvalidChatRequestError extends Error {
  constructor(public readonly code: "invalid_json" | "empty_message") {
    super(code);
    this.name = "InvalidChatRequestError";
  }
}

export async function parseChatRequest(request: Request): Promise<ParsedChatRequest> {
  let body: { message?: unknown; history?: unknown };
  try {
    body = await request.json();
  } catch {
    throw new InvalidChatRequestError("invalid_json");
  }

  const message = cleanText(body.message);
  if (!message) throw new InvalidChatRequestError("empty_message");

  const history = Array.isArray(body.history)
    ? body.history
        .filter(isHistoryMessage)
        .slice(-MAX_HISTORY_MESSAGES)
        .map(({ role, content }) => ({ role, content: cleanText(content) }))
        .filter((item) => item.content)
    : [];

  return { message, history };
}

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_MESSAGE_LENGTH) : "";
}

function isHistoryMessage(value: unknown): value is AssistantHistoryMessage {
  if (!value || typeof value !== "object") return false;
  const message = value as Partial<AssistantHistoryMessage>;
  return (message.role === "user" || message.role === "assistant") && typeof message.content === "string";
}
