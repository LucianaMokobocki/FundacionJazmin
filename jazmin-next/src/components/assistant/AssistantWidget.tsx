"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import type { AssistantApiResponse, AssistantMessage } from "@/lib/assistant/types";

const WELCOME: AssistantMessage = { id: "welcome", role: "assistant", content: "¡Hola! 🌸 Soy la Guía de Fundación Jazmín. Estoy acá para ayudarte a conocer la Fundación, sus proyectos, cómo colaborar, cómo donar y cómo comunicarte." };
const SUGGESTIONS = ["¿Qué es Fundación Jazmín?", "¿Cómo puedo donar?", "¿Qué proyectos realizan?", "¿Dónde están las plazas?", "Quiero colaborar", "¿Cómo me comunico con la Fundación?"];

function track(event: string, category?: string) {
  window.dispatchEvent(new CustomEvent("jazmin:assistant", { detail: { event, category } }));
  const target = window as Window & { dataLayer?: Record<string, unknown>[] };
  target.dataLayer?.push({ event: `assistant_${event}`, assistant_category: category });
}

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<AssistantMessage[]>([WELCOME]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastQuestion, setLastQuestion] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [messages, loading]);
  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); launcherRef.current?.focus(); } };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  async function ask(question: string, suggested = false) {
    const clean = question.trim();
    if (!clean || loading) return;
    setValue(""); setError(null); setLastQuestion(clean); setLoading(true);
    const userMessage: AssistantMessage = { id: crypto.randomUUID(), role: "user", content: clean };
    const next = [...messages, userMessage];
    setMessages(next);
    track("question", suggested ? "suggested" : "written");
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: clean, history: messages.slice(1).slice(-12).map(({ role, content }) => ({ role, content })) }) });
      const data = await response.json() as AssistantApiResponse & { error?: string };
      if (!response.ok) throw new Error(data.error || "connection");
      setMessages([...next, { id: crypto.randomUUID(), role: "assistant", content: data.answer }]);
    } catch (reason) {
      const code = reason instanceof Error ? reason.message : "connection";
      setError(code === "rate_limit" || code === "provider_rate_limit" ? "Llegamos al límite de consultas por el momento. Esperá un minuto y volvé a intentar." : code === "ai_not_configured" ? "Claude todavía no está configurado. Agregá la API key privada en el servidor para habilitarlo." : "En este momento Claude no puede responder. Podés intentarlo nuevamente o comunicarte directamente con Fundación Jazmín por WhatsApp.");
    } finally { setLoading(false); }
  }

  const submit = (event: FormEvent) => { event.preventDefault(); void ask(value); };
  return <div className={`assistant-widget ${open ? "is-open" : ""}`}>
    {open && <section className="assistant-panel" role="dialog" aria-label="Guía de Fundación Jazmín" aria-describedby="assistant-subtitle">
      <header className="assistant-header"><div className="assistant-mark" aria-hidden="true"><span>J</span><i /></div><div><h2>Guía Jazmín</h2><p id="assistant-subtitle"><span aria-hidden="true" /> Siempre acá para ayudarte</p></div><button type="button" className="assistant-close" onClick={() => { setOpen(false); launcherRef.current?.focus(); }} aria-label="Cerrar la Guía Jazmín">×</button></header>
      <div className="assistant-messages" role="log" aria-live="polite" aria-relevant="additions">
        {messages.map((message) => <article key={message.id} className={`assistant-message ${message.role}`}><p className="sr-only">{message.role === "assistant" ? "Guía Jazmín" : "Vos"}</p><div>{message.content}</div></article>)}
        {messages.length === 1 && <div className="assistant-suggestions" aria-label="Preguntas sugeridas">{SUGGESTIONS.map((question) => <button key={question} type="button" onClick={() => void ask(question, true)}>{question}</button>)}</div>}
        {loading && <div className="assistant-thinking" role="status">La Guía Jazmín está pensando<span aria-hidden="true"><i>·</i><i>·</i><i>·</i></span></div>}
        {error && <div className="assistant-error" role="alert"><p>{error}</p><div><button type="button" onClick={() => void ask(lastQuestion)}>Intentar nuevamente</button><a href={siteConfig.contact.whatsappHref} target="_blank" rel="noreferrer" onClick={() => track("action", "whatsapp")}>Hablar por WhatsApp</a></div></div>}
        <div ref={endRef} />
      </div>
      <form className="assistant-form" onSubmit={submit}><label htmlFor="assistant-question" className="sr-only">Escribí tu pregunta para la Guía Jazmín</label><textarea id="assistant-question" ref={inputRef} value={value} onChange={(event) => setValue(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); void ask(value); } }} rows={1} maxLength={800} placeholder="Escribí tu pregunta…" disabled={loading}/><button type="submit" disabled={loading || !value.trim()} aria-label="Enviar pregunta"><span aria-hidden="true">↑</span></button></form>
      <p className="assistant-privacy">No compartas datos personales, bancarios ni contraseñas.</p>
    </section>}
    {!open && <div className="assistant-hint" aria-hidden="true">¿Necesitás ayuda? Hablá con nuestra guía</div>}
    <button ref={launcherRef} className="assistant-launcher" type="button" onClick={() => { setOpen((current) => !current); track("open"); }} aria-expanded={open} aria-label={open ? "Cerrar la Guía Jazmín" : "Abrir la Guía Jazmín"}><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 7.5h20v14H14l-6 4v-4H6z"/><circle cx="11" cy="14.5" r="1.3"/><circle cx="16" cy="14.5" r="1.3"/><circle cx="21" cy="14.5" r="1.3"/></svg></button>
  </div>;
}
