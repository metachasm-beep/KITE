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
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      
      {/* Product Preview Section */}
      <section className="py-24 px-6 border-b border-black/5 relative bg-muted/30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Terminal size={14} className="text-accent" />
                <span className="text-[10px] font-mono font-bold text-accent tracking-[0.3em] uppercase">Latest Releases</span>
              </div>
              
              <h2 className="text-[44px] md:text-[84px] font-heading leading-[0.8] tracking-[-0.1em] text-foreground uppercase max-w-lg">
                SELECTED <br />
                <span className="text-zinc-200">STUDIES</span>
              </h2>
            </div>
            
            <SystemButton href="/collections" className="group">
               ENTER THE SHOP
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
                <HudContainer className="aspect-square flex flex-col items-center justify-center bg-white hover:bg-accent/[0.02] transition-colors border-black/5">
                  <span className="absolute top-4 left-4 text-[9px] font-mono text-zinc-300">MOD_{obj.id}</span>
                  
                  <div className="w-1/3 aspect-square border border-black/5 group-hover:border-accent/30 flex items-center justify-center transition-all duration-700 group-hover:rotate-[15deg]">
                    <div className="w-2 h-2 bg-zinc-200 group-hover:bg-accent transition-colors" />
                  </div>
                  
                  <span className="mt-8 text-[11px] font-mono tracking-[0.3em] text-zinc-400 group-hover:text-foreground transition-colors uppercase">
                    {obj.label}
                  </span>
                </HudContainer>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <PhilosophySection />

      {/* Final Call to Action */}
      <section className="py-48 px-6 text-center relative overflow-hidden bg-muted">
         <div className="container mx-auto flex flex-col items-center space-y-12">
            <div className="w-12 h-[1px] bg-accent/40" />
            <h2 className="text-[32px] md:text-[44px] font-heading text-foreground tracking-tighter uppercase leading-tight">
               READY TO <br />
               <span className="text-accent underline underline-offset-8 decoration-accent/20">Own a Prototype?</span>
            </h2>
            <SystemButton href="/collections" className="py-6 px-16 bg-white text-accent hover:bg-accent hover:text-white border-accent/30">
               Visit Collections
            </SystemButton>
         </div>
      </section>

    </main>
  );
}
