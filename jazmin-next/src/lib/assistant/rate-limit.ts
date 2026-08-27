import "server-only";

const windows = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 12;

export function checkRateLimit(identifier: string) {
  const now = Date.now();
  if (windows.size > 1_000) for (const [key, value] of windows) if (value.reset < now) windows.delete(key);
  const current = windows.get(identifier);
  if (!current || current.reset < now) {
    windows.set(identifier, { count: 1, reset: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  current.count += 1;
  return { allowed: current.count <= MAX_REQUESTS, retryAfter: Math.max(1, Math.ceil((current.reset - now) / 1000)) };
}
