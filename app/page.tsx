"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, MoveUpRight } from "lucide-react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";

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
                <TechnicalLabel label="ALLOCATION_PREVIEW" value="S.01" className="leading-loose" />
              </div>
              
              <h2 className="text-[44px] md:text-[84px] font-heading leading-[0.8] tracking-[-0.1em] text-white uppercase max-w-lg">
                SELECTED <br />
                <span className="text-zinc-900 stroke-zinc-700">STUDIES</span>
              </h2>
            </div>
            
            <SystemButton href="/collections" className="group">
               VIEW_ALL_UNITS
               <MoveUpRight size={14} className="inline ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </SystemButton>
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
                className="group"
              >
                <HudContainer className="aspect-square flex flex-col items-center justify-center bg-white/[0.01] hover:bg-accent/[0.02] transition-colors">
                  <TechnicalLabel label="MOD_INIT" value={obj.id} className="absolute top-4 left-4" />
                  
                  <div className="w-1/3 aspect-square border border-white/5 group-hover:border-accent/30 flex items-center justify-center transition-all duration-700 group-hover:rotate-[15deg]">
                    <div className="w-2 h-2 bg-zinc-800 rounded-full group-hover:bg-accent transition-colors" />
                  </div>
                  
                  <span className="mt-8 text-[11px] font-mono tracking-[0.3em] text-zinc-700 group-hover:text-white transition-colors uppercase">
                    {obj.label}
                  </span>
                  
                  <TechnicalLabel label="REF_DATA" value={`0xAF${obj.id}`} className="absolute bottom-4 right-4 text-[7px]" />
                </HudContainer>
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
            <SystemButton href="/collections" className="py-6 px-16">
               ACQUIRE_UNITS
            </SystemButton>
         </div>
      </section>

    </main>
  );
}
