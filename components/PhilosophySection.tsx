"use client";

import { motion } from "framer-motion";

export function PhilosophySection() {
  return (
    <section className="py-48 px-6 bg-[#000] border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Visual Piece - Clean and Huge */}
          <div className="relative aspect-square bg-[#050505] rounded-3xl overflow-hidden shadow-2xl shadow-black group">
             <div className="absolute inset-x-0 bottom-12 text-center text-[11px] font-mono tracking-widest text-zinc-800">
               VISUAL_SPEC // 01 // 356_PTS
             </div>
             
             {/* Center Glow Piece - Apple Silicon feel */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center p-3 animate-pulse duration-[3000ms]">
                  <div className="w-full h-full bg-white/20 rounded-full blur-md" />
                </div>
             </div>
          </div>

          {/* Narrative Piece - Pure Apple UI style */}
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[14px] font-semibold text-zinc-500 tracking-[0.1em] mb-8 block uppercase"
            >
              PHILOSOPHY // 01
            </motion.span>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[44px] md:text-[68px] font-heading leading-[1.1] tracking-tighter text-white mb-10 uppercase"
            >
              The Science of <br />
              <span className="text-zinc-600">Speculative Forms</span>
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[17px] md:text-[20px] font-medium text-zinc-400 mb-12 leading-relaxed"
            >
              VOIDLAB operates at the intersection of precision engineering and transcendental sculpture. Every artifact is a testament to the belief that the tools of the future should be as beautiful as the ideas they inspire.
            </motion.p>

            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-2">
                <span className="text-[12px] font-bold text-white tracking-widest block uppercase">PRECISION</span>
                <p className="text-[13px] text-zinc-500 leading-relaxed">Engineered to a tolerance of 0.01mm using proprietary composites.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[12px] font-bold text-white tracking-widest block uppercase">ETHOS</span>
                <p className="text-[13px] text-zinc-500 leading-relaxed">Sustainably sourced resins and circular manufacturing loops.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
