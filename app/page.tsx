"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ThreeDImageSlider } from "@/components/home/ThreeDImageSlider";
import { motion } from "framer-motion";
import { Terminal, MoveUpRight, Zap, ArrowDown } from "lucide-react";
import { SystemButton } from "@/components/common/SystemButton";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { BackgroundParallax } from "@/components/home/BackgroundParallax";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Home() {
  const { isCyberpunk } = useTheme();

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-background">
      
      {/* SECTION 1: HERO */}
      <section className="h-screen h-[100dvh] w-full snap-start relative overflow-hidden md:pt-20">
        <BackgroundParallax>
          <HeroSection />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden md:block"
          >
            <ArrowDown size={20} className={isCyberpunk ? "text-accent/30" : "text-stone-300"} />
          </motion.div>
        </BackgroundParallax>
      </section>

      {/* SECTION 2: SHOWCASE */}
      <section className={`h-screen h-[100dvh] w-full snap-start relative px-6 overflow-hidden flex flex-col justify-center transition-colors duration-1000
        ${isCyberpunk ? "bg-background" : "bg-white"}`}>
        
        <BackgroundParallax>
          <div className="container mx-auto h-full flex flex-col justify-center py-6 md:py-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-6 md:mb-16 gap-4 md:gap-6">
              <div className="space-y-1 md:space-y-4 text-center md:text-left w-full md:w-auto">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`flex items-center justify-center md:justify-start gap-3 ${isCyberpunk ? "text-accent/40" : "text-stone-400"}`}
                >
                  {isCyberpunk ? <Terminal size={14} /> : <Zap size={14} />}
                  <span className={`text-[8px] md:text-[9px] font-bold uppercase tracking-[0.4em] ${isCyberpunk ? "font-mono" : "font-jost"}`}>
                    {isCyberpunk ? "// ARTIFACT_STORAGE" : "Series 01 // Hardware"}
                  </span>
                </motion.div>
                
                <h2 className={`text-[clamp(1.5rem,8vw,5rem)] md:text-8xl font-bold tracking-tighter font-michroma leading-none
                  ${isCyberpunk ? "text-accent cyber-glow" : "text-foreground"}`}>
                  The <span className={`${isCyberpunk ? "text-accent/30" : "text-stone-300"}`}>Archive</span>
                </h2>
              </div>
              
              <SystemButton href="/collections" className="group !px-6 md:!px-12 !py-2.5 md:!py-5 mechanical-bracket text-[10px] md:text-sm mx-auto md:mx-0">
                 {isCyberpunk ? "ACCESS_STORES" : "Enter Lab"}
                 <MoveUpRight size={14} className="inline ml-2 md:ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </SystemButton>
            </div>

            <div className="relative group flex-1 flex items-center justify-center min-h-0">
              <div className="w-full h-full max-h-[50vh] md:max-h-full">
                <ThreeDImageSlider />
              </div>
            </div>
          </div>
        </BackgroundParallax>
      </section>

      {/* SECTION 3: PHILOSOPHY */}
      <section className="h-screen h-[100dvh] w-full snap-start relative overflow-hidden">
        <BackgroundParallax>
          <PhilosophySection />
        </BackgroundParallax>
      </section>

      {/* SECTION 4: CTA + INTEGRATED FOOTER */}
      <section className={`h-screen h-[100dvh] w-full snap-start relative overflow-hidden flex flex-col items-center justify-center transition-colors duration-1000
        ${isCyberpunk ? "bg-background border-t border-accent/10" : "bg-[#FAFAF9] border-t border-stone-100"}`}>
         
         <BackgroundParallax>
           <div className="container mx-auto h-full flex flex-col items-center justify-center text-center space-y-4 md:space-y-12 px-6 pb-16 md:pb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-2 md:space-y-6"
              >
                <h2 className={`text-[clamp(1.4rem,7vw,6rem)] font-bold tracking-tighter font-michroma max-w-4xl mx-auto leading-[0.9]
                  ${isCyberpunk ? "text-accent cyber-glow" : "text-foreground"}`}>
                   {isCyberpunk ? "RECLAIM_THE_VOID" : "The Future is Material."}
                </h2>
                <p className={`text-[8px] md:text-lg max-w-xl mx-auto leading-relaxed tracking-wider px-4
                  ${isCyberpunk ? "text-accent/40 uppercase font-mono" : "text-stone-500 font-jost"}`}>
                   {isCyberpunk 
                     ? "RESEARCH LOG // RECONSTRUCTED DESIGNS. INDIVIDUALLY CALIBRATED AT UNIT_01."
                     : "Explore the latest series of premium hardware designed for architectural utility."}
                </p>
              </motion.div>

              <SystemButton href="/collections" className={`!px-6 md:!px-16 !py-3 md:!py-6 text-[10px] md:text-xl mechanical-bracket
                ${isCyberpunk ? "bg-accent text-black hover:bg-accent/80 shadow-[0_0_50px_oklch(var(--accent-values)/0.3)]" : "bg-foreground text-white hover:bg-black rounded-full"}`}>
                 {isCyberpunk ? "INITIALIZE" : "View Lab"}
              </SystemButton>
           </div>
         </BackgroundParallax>

         <div className="absolute bottom-0 left-0 w-full z-20">
           <SiteFooter minimal />
         </div>
      </section>

    </div>
  );
}
