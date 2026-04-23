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
    <section className={`h-full w-full flex flex-col justify-center px-6 relative transition-colors duration-1000 overflow-hidden
      ${isCyberpunk ? "bg-background" : "bg-white"}`}>
      
      <div className="container mx-auto relative z-10 py-10 md:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-20 items-center">
          
          {/* Visualization Module */}
          <div className="relative group w-full max-w-sm md:max-w-lg mx-auto order-2 lg:order-1">
            <div className={`absolute -inset-4 transition-all duration-1000 blur-2xl opacity-0 group-hover:opacity-20
              ${isCyberpunk ? "bg-accent" : "bg-stone-200"}`} />
            
            <div className={`w-full aspect-square border relative overflow-hidden flex items-center justify-center p-6 md:p-12 transition-all duration-700 mechanical-bracket
              ${isCyberpunk 
                ? "bg-accent/5 border-accent/20 shadow-[inset_0_0_40px_rgba(0,245,212,0.05)]" 
                : "bg-muted/30 border-black/5 rounded-[2rem] md:rounded-[3rem]"}`}>
               
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
                  <Box size={60} className={`relative z-10 transition-colors duration-700 md:w-20 md:h-20 ${isCyberpunk ? "text-accent cyber-glow" : "text-zinc-300"}`} strokeWidth={1} />
                  
                  {isCyberpunk && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-4/5 h-4/5 border border-accent/10 border-dashed rounded-full animate-[spin_60s_linear_infinite]" />
                    </div>
                  )}
               </div>

               {/* Discrete Readouts */}
               <div className={`absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-[8px] md:text-[10px] tracking-[0.3em] font-medium transition-colors duration-700
                 ${isCyberpunk ? "text-accent/60 font-mono" : "text-zinc-400"}`}>
                 <Terminal size={10} />
                 {isCyberpunk ? "PHI.01" : "Study P.01"}
               </div>
               <div className={`absolute bottom-6 right-6 md:bottom-8 md:right-8 text-[8px] md:text-[10px] tracking-[0.3em] font-medium transition-colors duration-700
                 ${isCyberpunk ? "text-accent/60 font-mono" : "text-zinc-400"}`}>
                 {isCyberpunk ? "LOGIC // OPT" : "Design Logic"}
               </div>
            </div>
          </div>

          {/* Contemporary Copy */}
          <div className="space-y-6 md:space-y-12 order-1 lg:order-2">
            <div className="space-y-3 md:space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`flex items-center gap-3 text-[9px] md:text-[10px] font-bold tracking-[0.5em] uppercase transition-colors duration-700
                  ${isCyberpunk ? "text-accent font-mono" : "text-accent"}`}
              >
                <div className={`w-1.5 h-1.5 md:w-2 md:h-2 ${isCyberpunk ? "bg-accent animate-pulse" : "bg-accent"}`} />
                {isCyberpunk ? "// SYSTEM_PHILOSOPHY" : "Our Philosophy"}
              </motion.div>
              
              {isCyberpunk ? (
                <div className="space-y-3 md:space-y-4">
                  <SplitText
                    text="UNIT_PROTOCOL"
                    className="text-4xl sm:text-5xl md:text-8xl font-michroma text-accent leading-[0.9] cyber-glow uppercase"
                    delay={40}
                  />
                  <div className="h-0.5 md:h-1 w-20 md:w-32 bg-accent/40" />
                </div>
              ) : (
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-foreground font-heading"
                >
                  Studies in <br className="hidden md:block" />
                  <span className="text-stone-300">Form & Beauty</span>
                </motion.h3>
              )}
            </div>

            <div className="max-w-xl">
              {isCyberpunk ? (
                <DecryptedText
                  text="UNIT_01 (BASELAB) IS A RESEARCH HUB ORBITING THE VERTEX SHARD. WE RECONSTRUCT LOST SHIP DESIGNS FROM DIGITAL ECHOES IN THE FOLD. EVERY CURVE IS A RECOVERED MEMORY."
                  className="text-[9px] md:text-sm font-mono text-accent/50 leading-relaxed uppercase tracking-[0.15em] md:tracking-[0.2em] font-jetbrains"
                  speed={30}
                  animateOn="view"
                />
              ) : (
                <TrueFocus
                  sentence="Design is a dialogue between material and proportion. We minimize the noise to find the essential line. Every curve is deliberate, every texture is intentional."
                  className="text-base md:text-2xl font-medium text-zinc-500 font-jost"
                  focusRadius={100}
                  unfocusedAlpha={0.15}
                />
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 pt-4 md:pt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex gap-4 md:gap-6 items-start"
              >
                <div className={`p-3 md:p-4 transition-all duration-700 mechanical-bracket
                  ${isCyberpunk ? "bg-accent/10 border-accent/20 text-accent" : "bg-white border-black/5 text-foreground shadow-sm"}`}>
                    <Layers size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="space-y-1 md:space-y-2 mt-1">
                   <span className={`text-xs md:text-sm font-bold tracking-widest uppercase block ${isCyberpunk ? "text-accent font-michroma" : "text-foreground font-heading"}`}>
                     {isCyberpunk ? "PRECISION_CRAFT" : "Precise Craft"}
                   </span>
                   <p className={`text-[9px] md:text-xs leading-relaxed tracking-wider ${isCyberpunk ? "text-accent/40 font-mono uppercase" : "text-zinc-500 font-jost"}`}>
                     {isCyberpunk ? "MANUFACTURING_ROOTED_IN_HIGH_PRECISION" : "Processes rooted in contemporary precision engineering."}
                   </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-4 md:gap-6 items-start"
              >
                <div className={`p-3 md:p-4 transition-all duration-700 mechanical-bracket
                  ${isCyberpunk ? "bg-accent/10 border-accent/20 text-accent" : "bg-white border-black/5 text-foreground shadow-sm"}`}>
                    <Maximize size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="space-y-1 md:space-y-2 mt-1">
                   <span className={`text-xs md:text-sm font-bold tracking-widest uppercase block ${isCyberpunk ? "text-accent font-michroma" : "text-foreground font-heading"}`}>
                     {isCyberpunk ? "STRUCTURAL_RIGOR" : "Structural Rigor"}
                   </span>
                   <p className={`text-[9px] md:text-xs leading-relaxed tracking-wider ${isCyberpunk ? "text-accent/40 font-mono uppercase" : "text-zinc-500 font-jost"}`}>
                     {isCyberpunk ? "BALANCING_SCULPTURAL_PRESENCE" : "Balancing sculptural presence with structural logic."}
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
