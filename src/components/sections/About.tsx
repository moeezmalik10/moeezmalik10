"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function About() {
  const { locale, t } = useLocale();

  return (
    <section id="about" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[0.4fr_0.6fr] gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs tracking-wide text-cyan mb-4">{t.about.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-white to-muted bg-clip-text text-transparent">
            {t.about.heading}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6 text-muted text-lg leading-relaxed"
        >
          {profile.bio[locale].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="rounded-2xl border border-line bg-white/5 p-5">
              <p className="text-white font-semibold mb-1">{t.about.focusLabel}</p>
              <p className="text-sm">{t.about.focusValue}</p>
            </div>
            <div className="rounded-2xl border border-line bg-white/5 p-5">
              <p className="text-white font-semibold mb-1">{t.about.basedInLabel}</p>
              <p className="text-sm">{profile.location}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
