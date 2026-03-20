"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/lib/contexts/ThemeContext";

/**
 * FloatingNavbar — Ruixen UI
 * Sourced from https://ruixen.com/r/floating-navbar
 * Adapted for BaseLab: appears on scroll, uses BaseLab nav links,
 * and adapts to both BaseLab and Cyberpunk themes.
 */

interface NavItem {
  label: string;
  href: string;
}

interface FloatingNavbarProps {
  items?: NavItem[];
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Shop", href: "/collections" },
  { label: "About", href: "/system" },
  { label: "Details", href: "/telemetry" },
  { label: "Support", href: "/comms" },
];

export function FloatingNavbar({ items = DEFAULT_ITEMS }: FloatingNavbarProps) {
  const [visible, setVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { isCyberpunk } = useTheme();

  // Show on scroll past 100px
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Update indicator position
  useEffect(() => {
    const update = () => {
      const btn = btnRefs.current[activeIdx];
      const container = containerRef.current;
      if (!btn || !container) return;
      const br = btn.getBoundingClientRect();
      const cr = container.getBoundingClientRect();
      setIndicatorStyle({ width: br.width, left: br.left - cr.left });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeIdx]);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: visible ? 0 : 20, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] hidden md:block"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <div
        ref={containerRef}
        className={`relative flex items-center justify-between border rounded-full px-1 py-1.5 shadow-xl backdrop-blur-xl transition-colors duration-500
          ${isCyberpunk
            ? "bg-black/90 border-[#00f5d4]/30 shadow-[0_0_20px_rgba(0,245,212,0.1)]"
            : "bg-white/90 border-black/8"
          }`}
      >
        {items.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setActiveIdx(i)}
          >
            <button
              ref={(el) => { btnRefs.current[i] = el; }}
              className={`relative flex items-center justify-center px-5 py-2 text-sm font-medium transition-colors z-10 rounded-full
                ${activeIdx === i
                  ? (isCyberpunk ? "text-[#00f5d4]" : "text-foreground")
                  : (isCyberpunk ? "text-[#00f5d4]/40 hover:text-[#00f5d4]/70" : "text-zinc-400 hover:text-zinc-600")
                } ${isCyberpunk ? "font-mono tracking-wider uppercase text-xs" : ""}`}
            >
              {isCyberpunk ? item.label.toUpperCase() : item.label}
            </button>
          </Link>
        ))}

        {/* Sliding indicator */}
        <motion.div
          animate={indicatorStyle}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className={`absolute top-1 bottom-1 rounded-full transition-colors duration-500
            ${isCyberpunk
              ? "bg-[#00f5d4]/15 shadow-[0_0_8px_rgba(0,245,212,0.3)]"
              : "bg-black/5"
            }`}
        />
      </div>
    </motion.div>
  );
}

export default FloatingNavbar;
