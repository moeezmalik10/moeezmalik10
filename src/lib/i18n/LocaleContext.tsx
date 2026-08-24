"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Locale } from "@/types";
import { dictionaries, type Dictionary } from "@/lib/i18n/dictionaries";

const STORAGE_KEY = "moeez-portfolio-locale";
const LOCALES: Locale[] = ["en", "ur", "ru"];

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  dir: "ltr" | "rtl";
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Hydrate from localStorage once on mount (SSR always renders "en" first
  // to avoid a hydration mismatch, then swaps client-side).
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && LOCALES.includes(saved as Locale)) {
      setLocaleState(saved as Locale);
    }
  }, []);

  const dir: "ltr" | "rtl" = locale === "ur" ? "rtl" : "ltr";

  // Keep <html> in sync (lang, dir, and a data-locale hook for the Urdu font).
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.documentElement.dataset.locale = locale;
  }, [locale, dir]);

  function setLocale(next: Locale) {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale], dir }),
    [locale, dir]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
