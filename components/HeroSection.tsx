"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Cpu, Network, Activity, Database, Crosshair } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] bg-[#050505] flex flex-col justify-center overflow-hidden py-32 xl:py-0">
      {/* HUD Layer 0: Deep Space Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.15]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] border-[0.5px] border-accent/20" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black" />
        <div className="scanline-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Core Content Container */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Nav/Telemetry Detail (Desktop) */}
          <div className="hidden xl:flex col-span-2 flex-col gap-16 opacity-40">
            <div className="space-y-4">
               <span className="text-[9px] font-mono text-white/50 block tracking-widest uppercase">NAV_VECTR // 01</span>
               <Link href="/system" className="w-24 h-24 border border-white/10 relative flex items-center justify-center group hover:bg-white/[0.02] transition-colors">
                  <div className="absolute inset-2 border-t border-r border-accent/40 rounded-full animate-spin-slow group-hover:border-accent transition-colors" />
                  <Crosshair size={20} className="text-accent/60 group-hover:text-accent transition-colors" />
               </Link>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Database size={14} />, label: "DATA_LAKE", val: "SYNCED" },
                { icon: <Activity size={14} />, label: "ENV_STBL", val: "94.2%" },
                { icon: <Network size={14} />, label: "NET_NODE", val: "ACTIVE" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 border-l-2 border-white/10 pl-3">
                    <span className="flex items-center gap-2 text-[8px] font-mono text-white/40 uppercase tracking-widest">
                      {stat.icon} {stat.label}
                    </span>
                    <span className="text-[11px] font-mono text-accent uppercase tracking-widest">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER: Main Cinematic Mission Control */}
          <div className="col-span-1 xl:col-span-8 flex flex-col items-center xl:items-start text-center xl:text-left mt-16 xl:mt-0">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-6 mb-8"
            >
               <span className="text-[9px] font-mono text-zinc-500 tracking-[0.4em] uppercase">SYSTEM_STATE</span>
               <div className="flex gap-1">
                 {[1,2,3].map(i => <div key={i} className="w-1 h-3 bg-accent animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />)}
               </div>
               <span className="text-[9px] font-bold text-white tracking-widest uppercase">INITIALIZED</span>
            </motion.div>

            {/* Huge Title */}
            <div className="relative mb-16 w-full flex justify-center xl:justify-start">
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[72px] md:text-[120px] lg:text-[160px] font-heading leading-none tracking-[-0.08em] text-white flex items-center gap-1"
              >
                UNIT<span className="text-zinc-900 stroke-zinc-700 font-black">_01</span>
              </motion.h1>
              
              {/* Corner Brackets */}
              <div className="absolute -inset-4 md:-inset-8 border border-white/5 opacity-50 pointer-events-none hidden md:block">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/40" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40" />
              </div>
            </div>

            {/* High-Density Copy Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12 w-full text-left"
            >
              <div className="space-y-6">
                <span className="text-[10px] font-bold text-accent tracking-[0.4em] uppercase block">THE PROTOCOL</span>
                <p className="text-[13px] md:text-[14px] font-mono tracking-tight text-zinc-400 uppercase leading-relaxed">
                  We are a physical design laboratory engineering geometric studies in heavy-density materials. Our architecture bridges digital telemetry with tactile presence. 
                </p>
              </div>

              <div className="space-y-6">
                <span className="text-[10px] font-bold text-zinc-600 tracking-[0.4em] uppercase block">THE MANUFACTURE</span>
                <p className="text-[13px] md:text-[14px] font-mono tracking-tight text-zinc-400 uppercase leading-relaxed">
                  Every object is rigorously specified for exact tolerances. We do not mass-produce; we allocate units to the archive through strict drop mechanics.
                </p>
              </div>
            </motion.div>

            {/* CTAs & Logs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-16 w-full flex flex-col md:flex-row items-center gap-8 justify-between border border-white/5 p-6 bg-white/[0.01]"
            >
              <Link href="/system" className="flex items-center gap-4 text-zinc-500 w-full md:w-auto hover:text-white transition-colors group cursor-pointer">
                <Cpu size={14} className="text-accent group-hover:animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest uppercase">ENG_PROTOCOL_ACTIVE</span>
              </Link>

              <Link 
                href="/collections" 
                className="btn-hud group py-4 px-10 text-[11px] w-full md:w-auto"
              >
                ACCESS_ARCHIVE
                <ChevronRight size={14} className="inline ml-3 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>

          </div>

          {/* RIGHT: Rotating Model / Tech Vis (Desktop) */}
          <div className="hidden xl:flex col-span-2 justify-end">
             <Link href="/collections" className="w-56 h-[500px] border border-white/5 relative flex flex-col justify-between p-6 opacity-80 overflow-hidden group hover:opacity-100 hover:border-accent/30 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-accent/[0.02]" />
                
                {/* Tech readouts top */}
                <div className="space-y-1">
                   <span className="text-[8px] font-mono text-zinc-600 block tracking-widest">GEO_WEIGHT</span>
                   <span className="text-[10px] font-mono text-white block tracking-widest">2.14KG // RESIN</span>
                </div>

                {/* Rotating wireframe illusion */}
                <div className="flex-1 flex items-center justify-center relative">
                   <div className="w-32 h-32 border border-accent/20 rotate-45 group-hover:rotate-0 transition-transform duration-[2000ms] shadow-[0_0_40px_rgba(0,242,255,0.05)] group-hover:shadow-[0_0_60px_rgba(0,242,255,0.15)]" />
                   <div className="w-24 h-24 border border-white/20 -rotate-45 absolute group-hover:-rotate-90 transition-transform duration-[3000ms]" />
                   <div className="w-1 h-1 bg-accent rounded-full absolute animate-ping group-hover:scale-150 transition-transform" />
                </div>

                {/* Tech readouts bottom */}
                <div className="space-y-1 text-right">
                   <span className="text-[8px] font-mono text-zinc-600 block tracking-widest group-hover:text-accent/60 transition-colors">STATUS</span>
                   <span className="text-[10px] font-mono text-accent block tracking-widest animate-pulse">CALIBRATED</span>
                </div>
             </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
