"use client";

import { useTheme } from "@/lib/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Box, Layers, Maximize, Terminal } from "lucide-react";
import SplitText from "@/components/reactbits/SplitText";
import TrueFocus from "@/components/reactbits/TrueFocus";
import DecryptedText from "@/components/reactbits/DecryptedText";

export function PhilosophySection() {
  const { isCyberpunk } = useTheme();

  return (
    <section className={`min-h-screen w-full flex flex-col justify-center px-6 relative transition-colors duration-1000
      ${isCyberpunk ? "bg-background border-y border-accent/10" : "bg-white border-y border-stone-100"}`}>
      
      {/* Background Subtle Grid */}
      {isCyberpunk ? (
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none cyber-grid" />
      ) : (
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      )}

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Visualization Module */}
          <div className="relative group w-full max-w-lg mx-auto">
            <div className={`absolute -inset-4 transition-all duration-1000 blur-2xl opacity-0 group-hover:opacity-20
              ${isCyberpunk ? "bg-accent" : "bg-stone-200"}`} />
            
            <div className={`w-full aspect-square border relative overflow-hidden flex items-center justify-center p-12 transition-all duration-700 mechanical-bracket
              ${isCyberpunk 
                ? "bg-accent/5 border-accent/20 shadow-[inset_0_0_40px_rgba(0,245,212,0.05)]" 
                : "bg-muted/30 border-black/5 rounded-[3rem]"}`}>
               
               {isCyberpunk && <div className="absolute inset-0 scanline opacity-10" />}
               
               {/* Dynamic Central Piece */}
               <div className={`relative w-full h-full border flex items-center justify-center transition-all duration-700 mechanical-bracket
                 ${isCyberpunk ? "bg-background border-accent/40 shadow-[0_0_30px_oklch(var(--accent-values)/0.1)]" : "bg-white border-black/5 rounded-full shadow-sm"}`}>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-2px] rounded-full"
                    style={{ background: isCyberpunk 
                      ? 'conic-gradient(from 0deg, transparent 0%, oklch(var(--accent-values)/0.1) 50%, transparent 100%)'
                      : 'conic-gradient(from 0deg, transparent 0%, rgba(0,0,0,0.05) 50%, transparent 100%)' 
                    }}
                  />
                  <Box size={80} className={`relative z-10 transition-colors duration-700 ${isCyberpunk ? "text-accent cyber-glow" : "text-zinc-300"}`} strokeWidth={1} />
                  
                  {isCyberpunk && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-4/5 h-4/5 border border-accent/10 border-dashed rounded-full animate-[spin_60s_linear_infinite]" />
                    </div>
                  )}
               </div>

               {/* Discrete Readouts */}
               <div className={`absolute top-8 left-8 flex items-center gap-2 text-[10px] tracking-[0.3em] font-medium transition-colors duration-700
                 ${isCyberpunk ? "text-accent/60 font-mono" : "text-zinc-400"}`}>
                 <Terminal size={10} />
                 {isCyberpunk ? "MODULE_ID: PHI.01" : "Study P.01"}
               </div>
               <div className={`absolute bottom-8 right-8 text-[10px] tracking-[0.3em] font-medium transition-colors duration-700
                 ${isCyberpunk ? "text-accent/60 font-mono" : "text-zinc-400"}`}>
                 {isCyberpunk ? "LOGIC // OPTIMIZED" : "Design Logic"}
               </div>
            </div>
          </div>

          {/* Contemporary Copy */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`flex items-center gap-3 text-[10px] font-bold tracking-[0.5em] uppercase transition-colors duration-700
                  ${isCyberpunk ? "text-accent font-mono" : "text-accent"}`}
              >
                <div className={`w-2 h-2 ${isCyberpunk ? "bg-accent animate-pulse" : "bg-accent"}`} />
                {isCyberpunk ? "// SYSTEM_PHILOSOPHY" : "Our Philosophy"}
              </motion.div>
              
              {isCyberpunk ? (
                <div className="space-y-4">
                  <SplitText
                    text="UNIT_PROTOCOL"
                    className="text-5xl md:text-8xl font-michroma text-accent leading-[0.9] cyber-glow uppercase"
                    delay={40}
                  />
                  <div className="h-1 w-32 bg-accent/40" />
                </div>
              ) : (
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-foreground font-heading"
                >
                  Studies in <br className="hidden md:block" />
                  <span className="text-stone-300">Form & Beauty</span>
                </motion.h3>
              )}
            </div>

            <div className="max-w-2xl">
              {isCyberpunk ? (
                <DecryptedText
                  text="UNIT_01 (BASELAB) IS A RESEARCH HUB ORBITING THE VERTEX SHARD. WE RECONSTRUCT LOST SHIP DESIGNS FROM DIGITAL ECHOES IN THE FOLD. EVERY CURVE IS A RECOVERED MEMORY, EVERY TEXTURE A FRAGMENT OF HISTORY."
                  className="text-xs md:text-sm font-mono text-accent/50 leading-relaxed uppercase tracking-[0.2em] font-jetbrains"
                  speed={30}
                  animateOn="view"
                />
              ) : (
                <TrueFocus
                  sentence="Design is a dialogue between material and proportion. We minimize the noise to find the essential line. Every curve is deliberate, every texture is intentional."
                  className="text-lg md:text-2xl font-medium text-zinc-500 font-jost"
                  focusRadius={150}
                  unfocusedAlpha={0.15}
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex gap-6 items-start"
              >
                <div className={`p-4 transition-all duration-700 mechanical-bracket
                  ${isCyberpunk ? "bg-accent/10 border-accent/20 text-accent" : "bg-white border-black/5 text-foreground shadow-sm"}`}>
                    <Layers size={24} />
                </div>
                <div className="space-y-2 mt-1">
                   <span className={`text-sm font-bold tracking-widest uppercase block ${isCyberpunk ? "text-accent font-michroma" : "text-foreground font-heading"}`}>
                     {isCyberpunk ? "PRECISION_CRAFT" : "Precise Craft"}
                   </span>
                   <p className={`text-xs leading-relaxed tracking-wider ${isCyberpunk ? "text-accent/40 font-mono uppercase" : "text-zinc-500 font-jost"}`}>
                     {isCyberpunk ? "MANUFACTURING_ROOTED_IN_HIGH_PRECISION_ENGINEERING" : "Manufacturing processes rooted in contemporary precision engineering."}
                   </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className={`p-4 transition-all duration-700 mechanical-bracket
                  ${isCyberpunk ? "bg-accent/10 border-accent/20 text-accent" : "bg-white border-black/5 text-foreground shadow-sm"}`}>
                    <Maximize size={24} />
                </div>
                <div className="space-y-2 mt-1">
                   <span className={`text-sm font-bold tracking-widest uppercase block ${isCyberpunk ? "text-accent font-michroma" : "text-foreground font-heading"}`}>
                     {isCyberpunk ? "STRUCTURAL_RIGOR" : "Structural Rigor"}
                   </span>
                   <p className={`text-xs leading-relaxed tracking-wider ${isCyberpunk ? "text-accent/40 font-mono uppercase" : "text-zinc-500 font-jost"}`}>
                     {isCyberpunk ? "BALANCING_SCULPTURAL_PRESENCE_WITH_ARCHITECTURAL_LOGIC" : "Balancing sculptural presence with structural architectural logic."}
                   </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
