"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function UpcomingProjects() {
  const { locale, t } = useLocale();
  const items = profile.upcomingProjects;

  return (
    <section id="upcoming" className="relative py-32 px-6 md:px-10 bg-surface/40 border-y border-line">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-mono text-xs tracking-wide text-cyan mb-4">{t.upcomingProjects.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-4">
            {t.upcomingProjects.heading}
          </h2>
          <p className="text-muted">{t.upcomingProjects.subtitle}</p>
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
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">{t.upcomingProjects.emptyTitle}</h3>
            <p className="text-muted text-sm leading-relaxed">{t.upcomingProjects.emptyDescription}</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((project, i) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="rounded-3xl border border-line bg-white/5 p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="font-mono text-xs px-3 py-1 rounded-full border border-cyan/30 text-cyan inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                      {project.status[locale].toUpperCase()}
                    </span>
                    {project.eta && (
                      <span className="font-mono text-xs text-muted">
                        {t.upcomingProjects.etaLabel}: {project.eta}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{project.description[locale]}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-7">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
