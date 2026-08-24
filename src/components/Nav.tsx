"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Nav() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const LINKS = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#education", label: t.nav.education },
    { href: "#achievements", label: t.nav.achievements },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/5 backdrop-blur-xl border-b border-line" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between py-5">
        <a href="#home" className="font-display font-semibold text-lg tracking-tight text-white">
          Moeez<span className="text-violet">.</span>dev
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted font-medium">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-gradient-to-br from-violet to-[#6f4dff] text-white"
          >
            {t.nav.talk}
          </a>
        </div>
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="w-9 h-9 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menu"
          >
            <span className="block w-6 h-px bg-white" />
            <span className="block w-6 h-px bg-white" />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-6 bg-surface/95 backdrop-blur-xl mx-4 rounded-2xl border border-line">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-muted border-b border-line last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
