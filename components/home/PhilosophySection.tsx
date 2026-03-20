"use client";

import { useTheme } from "@/lib/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Box, Layers, Maximize } from "lucide-react";
import SplitText from "@/components/reactbits/SplitText";
import TrueFocus from "@/components/reactbits/TrueFocus";
import DecryptedText from "@/components/reactbits/DecryptedText";

export function PhilosophySection() {
  const { isCyberpunk } = useTheme();

  return (
    <section className={`py-48 px-6 border-y relative transition-colors duration-700
      ${isCyberpunk ? "bg-black border-[#00f5d4]/10" : "bg-background border-black/5"}`}>
      {/* Background Subtle Grid */}
      <div className={`absolute inset-0 z-0 opacity-[0.03] pointer-events-none transition-opacity duration-700
        ${isCyberpunk ? "invert opacity-[0.05]" : ""}`} 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Visualization Module */}
          <div className={`w-full max-w-md mx-auto aspect-square rounded-[3rem] border relative overflow-hidden flex items-center justify-center p-12 transition-all duration-700
            ${isCyberpunk 
              ? "bg-[#00f5d4]/5 border-[#00f5d4]/20 shadow-[0_0_40px_rgba(0,245,212,0.05)] rounded-none" 
              : "bg-muted/30 border-black/5"}`}>
             <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-60" />
             
             {/* Dynamic Central Piece */}
             <div className={`relative w-full h-full border rounded-full flex items-center justify-center transition-all duration-700
               ${isCyberpunk ? "bg-black border-[#00f5d4]/40 shadow-[0_0_20px_rgba(0,245,212,0.2)]" : "bg-white border-black/5 shadow-sm"}`}>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-1px] rounded-full"
                  style={{ background: isCyberpunk 
                    ? 'conic-gradient(from 0deg, transparent 0%, rgba(0,245,212,0.1) 50%, transparent 100%)'
                    : 'conic-gradient(from 0deg, transparent 0%, rgba(0,0,0,0.05) 50%, transparent 100%)' 
                  }}
                />
                <Box size={64} className={`relative z-10 transition-colors duration-700 ${isCyberpunk ? "text-[#00f5d4]" : "text-zinc-300"}`} strokeWidth={1} />
             </div>

             {/* Discrete Readouts */}
             <span className={`absolute top-8 left-8 text-xs font-medium ${isCyberpunk ? "text-[#00f5d4]/60 font-mono" : "text-zinc-400"}`}>
               {isCyberpunk ? "UNIT_ID: PHI.01" : "Study P.01"}
             </span>
             <span className={`absolute bottom-8 right-8 text-xs font-medium ${isCyberpunk ? "text-[#00f5d4]/60 font-mono" : "text-zinc-400"}`}>
               {isCyberpunk ? "LOGIC: OPTIMIZED" : "Design Logic"}
             </span>
          </div>

          {/* Contemporary Copy */}
          <div className="space-y-12 lg:pl-10">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className={`text-sm font-semibold tracking-wide uppercase block transition-colors duration-700
                  ${isCyberpunk ? "text-[#00f5d4] font-mono" : "text-accent"}`}
              >
                {isCyberpunk ? "// SYSTEM_PHILOSOPHY" : "Our Philosophy"}
              </motion.span>
              
              {isCyberpunk ? (
                <div className="space-y-2">
                  <SplitText
                    text="UNIT_PROTOCOL"
                    className="text-4xl md:text-6xl font-mono text-[#00f5d4] leading-tight cyber-glow uppercase"
                    delay={40}
                  />
                  <div className="h-px w-32 bg-[#00f5d4]/40" />
                </div>
              ) : (
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-7xl font-bold leading-tight tracking-tight text-foreground font-heading"
                >
                  Studies in <br className="hidden md:block" />
                  <span className="text-stone-400">Form & Beauty</span>
                </motion.h3>
              )}
            </div>

            <div className="max-w-xl">
              {isCyberpunk ? (
                <DecryptedText
                  text="DESIGN IS A DIALOGUE BETWEEN MATERIAL AND PROPORTION. WE MINIMIZE THE NOISE TO FIND THE ESSENTIAL LINE. EVERY CURVE IS DELIBERATE, EVERY TEXTURE IS INTENTIONAL."
                  className="text-sm font-mono text-[#00f5d4]/60 leading-relaxed uppercase tracking-widest"
                  speed={40}
                  animateOn="view"
                />
              ) : (
                <TrueFocus
                  sentence="Design is a dialogue between material and proportion. We minimize the noise to find the essential line. Every curve is deliberate, every texture is intentional."
                  className="text-lg md:text-xl font-medium text-zinc-500"
                  focusRadius={120}
                  unfocusedAlpha={0.15}
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
              <div className="flex gap-4 items-start">
                <div className={`p-3 shadow-sm border rounded-2xl h-fit transition-all duration-700
                  ${isCyberpunk ? "bg-black border-[#00f5d4]/20 rounded-none" : "bg-white border-black/5"}`}>
                    <Layers size={20} className={isCyberpunk ? "text-[#00f5d4]" : "text-foreground"} />
                </div>
                <div className="space-y-1 mt-1">
                   <span className={`text-sm font-semibold block ${isCyberpunk ? "text-[#00f5d4] font-mono" : "text-foreground"}`}>
                     {isCyberpunk ? "PRECISION_CRAFT" : "Precise Craft"}
                   </span>
                   <p className={`text-sm leading-relaxed ${isCyberpunk ? "text-[#00f5d4]/40 font-mono text-[10px] uppercase" : "text-zinc-500"}`}>
                     {isCyberpunk ? "MANUFACTURING_ROOTED_IN_HIGH_PRECISION" : "Manufacturing processes rooted in contemporary precision engineering."}
                   </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className={`p-3 shadow-sm border rounded-2xl h-fit transition-all duration-700
                  ${isCyberpunk ? "bg-black border-[#00f5d4]/20 rounded-none" : "bg-white border-black/5"}`}>
                    <Maximize size={20} className={isCyberpunk ? "text-[#00f5d4]" : "text-foreground"} />
                </div>
                <div className="space-y-1 mt-1">
                   <span className={`text-sm font-semibold block ${isCyberpunk ? "text-[#00f5d4] font-mono" : "text-foreground"}`}>
                     {isCyberpunk ? "STRUCTURAL_RIGOR" : "Structural Rigor"}
                   </span>
                   <p className={`text-sm leading-relaxed ${isCyberpunk ? "text-[#00f5d4]/40 font-mono text-[10px] uppercase" : "text-zinc-500"}`}>
                     {isCyberpunk ? "BALANCING_SCULPTURAL_PRESENCE" : "Balancing sculptural presence with structural architectural logic."}
                   </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
