"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "baselab" | "cyberpunk";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isCyberpunk: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "baselab",
  toggleTheme: () => {},
  isCyberpunk: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("baselab");

  useEffect(() => {
    const saved = localStorage.getItem("baselab-theme") as Theme | null;
    if (saved && (saved === "baselab" || saved === "cyberpunk")) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "baselab" ? "cyberpunk" : "baselab";
    setTheme(next);
    localStorage.setItem("baselab-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isCyberpunk: theme === "cyberpunk" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
