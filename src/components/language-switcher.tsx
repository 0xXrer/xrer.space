import { useState, useEffect } from "react";
import type { Language } from "@/i18n";

const LANGUAGE_KEY = "portfolio-language";

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<Language>("en");
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem(LANGUAGE_KEY) as Language | null;
    if (savedLang && (savedLang === "en" || savedLang === "ru")) {
      setCurrentLang(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    if (lang === currentLang || isChanging) return;

    setIsChanging(true);
    setCurrentLang(lang);
    localStorage.setItem(LANGUAGE_KEY, lang);

    // Dispatch custom event that other components can listen to
    window.dispatchEvent(
      new CustomEvent("languagechange", { detail: { language: lang } }),
    );

    // Reload after a short delay to ensure localStorage is written
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div className="flex items-center gap-1 rounded-md border border-border bg-card p-1">
      <button
        onClick={() => handleLanguageChange("en")}
        disabled={isChanging}
        className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
          currentLang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        } ${isChanging ? "opacity-50 cursor-not-allowed" : ""}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("ru")}
        disabled={isChanging}
        className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
          currentLang === "ru"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        } ${isChanging ? "opacity-50 cursor-not-allowed" : ""}`}
        aria-label="Переключить на русский"
      >
        RU
      </button>
    </div>
  );
}

// Helper function to get current language
export function getCurrentLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const savedLang = localStorage.getItem(LANGUAGE_KEY) as Language | null;
  return savedLang && (savedLang === "en" || savedLang === "ru")
    ? savedLang
    : "en";
}
