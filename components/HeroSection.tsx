"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen bg-[#000] flex flex-col justify-center overflow-hidden">
      {/* Background Accent - Soft Radial Glow for exclusive feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ffffff05] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Apple-style Small Header Label */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="text-[13px] font-semibold text-zinc-500 tracking-[0.05em] uppercase">
            INTRODUCING SERIES 01
          </span>
        </motion.div>

        {/* Large Cinematic Title */}
        <motion.h1 
          className="text-[64px] md:text-[140px] font-heading leading-[0.8] tracking-tighter text-white mb-10 overflow-hidden"
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          VOID<span className="text-zinc-600 tracking-[-0.1em]">LAB</span>
        </motion.h1>

        {/* Description and CTA with Apple's clean aesthetic */}
        <motion.div 
          className="max-w-2xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          <p className="text-[17px] md:text-[22px] font-medium text-zinc-400 mb-12 leading-relaxed">
            Highly specified geometric artifacts. <br className="hidden md:block" />
            Designed for the future, manufactured for today.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <Link 
              href="/collections" 
              className="flex items-center gap-2 px-10 py-4 bg-white text-black text-[14px] font-bold rounded-full hover:bg-white/90 transition-all group shadow-xl shadow-white/5"
            >
              SHOP_THE_DROP
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link 
              href="/archive" 
              className="text-[13px] font-semibold text-white/60 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1"
            >
              VIEW_ARCHIVE
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Serial at Bottom - Minimalist Labeling */}
      <div className="absolute bottom-12 left-6 right-6 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-zinc-800">
        <span>VL_INIT // 2024.0.1</span>
        <span>LAT_COORD // 12.9716, 77.5946</span>
      </div>
    </section>
  );
}
