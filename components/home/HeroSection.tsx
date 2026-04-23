"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/contexts/ThemeContext";
import Aurora from "@/components/reactbits/Aurora";
import GridScan from "@/components/reactbits/GridScan";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ElectricBorder from "@/components/reactbits/ElectricBorder";
import BlurText from "@/components/reactbits/BlurText";

export function HeroSection() {
  const { isCyberpunk } = useTheme();

  return (
    <section className={`relative h-full flex flex-col justify-center items-center overflow-hidden transition-colors duration-1000 ease-out-expo px-4 md:px-6
      ${isCyberpunk ? "bg-background" : "bg-[#FAFAF9]"}`}>
      
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {isCyberpunk ? (
          <GridScan 
            linesColor="oklch(var(--accent-values) / 0.1)" 
            scanColor="oklch(var(--accent-values) / 0.2)" 
            scanOpacity={0.1} 
            gridScale={0.6}
          />
        ) : (
          <Aurora 
            colorStops={['#E7E5E4', '#F5F5F4', '#FAFAF9']} 
            amplitude={0.6} 
            className="opacity-60" 
          />
        )}
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOutExpo" }}
          className={`inline-flex items-center gap-3 px-4 md:px-6 py-2 border mb-8 md:mb-12 transition-all duration-700 backdrop-blur-xl mechanical-bracket
            ${isCyberpunk 
              ? "bg-accent/5 border-accent/20 text-accent" 
              : "bg-white/20 border-black/5 text-stone-500 shadow-sm"}`}
        >
           <span className={`w-1.5 h-1.5 rounded-full ${isCyberpunk ? "bg-accent animate-pulse shadow-[0_0_8px_var(--accent)]" : "bg-stone-400"}`} />
           <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] ${isCyberpunk ? "font-mono" : "font-jost"}`}>
             {isCyberpunk ? "UNIT_01 // SECURE_ESTABLISHED" : "DESIGNED BY TURTLE LABS // SERIES 01"}
           </span>
        </motion.div>

        {/* Huge Title */}
        <div className="relative mb-8 md:mb-12 w-full max-w-6xl mx-auto flex flex-col items-center">
          {isCyberpunk ? (
            <div className="space-y-4 md:space-y-6">
              <DecryptedText
                text="BASELAB_VOID"
                className="text-5xl sm:text-7xl md:text-[9rem] lg:text-[11rem] font-bold leading-[1] tracking-tighter text-accent font-michroma cyber-glow uppercase"
                animateOn="view"
                speed={40}
              />
            </div>
          ) : (
            <div className="space-y-2 md:space-y-4">
              <BlurText
                text="Refined"
                className="text-5xl sm:text-6xl md:text-9xl font-bold leading-[0.8] tracking-tighter text-foreground font-heading"
                delay={80}
                animateBy="letters"
                direction="bottom"
                textAlign="center"
              />
              <BlurText
                text="Essentials"
                className="text-5xl sm:text-6xl md:text-9xl font-bold leading-[0.8] tracking-tighter text-stone-300 font-heading"
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
          transition={{ delay: 1, duration: 1.2 }}
          className="max-w-2xl mx-auto mb-10 md:mb-20 px-4"
        >
          {isCyberpunk ? (
            <DecryptedText 
              text="ADVANCED HARDWARE REPOSITORY. BRIDGING THE GAP BETWEEN ARCHITECTURAL FORM AND NUMERICAL UTILITY."
              animateOn="view" 
              speed={30}
              className="text-[10px] md:text-sm font-mono text-accent/50 leading-relaxed uppercase tracking-[0.2em] font-jetbrains"
            />
          ) : (
            <p className="text-lg md:text-2xl font-medium text-stone-500 leading-relaxed font-jost text-balance">
              Premium minimalist hardware engineered by Turtle Labs. Bridging architectural form with everyday utility.
            </p>
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1, ease: "easeOutExpo" }}
          className="flex flex-col sm:flex-row items-center gap-6 md:gap-12 w-full sm:w-auto px-6"
        >
          <ElectricBorder 
            color={isCyberpunk ? "oklch(var(--accent-values))" : "#CA8A04"}
            borderRadius={0}
            speed={1.5}
            chaos={0.1}
            className="w-full sm:w-auto"
          >
            <button 
              onClick={() => window.location.href = '/collections'}
              className={`w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 font-michroma font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase transition-all duration-500
                ${isCyberpunk 
                  ? "bg-transparent text-accent hover:bg-accent/10" 
                  : "bg-white text-foreground hover:bg-stone-50 shadow-inner"}`}
            >
              {isCyberpunk ? "> ENTER_VOID" : "Initiate Storefront"}
            </button>
          </ElectricBorder>
          
          <button 
            onClick={() => window.location.href = '/archive'}
            className={`btn-hud w-full sm:w-auto min-w-[200px] md:min-w-[240px] !py-4 md:!py-5 text-[10px] md:text-xs
              ${isCyberpunk ? "neural-flicker" : ""}`}
          >
            {isCyberpunk ? "// NEURAL_ARCHIVE" : "Historical Protocols"}
          </button>
        </motion.div>

        {/* Technical Footer Telemetry */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2.5 }}
           className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12 flex justify-between items-end pointer-events-none"
        >
           <div className="flex flex-col gap-1 md:gap-2 items-start">
             <span className={`text-[8px] md:text-[10px] font-mono tracking-[0.3em] uppercase ${isCyberpunk ? "text-accent/30" : "text-stone-300"}`}>
               {isCyberpunk ? "SYSTEM_LOCATION // 12.9716 N" : "Designed in Bangalore"}
             </span>
             <span className={`text-[7px] md:text-[9px] font-mono tracking-[0.2em] uppercase ${isCyberpunk ? "text-accent/10" : "text-stone-200"}`}>
               VOIDLAB_INDUSTRIES // UNIT_01
             </span>
           </div>
           
           <div className={`text-[8px] md:text-[10px] font-mono tracking-[0.4em] uppercase ${isCyberpunk ? "text-accent/30 animate-pulse" : "text-stone-300"}`}>
             {isCyberpunk ? "SYNC_STABLE" : "Secure Protocol"}
           </div>
        </motion.div>

      </div>
    </section>
  );
}
