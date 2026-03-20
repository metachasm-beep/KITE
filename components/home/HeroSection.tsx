"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Cpu, Network, Activity, Database, Crosshair } from "lucide-react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import Aurora from "@/components/reactbits/Aurora";
import GridScan from "@/components/reactbits/GridScan";
import SplitText from "@/components/reactbits/SplitText";
import DecryptedText from "@/components/reactbits/DecryptedText";

export function HeroSection() {
  const { isCyberpunk } = useTheme();

  return (
    <section className={`relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-20 transition-colors duration-700
      ${isCyberpunk ? "bg-black" : "bg-white"}`}>
      
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {isCyberpunk ? (
          <GridScan 
            linesColor="#00f5d4" 
            scanColor="#00f5d4" 
            scanOpacity={0.2} 
            gridScale={0.8}
          />
        ) : (
          <div className="absolute inset-0">
            <Aurora 
              colorStops={['#f4f4f5', '#e4e4e7', '#f4f4f5']} 
              amplitude={0.5} 
              className="opacity-40" 
            />
            {/* Soft abstract blurs as layer on top of Aurora for BaseLab */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-zinc-100/50 blur-3xl opacity-50 mix-blend-multiply" />
            <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-zinc-50/50 blur-3xl opacity-60 mix-blend-multiply" />
          </div>
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 transition-colors
            ${isCyberpunk 
              ? "bg-black border-[#00f5d4]/20 text-[#00f5d4]" 
              : "bg-muted border-black/5 text-zinc-600"}`}
        >
           <span className={`w-1.5 h-1.5 rounded-full ${isCyberpunk ? "bg-[#00f5d4] animate-pulse" : "bg-foreground"}`} />
           <span className={`text-xs font-medium tracking-wide ${isCyberpunk ? "font-mono" : ""}`}>
             {isCyberpunk ? "UNIT_01 // SECURE_ACCESS_GRANTED" : "BaseLab Collection 01 Available"}
           </span>
        </motion.div>

        {/* Huge Title */}
        <div className="relative mb-8 w-full max-w-5xl mx-auto flex flex-col items-center">
          <SplitText
            text="Refined Essentials"
            className={`text-6xl md:text-8xl lg:text-9xl font-semibold leading-[0.9] tracking-tight
              ${isCyberpunk ? "text-[#00f5d4] font-mono cyber-glow" : "text-foreground"}`}
            delay={40}
            duration={0.8}
            textAlign="center"
          />
        </div>

        {/* Subtitle */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          {isCyberpunk ? (
            <DecryptedText 
              text="ADVANCED HARDWARE REPOSITORY. BRIDGING THE GAP BETWEEN ARCHITECTURAL FORM AND NUMERICAL UTILITY."
              animateOn="view"
              speed={40}
              className="text-sm md:text-base font-mono text-[#00f5d4]/60 leading-relaxed uppercase tracking-wider"
            />
          ) : (
            <p className="text-lg md:text-xl font-medium text-zinc-500 leading-relaxed">
              Discover premium, minimalist hardware designed for modern living. We bridge the gap between architectural form and everyday utility.
            </p>
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link 
            href="/collections" 
            className={`px-10 py-4 rounded-full font-medium transition-all w-full sm:w-auto shadow-sm
              ${isCyberpunk 
                ? "bg-[#00f5d4] text-black hover:bg-white hover:scale-105 rounded-none font-mono" 
                : "bg-foreground text-white hover:bg-black"}`}
          >
            {isCyberpunk ? "> ENTER_CATALOG" : "Explore the Shop"}
          </Link>
          <Link 
            href="/system" 
            className={`px-10 py-4 rounded-full font-medium transition-all w-full sm:w-auto border
              ${isCyberpunk 
                ? "border-[#00f5d4]/50 text-[#00f5d4] hover:bg-[#00f5d4]/10 rounded-none font-mono" 
                : "bg-muted text-foreground border-black/5 hover:bg-black/5"}`}
          >
            {isCyberpunk ? "// SYSTEM_INTEL" : "Our Story"}
          </Link>
        </motion.div>

        {/* Minimal Hero Graphic / Product Hint */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className={`mt-20 w-full max-w-4xl max-h-[400px] h-64 md:h-96 rounded-3xl border flex items-center justify-center relative overflow-hidden group
             ${isCyberpunk 
               ? "bg-[#00f5d4]/5 border-[#00f5d4]/20 rounded-none shadow-[0_0_30px_rgba(0,245,212,0.05)]" 
               : "bg-muted/30 border-black/5"}`}
        >
           {/* Abstract minimalist geometry */ }
           <div className={`absolute w-[80%] h-[80%] border rounded-full transition-colors duration-700
             ${isCyberpunk ? "border-[#00f5d4]/10" : "border-black/5"}`} />
           <div className={`absolute w-[60%] h-[60%] border rounded-full backdrop-blur-sm transition-colors duration-700
             ${isCyberpunk ? "border-[#00f5d4]/20 bg-black/40" : "border-black/5 bg-white/50"}`} />
           
           <div className={`absolute w-28 h-28 shadow-xl rounded-2xl rotate-12 flex items-center justify-center transition-all duration-700 group-hover:rotate-0
             ${isCyberpunk ? "bg-black border border-[#00f5d4] shadow-[#00f5d4]/20" : "bg-white border border-black/5"}`}>
              <div className={`w-12 h-12 border-2 rounded-full flex items-center justify-center
                ${isCyberpunk ? "border-[#00f5d4]" : "border-zinc-200"}`}>
                {isCyberpunk && <div className="w-4 h-4 bg-[#00f5d4] rounded-full animate-ping" />}
              </div>
           </div>

           {isCyberpunk && (
             <div className="absolute bottom-6 right-8 font-mono text-[10px] text-[#00f5d4]/40 flex flex-col items-end">
               <span>LATENCY: 12ms</span>
               <span>UPTIME: 99.99%</span>
             </div>
           )}
        </motion.div>

      </div>
    </section>
  );
}
