export type AssistantRole = "user" | "assistant";

export type AssistantHistoryMessage = {
  role: AssistantRole;
  content: string;
};

export type AssistantMessage = AssistantHistoryMessage & {
  id: string;
};

export type AssistantApiResponse = {
  answer: string;
};
