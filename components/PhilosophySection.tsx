"use client";

import { motion } from "framer-motion";
import { Layers, Maximize, Box } from "lucide-react";

export function PhilosophySection() {
  return (
    <section className="py-48 px-6 bg-[#050505] border-y border-white/5 relative">
      {/* Background HUD Scan Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          {/* Technical Visualization Module */}
          <div className="hud-container aspect-square group">
             <div className="absolute inset-0 bg-white/[0.02] -z-10" />
             <div className="corner" />
             
             {/* Dynamic Central Piece */}
             <div className="absolute inset-20 border border-accent/10 rounded-full flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-t border-accent/40 rounded-full"
                />
                <div className="w-1/2 h-1/2 bg-white/5 blur-3xl rounded-full" />
                <Box size={80} className="text-white/20 group-hover:text-accent/40 transition-colors duration-700" />
             </div>

             {/* Tech Readouts around the container */}
             <div className="absolute top-4 left-4 text-telemetry">MOD_INDEX // P.01</div>
             <div className="absolute top-4 right-4 text-telemetry">GEO_STABLE // TRUE</div>
             <div className="absolute bottom-4 left-4 text-telemetry">LAT_SCALE // 1:0.01</div>
             <div className="absolute bottom-4 right-4 text-telemetry">UNIT_PROTOCOL</div>
             
             {/* Scanning Line overlay */}
             <div className="scanline-overlay" />
          </div>

          {/* Contemporary "Material Logic" Copy */}
          <div className="space-y-16">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[11px] font-bold text-accent tracking-[0.4em] uppercase block"
              >
                STUDY_REF // MATERIAL_LOGIC
              </motion.span>
              
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-[48px] md:text-[84px] font-heading leading-none tracking-[-0.08em] text-white uppercase"
              >
                STUDIES IN <br />
                <span className="text-zinc-800">FORM & WEIGHT</span>
              </motion.h3>

              <div className="w-24 h-[1px] bg-accent/40" />
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[17px] md:text-[20px] font-medium text-zinc-500 leading-relaxed max-w-xl"
            >
              Design is a dialogue between material and math. We minimize the noise to find the essential line. No fluff. Just high-density form for those who value the technical edge.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 border border-white/5 h-fit">
                   <Layers size={20} className="text-accent" />
                </div>
                <div className="space-y-2">
                   <span className="text-[12px] font-bold text-white tracking-widest uppercase block">ZERO-POINT_LAYER</span>
                   <p className="text-[12px] text-zinc-600 leading-relaxed">Manufacturing processes rooted in contemporary precision engineering.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 border border-white/5 h-fit">
                   <Maximize size={20} className="text-accent" />
                </div>
                <div className="space-y-2">
                   <span className="text-[12px] font-bold text-white tracking-widest uppercase block">ARCH_RIGOR</span>
                   <p className="text-[12px] text-zinc-600 leading-relaxed">Balancing sculptural presence with structural architectural logic.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
