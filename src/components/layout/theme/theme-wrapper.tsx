import { ThemeProvider } from "@/components/layout/theme/theme-provider";
import { ThemeToggle } from "@/components/layout/theme/theme-toggle";
import { LanguageSwitcher } from "@/components/common/language-switcher";
import type { ReactNode } from "react";

interface ThemeWrapperProps {
  children: ReactNode;
}

export function ThemeWrapper({ children }: ThemeWrapperProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* Controls - Fixed Position */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      {children}
    </ThemeProvider>
  );
}
