"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        <span className="text-[10px] font-mono tracking-[0.5em] text-accent font-bold mb-6 uppercase">
          VOIDLAB // SERIES 01
        </span>

        <h1 className="text-5xl md:text-8xl font-heading tracking-tighter leading-none mb-4 max-w-4xl">
          ARTIFACTS FROM <span className="text-zinc-800">TOMORROW.</span>
        </h1>

        <p className="text-zinc-500 text-sm md:text-lg max-w-xl font-body leading-relaxed mb-12 uppercase tracking-widest">
          Engineered collectibles for the futurist. Manufactured through layered fabrication systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-12 py-5 bg-accent text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]">
            [ ENTER_SYSTEM ]
          </button>
          <button className="px-12 py-5 border border-white/10 text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white/5 transition-all">
            VIEW_ARCHIVE
          </button>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col space-y-2 opacity-20">
          <div className="h-[1px] w-20 bg-white" />
          <span className="text-[8px] font-mono tracking-widest">LN_COORD: 001.293</span>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex flex-col space-y-2 opacity-20 text-right">
          <div className="h-[1px] w-20 bg-white ml-auto" />
          <span className="text-[8px] font-mono tracking-widest">SYS_STABLE // 100%</span>
        </div>
      </div>
    </section>
  );
}
