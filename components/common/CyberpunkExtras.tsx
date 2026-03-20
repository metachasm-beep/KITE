"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/lib/contexts/ThemeContext";

// Dynamically import MouseSpark to avoid SSR canvas issues
const MouseSpark = dynamic(() => import("@/components/ruixen/mouse-spark"), {
  ssr: false,
});

/**
 * CyberpunkExtras — renders cyberpunk-only effects:
 * - MouseSpark cursor particle trail (only active in cyberpunk mode)
 */
export function CyberpunkExtras() {
  const { isCyberpunk } = useTheme();

  if (!isCyberpunk) return null;

  return <MouseSpark enabled={true} />;
}
