"use client";

import { motion } from "framer-motion";
import { Layers, Maximize, Box } from "lucide-react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";

export function PhilosophySection() {
  return (
    <section className="py-48 px-6 bg-background border-y border-black/5 relative">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          {/* Visualization Module */}
          <HudContainer className="aspect-square group bg-white border-black/5" showScanline>
             <div className="absolute inset-0 bg-black/[0.01] -z-10" />
             
             {/* Dynamic Central Piece */}
             <div className="absolute inset-20 border border-accent/10 rounded-full flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-t border-accent/40 rounded-full"
                />
                <div className="w-1/2 h-1/2 bg-accent/5 blur-3xl rounded-full" />
                <Box size={80} className="text-zinc-100 group-hover:text-accent/40 transition-colors duration-700" />
             </div>

             {/* Discrete Readouts */}
             <span className="absolute top-4 left-4 text-[9px] font-mono text-zinc-300 uppercase tracking-widest">Study P.01</span>
             <span className="absolute bottom-4 right-4 text-[9px] font-mono text-zinc-300 uppercase tracking-widest">Design Logic</span>
          </HudContainer>

          {/* Contemporary Copy */}
          <div className="space-y-16">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[11px] font-bold text-accent tracking-[0.4em] uppercase block"
              >
                Our Philosophy
              </motion.span>
              
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-[48px] md:text-[84px] font-heading leading-none tracking-[-0.08em] text-foreground uppercase"
              >
                STUDIES IN <br />
                <span className="text-zinc-200">FORM & BEAUTY</span>
              </motion.h3>

              <div className="w-24 h-[1px] bg-accent/40" />
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[17px] md:text-[20px] font-medium text-zinc-500 leading-relaxed max-w-xl"
            >
              Design is a dialogue between material and proportion. We minimize the noise to find the essential line. Every curve is deliberate, every texture is intentional.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-4">
                <div className="p-3 bg-muted border border-black/5 h-fit">
                   <Layers size={20} className="text-accent" />
                </div>
                <div className="space-y-2">
                   <span className="text-[12px] font-bold text-foreground tracking-widest uppercase block">Precise Craft</span>
                   <p className="text-[12px] text-zinc-500 leading-relaxed">Manufacturing processes rooted in contemporary precision engineering.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-3 bg-muted border border-black/5 h-fit">
                   <Maximize size={20} className="text-accent" />
                </div>
                <div className="space-y-2">
                   <span className="text-[12px] font-bold text-foreground tracking-widest uppercase block">Structural Rigor</span>
                   <p className="text-[12px] text-zinc-500 leading-relaxed">Balancing sculptural presence with structural architectural logic.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
