import { useState, useEffect } from "react";
import type { Language } from "@/i18n";
import { getTranslations } from "@/i18n";

const LANGUAGE_KEY = "portfolio-language";

interface TranslatedTextProps {
  path: string; // e.g., "github.badge" or "contact.title"
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export function TranslatedText({ path, as: Component = "span", className }: TranslatedTextProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    const updateText = () => {
      const savedLang = (localStorage.getItem(LANGUAGE_KEY) as Language) || "en";
      const translations = getTranslations(savedLang);

      // Navigate through the path to get the translation
      const keys = path.split(".");
      let value: any = translations;
      for (const key of keys) {
        value = value?.[key];
      }

      setText(value || "");
    };

    updateText();

    // Listen for language changes
    window.addEventListener("languagechange", updateText);
    return () => window.removeEventListener("languagechange", updateText);
  }, [path]);

  return <Component className={className}>{text}</Component>;
}
