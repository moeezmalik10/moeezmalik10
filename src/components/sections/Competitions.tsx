"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function Competitions() {
  const { locale, t } = useLocale();
  const items = profile.competitions;

  return (
    <section id="competitions" className="relative py-32 px-6 md:px-10 bg-surface/40 border-y border-line">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-mono text-xs tracking-wide text-cyan mb-4">{t.competitions.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-4">
            {t.competitions.heading}
          </h2>
          <p className="text-muted">{t.competitions.subtitle}</p>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-dashed border-line bg-white/[0.02] p-12 text-center max-w-xl mx-auto"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4ZM7 6H4a2 2 0 0 0 2 4M17 6h3a2 2 0 0 1-2 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">{t.competitions.emptyTitle}</h3>
            <p className="text-muted text-sm leading-relaxed">{t.competitions.emptyDescription}</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((comp, i) => (
              <motion.div
                key={comp.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="rounded-3xl border border-line bg-white/5 p-7"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xs px-3 py-1 rounded-full border border-cyan/30 text-cyan">
                    {comp.status[locale].toUpperCase()}
                  </span>
                  {comp.date && <span className="font-mono text-xs text-muted">{comp.date}</span>}
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{comp.name}</h3>
                {comp.organizer && <p className="text-xs text-muted mb-3">{comp.organizer}</p>}
                <p className="text-muted text-sm leading-relaxed">{comp.description[locale]}</p>
                {comp.url && (
                  <a
                    href={comp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-medium text-white hover:text-violet transition-colors"
                  >
                    View →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
