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
      <section className="py-32 px-6 bg-white relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal size={12} className="text-zinc-400" />
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Latest Releases</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground max-w-lg">
                Selected <span className="text-zinc-400">Studies</span>
              </h2>
            </div>
            
            <SystemButton href="/collections" className="group">
               Enter Shop
               <MoveUpRight size={16} className="inline ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </SystemButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "01", label: "Figure 01" },
              { id: "02", label: "Neuroform" },
              { id: "03", label: "Structure" },
            ].map((obj) => (
              <Link 
                key={obj.id} 
                href="/collections"
                className="group"
              >
                <div className="aspect-[4/5] flex flex-col items-center justify-center bg-muted/40 rounded-3xl hover:bg-muted/80 transition-colors border border-black/5 relative overflow-hidden">
                  <span className="absolute top-6 left-6 text-xs font-medium text-zinc-400">0{obj.id}</span>
                  
                  <div className="w-1/3 aspect-square bg-white rounded-2xl shadow-sm border border-black/5 group-hover:scale-105 flex items-center justify-center transition-all duration-500">
                    <div className="w-2 h-2 bg-zinc-300 rounded-full group-hover:bg-accent transition-colors" />
                  </div>
                  
                  <span className="absolute bottom-8 text-sm font-medium tracking-wide text-zinc-500 group-hover:text-foreground transition-colors">
                    {obj.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <PhilosophySection />

      {/* Final Call to Action */}
      <section className="py-40 px-6 text-center relative overflow-hidden bg-white border-t border-black/5">
         <div className="container mx-auto flex flex-col items-center space-y-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
               Ready to own a prototype?
            </h2>
            <p className="text-lg text-zinc-500 max-w-md mx-auto">
               Explore our latest collection of premium hardware essentials.
            </p>
            <SystemButton href="/collections" className="py-4 px-12 bg-foreground text-white hover:bg-black rounded-full text-base mt-4">
               Visit Collections
            </SystemButton>
         </div>
      </section>

    </main>
  );
}
