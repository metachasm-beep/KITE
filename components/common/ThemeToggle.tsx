"use client";

import { useTheme } from "@/lib/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme, isCyberpunk } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 border overflow-hidden
        ${isCyberpunk
          ? "bg-black border-[#00f5d4]/40 text-[#00f5d4] shadow-[0_0_12px_rgba(0,245,212,0.3)] hover:shadow-[0_0_20px_rgba(0,245,212,0.5)]"
          : "bg-white border-black/10 text-zinc-500 hover:text-foreground hover:border-black/20 shadow-sm"
        }`}
      title={isCyberpunk ? "Switch to BaseLab Mode" : "Switch to Cyberpunk Mode"}
    >
      <AnimatePresence mode="wait">
        {isCyberpunk ? (
          <motion.span
            key="baselab"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="flex items-center gap-1.5"
          >
            <Sun size={12} />
            BaseLab
          </motion.span>
        ) : (
          <motion.span
            key="cyberpunk"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="flex items-center gap-1.5"
          >
            <Zap size={12} />
            Cyberpunk
          </motion.span>
        )}
      </AnimatePresence>

      {/* Animated neon gradient background for cyberpunk */}
      {isCyberpunk && (
        <motion.div
          layoutId="cyberpunk-bg"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00f5d4]/10 via-[#ff6b35]/10 to-[#00f5d4]/10 animate-pulse"
        />
      )}
    </button>
  );
}
