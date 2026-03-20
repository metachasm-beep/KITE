"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/contexts/ThemeContext";

/**
 * SpringAccordion — Ruixen UI inspired
 * Built with spring physics from motion/react.
 * Audio tick on open/close in cyberpunk mode.
 * Self-contained with CSS variables.
 */

/* ── Audio singleton ── */
let _a: AudioContext | null = null;
let _b: AudioBuffer | null = null;

function getCtx(): AudioContext {
  if (!_a) _a = new (window.AudioContext || (window as any).webkitAudioContext)();
  if (_a.state === "suspended") _a.resume();
  return _a;
}
function getBuf(ac: AudioContext): AudioBuffer {
  if (_b && _b.sampleRate === ac.sampleRate) return _b;
  const len = Math.floor(ac.sampleRate * 0.003);
  const buf = ac.createBuffer(1, len, ac.sampleRate);
  const ch = buf.getChannelData(0);
  for (let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 4;
  _b = buf;
  return buf;
}
function tick() {
  try {
    const ac = getCtx();
    const src = ac.createBufferSource();
    const g = ac.createGain();
    src.buffer = getBuf(ac);
    g.gain.value = 0.05;
    src.connect(g).connect(ac.destination);
    src.start();
  } catch { /* silent */ }
}

export interface AccordionItem {
  question: string;
  answer: string;
}

interface SpringAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const SPRING = { type: "spring" as const, stiffness: 280, damping: 26 };

export function SpringAccordion({ items, allowMultiple = false }: SpringAccordionProps) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const { isCyberpunk } = useTheme();

  const toggle = (i: number) => {
    if (isCyberpunk) tick();
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        if (!allowMultiple) next.clear();
        next.add(i);
      }
      return next;
    });
  };

  return (
    <div className="w-full space-y-3">
      {items.map((item, i) => {
        const isOpen = openSet.has(i);
        return (
          <motion.div
            key={i}
            layout
            transition={SPRING}
            className={`overflow-hidden border transition-all duration-300 ${
              isCyberpunk
                ? `border-[#00f5d4]/20 bg-[#0d1117] ${isOpen ? "border-[#00f5d4]/50 shadow-[0_0_12px_rgba(0,245,212,0.08)]" : ""}`
                : `border-black/5 bg-white ${isOpen ? "border-black/10 shadow-sm" : ""}`
            } rounded-2xl`}
          >
            {/* Header */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between p-5 text-left group"
            >
              <span className={`text-sm font-semibold pr-4 transition-colors ${
                isCyberpunk
                  ? `font-mono tracking-wider ${isOpen ? "text-[#00f5d4]" : "text-[#00f5d4]/80"}`
                  : `${isOpen ? "text-foreground" : "text-foreground/80"}`
              }`}>
                {item.question}
              </span>

              {/* Spring-animated chevron */}
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={SPRING}
                className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border transition-colors ${
                  isCyberpunk
                    ? `border-[#00f5d4]/30 ${isOpen ? "bg-[#00f5d4]/20 border-[#00f5d4]/60" : "bg-transparent group-hover:border-[#00f5d4]/50"}`
                    : `border-black/8 ${isOpen ? "bg-black/5 border-black/15" : "bg-transparent group-hover:border-black/15"}`
                }`}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M5 2V8M2 5H8"
                    stroke={isCyberpunk ? "#00f5d4" : "currentColor"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </button>

            {/* Animated content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={SPRING}
                  style={{ overflow: "hidden" }}
                >
                  <div className={`px-5 pb-5 text-sm leading-relaxed ${
                    isCyberpunk ? "text-[#00f5d4]/60 font-mono" : "text-zinc-500"
                  }`}>
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default SpringAccordion;
