"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import React, { useRef } from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";

/**
 * SpringButton — Ruixen UI inspired
 * Press spring: compresses on mousedown, releases on mouseup.
 * Audio tick in cyberpunk mode.
 * Drop-in replacement for standard buttons.
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
    g.gain.value = 0.06;
    src.connect(g).connect(ac.destination);
    src.start();
  } catch { /* silent */ }
}

interface SpringButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const PRESS_SPRING = { type: "spring" as const, stiffness: 600, damping: 20, mass: 0.8 };
const RELEASE_SPRING = { type: "spring" as const, stiffness: 300, damping: 18, mass: 0.8 };

export function SpringButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
  type = "button",
}: SpringButtonProps) {
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, RELEASE_SPRING);
  const { isCyberpunk } = useTheme();

  const handlePointerDown = () => {
    if (disabled) return;
    scale.set(0.93);
    if (isCyberpunk) tick();
  };

  const handlePointerUp = () => {
    if (disabled) return;
    // Overshoot spring on release
    scale.set(1.04);
    setTimeout(() => scale.set(1), 80);
  };

  const baseVariantClasses = {
    primary: isCyberpunk
      ? "border border-[#00f5d4] text-[#00f5d4] bg-transparent hover:bg-[#00f5d4]/10 shadow-[0_0_10px_rgba(0,245,212,0.25)] hover:shadow-[0_0_20px_rgba(0,245,212,0.45)] font-mono tracking-widest uppercase"
      : "bg-accent text-white hover:opacity-90 shadow-[0_4px_20px_rgba(202,138,4,0.3)] hover:shadow-[0_8px_30px_rgba(202,138,4,0.5)] rounded-full",
    secondary: isCyberpunk
      ? "border border-[#00f5d4]/30 text-[#00f5d4]/70 hover:border-[#00f5d4]/60 hover:text-[#00f5d4] font-mono tracking-wider uppercase"
      : "bg-stone-200/50 text-stone-600 hover:bg-stone-200 rounded-full",
    ghost: isCyberpunk
      ? "text-[#00f5d4]/60 hover:text-[#00f5d4] font-mono tracking-wider"
      : "text-stone-500 hover:text-foreground",
  };

  return (
    <motion.button
      style={{ scale: springScale as any }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={() => { if (!disabled) scale.set(1); }}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed select-none font-jost ${baseVariantClasses[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default SpringButton;
