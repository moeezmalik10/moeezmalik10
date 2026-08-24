"use client";

import { useFormState, useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { submitContactForm } from "@/app/actions/contact";
import { profile } from "@/data/profile";
import { useLocale } from "@/lib/i18n/LocaleContext";
import type { ContactFormState } from "@/types";

const initialState: ContactFormState = { status: "idle", message: "" };

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-br from-violet to-[#6f4dff] text-white px-6 py-3.5 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? pendingLabel : label}
    </button>
  );
}

export function Contact() {
  const { t, locale } = useLocale();
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <section id="contact" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-wide text-cyan mb-5"
        >
          {t.contact.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-semibold leading-[1.15] mb-8"
        >
          <span className="bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent">{t.contact.heading}</span>
        </motion.h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-12">{t.contact.subheading}</p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <a
            href={`mailto:${profile.email}`}
            className="bg-gradient-to-br from-violet to-[#6f4dff] text-white px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-3"
          >
            {profile.email}
          </a>
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full text-base font-semibold border border-line bg-white/5 hover:border-[#25D366] transition-colors"
          >
            {t.contact.whatsappButton}
          </a>
        </div>

        <form action={formAction} className="rounded-3xl border border-line bg-white/5 p-8 md:p-10 text-left max-w-2xl mx-auto">
          <input type="hidden" name="locale" value={locale} />
          <p className="font-mono text-xs text-muted mb-6 text-center">{t.contact.formNote}</p>
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="name" className="text-xs font-mono text-muted block mb-2">
                {t.contact.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t.contact.namePlaceholder}
                className="w-full bg-white/5 border border-line focus:border-violet rounded-xl px-4 py-3 text-sm outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-mono text-muted block mb-2">
                {t.contact.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t.contact.emailPlaceholder}
                className="w-full bg-white/5 border border-line focus:border-violet rounded-xl px-4 py-3 text-sm outline-none transition-colors"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-xs font-mono text-muted block mb-2">
              {t.contact.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder={t.contact.messagePlaceholder}
              className="w-full bg-white/5 border border-line focus:border-violet rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
            />
          </div>
          <SubmitButton label={t.contact.sendButton} pendingLabel={t.contact.sending} />
          {state.status !== "idle" && (
            <p className={`text-sm text-center mt-4 ${state.status === "success" ? "text-cyan" : "text-red-400"}`}>
              {state.message}
            </p>
          )}
          <p className="text-xs text-muted text-center mt-4">{t.contact.resendNote}</p>
        </form>

        <div className="flex items-center justify-center gap-4 mt-14">
          {profile.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-line bg-white/5 flex items-center justify-center hover:border-violet hover:-translate-y-1 transition-all text-xs font-semibold"
              title={s.name}
            >
              {s.name.slice(0, 2).toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
