"use client";

import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, MoveUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden">
      <HeroSection />
      
      {/* Current Drop Preview Section - HUD Style */}
      <section className="py-24 px-6 border-b border-white/5 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Terminal size={14} className="text-accent" />
                <span className="text-zinc-600 text-[10px] font-mono tracking-[0.4em] uppercase leading-loose">
                  ALLOCATION_PREVIEW // S.01
                </span>
              </div>
              
              <h2 className="text-[44px] md:text-[84px] font-heading leading-[0.8] tracking-[-0.1em] text-white uppercase max-w-lg">
                SELECTED <br />
                <span className="text-zinc-900 stroke-zinc-700">STUDIES</span>
              </h2>
            </div>
            
            <Link href="/collections" className="btn-hud group">
               VIEW_ALL_UNITS
               <MoveUpRight size={14} className="inline ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "01", label: "VOID FIGURE 01" },
              { id: "02", label: "NEUROFORM CUBE" },
              { id: "03", label: "GEO STRUCTURE" },
            ].map((obj) => (
              <Link 
                key={obj.id} 
                href="/collections"
                className="hud-container aspect-square flex flex-col items-center justify-center group bg-white/[0.01] hover:bg-accent/[0.02] transition-colors"
              >
                <div className="corner" />
                <div className="absolute top-4 left-4 text-telemetry">MOD_INIT // {obj.id}</div>
                
                <div className="w-1/3 aspect-square border border-white/5 group-hover:border-accent/30 flex items-center justify-center transition-all duration-700 group-hover:rotate-[15deg]">
                  <div className="w-2 h-2 bg-zinc-800 rounded-full group-hover:bg-accent transition-colors" />
                </div>
                
                <span className="mt-8 text-[11px] font-mono tracking-[0.3em] text-zinc-700 group-hover:text-white transition-colors uppercase">
                  {obj.label}
                </span>
                
                {/* Micro readout */}
                <div className="absolute bottom-4 right-4 text-[7px] font-mono text-zinc-800 uppercase tracking-tighter">
                   REF_DATA // 0xAF{obj.id}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PhilosophySection />

      {/* Final Call to Action HUD */}
      <section className="py-48 px-6 text-center relative overflow-hidden">
         <div className="container mx-auto flex flex-col items-center space-y-12">
            <div className="w-12 h-[1px] bg-accent/40" />
            <h2 className="text-[32px] md:text-[44px] font-heading text-white tracking-tighter uppercase leading-tight">
               ENTER THE <br />
               <span className="text-accent underline underline-offset-8 decoration-accent/20">UNIT_01 PROTOCOL</span>
            </h2>
            <Link href="/collections" className="btn-hud py-6 px-16">
               ACQUIRE_UNITS
            </Link>
         </div>
      </section>
    </main>
  );
}
