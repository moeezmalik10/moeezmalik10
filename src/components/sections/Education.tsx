"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function Education() {
  const { locale, t } = useLocale();

  return (
    <section id="education" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-mono text-xs tracking-wide text-cyan mb-4">{t.education.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">{t.education.heading}</h2>
        </motion.div>

        <div className="relative pl-10 md:pl-16 rtl:pl-0 rtl:pr-10 md:rtl:pr-16">
          <div className="absolute left-0 rtl:left-auto rtl:right-0 top-2 bottom-2 w-px bg-gradient-to-b from-violet via-cyan to-transparent" />

          {profile.education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className={`relative ${i < profile.education.length - 1 ? "mb-16" : ""}`}
            >
              <span
                className={`absolute -left-10 md:-left-16 rtl:left-auto rtl:-right-10 md:rtl:-right-16 top-1.5 w-3 h-3 rounded-full ring-4 ${
                  i % 2 === 0 ? "bg-violet ring-violet/20" : "bg-cyan ring-cyan/20"
                }`}
              />
              <p className="font-mono text-xs text-muted mb-2">{edu.duration}</p>
              <h3 className="font-display text-2xl font-semibold mb-2">{edu.institution}</h3>
              <p className={`text-sm font-medium mb-4 ${i % 2 === 0 ? "text-violet" : "text-cyan"}`}>
                {edu.degree[locale]}
              </p>
              <p className="text-muted leading-relaxed max-w-2xl">{edu.description[locale]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
