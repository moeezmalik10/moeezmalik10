"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "ai/react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Floating chat widget — the "virtual clone" UI. Talks to /api/chat, which
 * streams tokens back via the Vercel AI SDK. All the actual grounding logic
 * (retrieval + persona) lives server-side; this component is purely
 * presentational + the useChat wiring.
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
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
            className="flex flex-col w-[90vw] max-w-[360px] h-[70vh] max-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-line bg-surface/90 backdrop-blur-xl"
          >
            <header className="flex items-center gap-3 px-5 py-4 border-b border-line bg-white/5 shrink-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center text-sm font-bold text-bg">
                B
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white">Byte</p>
                <p className="text-xs text-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  AI assistant · RAG over Moeez's profile
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted hover:text-white text-lg leading-none px-1"
                aria-label="Close chat"
              >
                &times;
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm">
              {messages.length === 0 && (
                <div className="chat-bubble bot">
                  Hi, I&apos;m Byte 👋 Ask me anything about Moeez — skills, projects, education, achievements, or
                  suggest a project idea and I&apos;ll tell you how his stack fits.
                </div>
              )}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div className={cn("chat-bubble", m.role === "user" ? "user" : "bot")}>{m.content}</div>
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
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-line shrink-0">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about Moeez..."
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
        aria-label="Chat with Byte, Moeez's AI assistant"
        className="relative w-16 h-16 rounded-full border border-line bg-surface/80 backdrop-blur-xl flex items-center justify-center shadow-2xl shrink-0 hover:scale-105 transition-transform"
      >
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-bg" />
          <span className="w-1.5 h-1.5 rounded-full bg-bg" />
        </div>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan ring-2 ring-bg animate-pulse" />
      </button>
    </div>
  );
}
