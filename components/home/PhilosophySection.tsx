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
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Visualization Module */}
          <div className="w-full max-w-md mx-auto aspect-square bg-muted/30 rounded-[3rem] border border-black/5 relative overflow-hidden flex items-center justify-center p-12">
             <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-60" />
             
             {/* Dynamic Central Piece */}
             <div className="relative w-full h-full border border-black/5 rounded-full flex items-center justify-center bg-white shadow-sm">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-1px] rounded-full"
                  style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(0,0,0,0.05) 50%, transparent 100%)' }}
                />
                <Box size={64} className="text-zinc-300 relative z-10" strokeWidth={1} />
             </div>

             {/* Discrete Readouts */}
             <span className="absolute top-8 left-8 text-xs font-medium text-zinc-400">Study P.01</span>
             <span className="absolute bottom-8 right-8 text-xs font-medium text-zinc-400">Design Logic</span>
          </div>

          {/* Contemporary Copy */}
          <div className="space-y-12 lg:pl-10">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm font-semibold text-accent tracking-wide uppercase block"
              >
                Our Philosophy
              </motion.span>
              
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-foreground"
              >
                Studies in <br className="hidden md:block" />
                <span className="text-zinc-400">Form & Beauty</span>
              </motion.h3>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-medium text-zinc-500 leading-relaxed max-w-xl"
            >
              Design is a dialogue between material and proportion. We minimize the noise to find the essential line. Every curve is deliberate, every texture is intentional.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white shadow-sm border border-black/5 rounded-2xl h-fit">
                   <Layers size={20} className="text-foreground" />
                </div>
                <div className="space-y-1 mt-1">
                   <span className="text-sm font-semibold text-foreground block">Precise Craft</span>
                   <p className="text-sm text-zinc-500 leading-relaxed">Manufacturing processes rooted in contemporary precision engineering.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white shadow-sm border border-black/5 rounded-2xl h-fit">
                   <Maximize size={20} className="text-foreground" />
                </div>
                <div className="space-y-1 mt-1">
                   <span className="text-sm font-semibold text-foreground block">Structural Rigor</span>
                   <p className="text-sm text-zinc-500 leading-relaxed">Balancing sculptural presence with structural architectural logic.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
