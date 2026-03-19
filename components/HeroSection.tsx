"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Cpu, Network } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen bg-[#050505] flex flex-col justify-center overflow-hidden">
      {/* Background HUD Layer - Star Chart / Technical Grids */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] border-[0.5px] border-white/5 grid grid-cols-12 gap-px" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black" />
        
        {/* Animated Scanline */}
        <div className="scanline-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* HUD Telemetry Labels */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-10 mb-12"
          >
            <div className="flex flex-col items-center">
              <span className="text-[8px] font-mono text-zinc-700 tracking-[0.4em] uppercase">SYSTEM_STATE</span>
              <span className="text-[10px] font-bold text-accent tracking-widest uppercase mt-1">UNIT_READY</span>
            </div>
            <div className="w-12 h-px bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-[8px] font-mono text-zinc-700 tracking-[0.4em] uppercase">LOC_INDEX</span>
              <span className="text-[10px] font-bold text-white tracking-widest uppercase mt-1">12.97 // 77.59</span>
            </div>
          </motion.div>

          {/* Main Cinematic Branding */}
          <div className="relative mb-12">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[64px] md:text-[144px] font-heading leading-none tracking-[-0.1em] text-white flex items-center justify-center gap-2 "
            >
              UNIT<span className="text-zinc-900 stroke-zinc-700 font-black">_01</span>
            </motion.h1>
            
            {/* Corner Brackets around Title */}
            <div className="absolute -inset-10 border border-white/5 opacity-40 pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/20" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/20" />
            </div>
          </div>

          {/* Contemporary Storytelling Copy */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="space-y-12"
          >
            <p className="text-[14px] md:text-[17px] font-medium tracking-[0.1em] text-zinc-500 uppercase leading-relaxed max-w-xl mx-auto">
              [ PRECISION IN PHYSICAL GEOMETRY ] <br />
              A studio dedicated to the exploration of high-density materials and minimalist form.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <Link 
                href="/collections" 
                className="btn-hud group"
              >
                ACCESS_ARCHIVE
                <ChevronRight size={14} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-4 text-zinc-700">
                <Cpu size={14} />
                <span className="text-[10px] font-mono tracking-widest text-zinc-500">ENG_PROTOCOL_v4.2</span>
                <div className="w-1 h-1 bg-accent rounded-full animate-ping" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Map HUD Widget - Small Sidebar Detail */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-10 opacity-30">
        <div className="space-y-2">
            <span className="text-[7px] font-mono text-white/40 block tracking-widest">MAP_VECTR</span>
            <div className="w-16 h-16 border border-white/10 relative overflow-hidden">
                <div className="absolute inset-2 border border-accent/20 rounded-full animate-spin-slow" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-accent/20" />
                <div className="absolute left-1/2 top-0 h-full w-px bg-accent/20" />
            </div>
        </div>
        <Network size={16} className="text-zinc-800" />
      </div>

      {/* Right Sidebar Detail - Stats */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 items-end opacity-30">
          {[
            { label: "CORE_LOAD", val: "24.2%" },
            { label: "NET_SYNC", val: "ACTIVE" },
            { label: "ENV_STBL", val: "94.2" }
          ].map(stat => (
            <div key={stat.label} className="text-right">
                <span className="text-[7px] font-mono text-white/40 block tracking-widest">{stat.label}</span>
                <span className="text-[10px] font-mono text-zinc-400 block tracking-widest">{stat.val}</span>
            </div>
          ))}
      </div>
    </section>
  );
}
