"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Cpu, Network, Activity, Database, Crosshair, Terminal } from "lucide-react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import Aurora from "@/components/reactbits/Aurora";
import GridScan from "@/components/reactbits/GridScan";
import BlurText from "@/components/reactbits/BlurText";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ElectricBorder from "@/components/reactbits/ElectricBorder";
import { SpringButton } from "@/components/ruixen/spring-button";

export function HeroSection() {
  const { isCyberpunk } = useTheme();

  return (
    <section className={`relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20 transition-colors duration-700
      ${isCyberpunk ? "bg-black" : "bg-[#FAFAF9]"}`}>
      
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
          <Aurora 
            colorStops={['#E7E5E4', '#F5F5F4', '#FAFAF9']} 
            amplitude={0.6} 
            className="opacity-60" 
          />
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border mb-10 transition-colors backdrop-blur-md
            ${isCyberpunk 
              ? "bg-black/40 border-[#00f5d4]/20 text-[#00f5d4]" 
              : "bg-white/20 border-black/5 text-stone-500 shadow-sm"}`}
        >
           <span className={`w-1.5 h-1.5 rounded-full ${isCyberpunk ? "bg-[#00f5d4] animate-pulse" : "bg-stone-400"}`} />
           <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isCyberpunk ? "font-mono" : "font-jost"}`}>
             {isCyberpunk ? "UNIT_01 // ACCESS_STABLE" : "DESIGNED BY TURTLE LABS // SERIES 01"}
           </span>
        </motion.div>

        {/* Huge Title */}
        <div className="relative mb-10 w-full max-w-5xl mx-auto flex flex-col items-center">
          {isCyberpunk ? (
            <div className="space-y-4">
              <DecryptedText
                text="TRANSFORM_GEN_01"
                className="text-5xl md:text-8xl font-bold leading-[1] tracking-tighter text-[#00f5d4] font-mono cyber-glow uppercase"
                animateOn="view"
                speed={50}
              />
            </div>
          ) : (
            <div className="space-y-4">
              <BlurText
                text="Refined"
                className="text-6xl md:text-9xl font-bold leading-[0.8] tracking-tighter text-foreground font-heading"
                delay={80}
                animateBy="letters"
                direction="bottom"
                textAlign="center"
              />
              <BlurText
                text="Essentials"
                className="text-6xl md:text-9xl font-bold leading-[0.8] tracking-tighter text-stone-300 font-heading"
                delay={160}
                animateBy="letters"
                direction="bottom"
                textAlign="center"
              />
            </div>
          )}
        </div>

        {/* Subtitle */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-2xl mx-auto mb-16"
        >
          {isCyberpunk ? (
            <DecryptedText 
              text="ADVANCED HARDWARE REPOSITORY. BRIDGING THE GAP BETWEEN ARCHITECTURAL FORM AND NUMERICAL UTILITY."
              animateOn="view" 
              speed={40}
              className="text-xs md:text-sm font-mono text-[#00f5d4]/60 leading-relaxed uppercase tracking-[0.1em]"
            />
          ) : (
            <p className="text-xl md:text-2xl font-medium text-stone-500 leading-relaxed font-jost text-balance">
              Premium minimalist hardware engineered by Turtle Labs. Bridging architectural form with everyday utility.
            </p>
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-10"
        >
          <ElectricBorder 
            color={isCyberpunk ? "#00f5d4" : "#CA8A04"}
            borderRadius={999}
            speed={1.5}
            chaos={0.15}
            className="w-full sm:w-auto"
          >
            <button 
              onClick={() => window.location.href = '/collections'}
              className={`px-10 py-4 font-bold tracking-[0.1em] text-sm uppercase transition-all duration-300
                ${isCyberpunk 
                  ? "bg-black text-[#00f5d4] hover:bg-[#00f5d4]/10" 
                  : "bg-white text-foreground hover:bg-stone-50 shadow-inner"}`}
            >
              {isCyberpunk ? "> ENTER_CATALOG" : "Initiate Storefront"}
            </button>
          </ElectricBorder>
          
          <SpringButton 
            onClick={() => window.location.href = '/system'}
            variant="secondary"
            className="w-full sm:w-auto min-w-[220px] !py-4"
          >
            {isCyberpunk ? "// SYSTEM_INTEL" : "Technical Protocols"}
          </SpringButton>
        </motion.div>

        {/* Technical Footer Telemetry */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2 }}
           className="absolute bottom-10 left-10 right-10 flex justify-between items-end pointer-events-none"
        >
           <div className="flex flex-col gap-1 items-start">
             <span className={`text-[10px] font-mono tracking-widest uppercase ${isCyberpunk ? "text-[#00f5d4]/40" : "text-stone-300"}`}>
               {isCyberpunk ? "COORD: 12.9716 N, 77.5946 E" : "Designed in Bangalore"}
             </span>
             <span className={`text-[8px] font-mono tracking-widest uppercase ${isCyberpunk ? "text-[#00f5d4]/20" : "text-stone-200"}`}>
               Turtle Labs PVT LTD // 2026
             </span>
           </div>
           
           <div className={`text-[10px] font-mono tracking-widest uppercase ${isCyberpunk ? "text-[#00f5d4]/40" : "text-stone-300"}`}>
             {isCyberpunk ? "UPTIME: 99.98%" : "Secure Transaction Protocol"}
           </div>
        </motion.div>

      </div>
    </section>
  );
}
