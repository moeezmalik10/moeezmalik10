"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "ai/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/LocaleContext";

/**
 * Floating chat widget. The current UI locale rides along as a hint (see
 * systemPrompt.ts) — the model still mirrors whatever language the visitor
 * actually types in, message by message.
 */
export function ChatWidget() {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    body: { locale },
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[70] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col w-[90vw] max-w-[360px] h-[70vh] max-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-line bg-surface/90 backdrop-blur-xl text-left"
            dir="ltr"
          >
            <header className="flex items-center gap-3 px-5 py-4 border-b border-line bg-white/5 shrink-0">
              <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 ring-2 ring-violet/40">
                <Image src="/avatar.png" alt={t.chatbot.title} fill sizes="36px" className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white">{t.chatbot.title}</p>
                <p className="text-xs text-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  {t.chatbot.subtitle}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted hover:text-white text-lg leading-none px-1"
                aria-label={t.chatbot.closeLabel}
              >
                &times;
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm" dir="auto">
              {messages.length === 0 && <div className="chat-bubble bot">{t.chatbot.welcome}</div>}
              {messages.map((m) => (
                <div key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div className={cn("chat-bubble", m.role === "user" ? "user" : "bot")} dir="auto">
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="chat-bubble bot">
                    <span className="inline-flex gap-1">
                      <span className="typing-dot" />
                      <span className="typing-dot [animation-delay:150ms]" />
                      <span className="typing-dot [animation-delay:300ms]" />
                    </span>
                  </div>
                </div>
              )}
              {error && !isLoading && (
                <div className="flex justify-start">
                  <div className="chat-bubble bot border-red-400/40 text-red-300">{error.message}</div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-line shrink-0">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder={t.chatbot.placeholder}
                dir="auto"
                className="flex-1 min-w-0 bg-white/5 border border-line focus:border-violet rounded-full px-4 py-2.5 text-sm outline-none transition-colors text-white placeholder:text-muted/60"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-violet to-[#6f4dff] flex items-center justify-center shrink-0 disabled:opacity-50"
                aria-label="Send"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t.chatbot.title}
        className="relative w-16 h-16 rounded-full border-2 border-line bg-surface/80 backdrop-blur-xl overflow-hidden shadow-2xl shrink-0 hover:scale-105 transition-transform"
      >
        <Image src="/avatar.png" alt={t.chatbot.title} fill sizes="64px" className="object-cover" />
        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-violet to-cyan ring-2 ring-bg flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
              fill="#07070c"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
