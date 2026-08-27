import "server-only";

export type AssistantConfig = {
  apiKey: string;
  model: string;
};

export class AssistantConfigurationError extends Error {
  constructor() {
    super("ANTHROPIC_API_KEY no está configurada.");
    this.name = "AssistantConfigurationError";
  }
}

export function getAssistantConfig(): AssistantConfig {
  const apiKey = process.env.ANTHROPIC_API_KEY?.trim();
  if (!apiKey) throw new AssistantConfigurationError();

  return {
    apiKey,
    model: process.env.ANTHROPIC_MODEL?.trim() || "claude-sonnet-4-5",
  };
}
