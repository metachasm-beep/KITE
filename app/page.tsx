"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ThreeDImageSlider } from "@/components/home/ThreeDImageSlider";
import { motion } from "framer-motion";
import { Terminal, MoveUpRight, Zap, ArrowDown } from "lucide-react";
import { SystemButton } from "@/components/common/SystemButton";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { BackgroundParallax } from "@/components/home/BackgroundParallax";
import { useRef } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Home() {
  const { isCyberpunk } = useTheme();

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      
      {/* SECTION 1: HERO */}
      <section className="h-screen w-full snap-start relative overflow-hidden pt-20">
        <BackgroundParallax>
          <HeroSection />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20"
          >
            <ArrowDown size={20} className={isCyberpunk ? "text-accent/30" : "text-stone-300"} />
          </motion.div>
        </BackgroundParallax>
      </section>

      {/* SECTION 2: SHOWCASE */}
      <section className={`h-screen w-full snap-start relative px-6 overflow-hidden flex flex-col justify-center transition-colors duration-1000
        ${isCyberpunk ? "bg-background" : "bg-white"}`}>
        
        <BackgroundParallax>
          <div className="container mx-auto h-full flex flex-col justify-center py-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-8 md:mb-16 gap-6">
              <div className="space-y-2 md:space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`flex items-center gap-3 ${isCyberpunk ? "text-accent/40" : "text-stone-400"}`}
                >
                  {isCyberpunk ? <Terminal size={14} /> : <Zap size={14} />}
                  <span className={`text-[9px] font-bold uppercase tracking-[0.4em] ${isCyberpunk ? "font-mono" : "font-jost"}`}>
                    {isCyberpunk ? "// CURATED_ARTIFACTS.MK2" : "Series 01 // Selected Units"}
                  </span>
                </motion.div>
                
                <h2 className={`text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter font-michroma leading-none
                  ${isCyberpunk ? "text-accent cyber-glow" : "text-foreground"}`}>
                  Artifact <span className={`${isCyberpunk ? "text-accent/30" : "text-stone-300"}`}>Showcase</span>
                </h2>
              </div>
              
              <SystemButton href="/collections" className="group !px-8 md:!px-12 !py-3 md:!py-5 mechanical-bracket text-xs md:text-sm">
                 {isCyberpunk ? "EXPAND_SHOP" : "View Full Catalog"}
                 <MoveUpRight size={16} className="inline ml-2 md:ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </SystemButton>
            </div>

            <div className="relative group flex-1 flex items-center justify-center min-h-0">
              <div className="absolute inset-0 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="w-full h-full max-h-[60vh] md:max-h-full">
                <ThreeDImageSlider />
              </div>
            </div>
          </div>
        </BackgroundParallax>
      </section>

      {/* SECTION 3: PHILOSOPHY */}
      <section className="h-screen w-full snap-start relative overflow-hidden">
        <BackgroundParallax>
          <PhilosophySection />
        </BackgroundParallax>
      </section>

      {/* SECTION 4: INITIALIZATION (FINAL CTA) */}
      <section className={`h-screen w-full snap-start relative px-6 overflow-hidden flex flex-col justify-center transition-colors duration-1000
        ${isCyberpunk ? "bg-background border-t border-accent/10" : "bg-[#FAFAF9] border-t border-stone-100"}`}>
         
         <BackgroundParallax>
           <div className="container mx-auto h-full flex flex-col items-center justify-center space-y-8 md:space-y-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-4 md:space-y-8"
              >
                <h2 className={`text-5xl sm:text-6xl md:text-9xl font-bold tracking-tighter font-michroma max-w-5xl mx-auto leading-none
                  ${isCyberpunk ? "text-accent cyber-glow" : "text-foreground"}`}>
                   {isCyberpunk ? "OWN_A_PROTOTYPE" : "Secure Your Piece of the Future."}
                </h2>
                <p className={`text-sm md:text-xl max-w-2xl mx-auto leading-relaxed tracking-wider px-4
                  ${isCyberpunk ? "text-accent/50 uppercase font-mono" : "text-stone-500 font-jost"}`}>
                   {isCyberpunk 
                     ? "LIMITED PRODUCTION RUN. EACH UNIT IS INDIVIDUALLY CALIBRATED AND VERIFIED AT BASELAB_VOID."
                     : "Explore our latest collection of premium hardware essentials by Turtle Labs."}
                </p>
              </motion.div>

              <SystemButton href="/collections" className={`!px-12 md:!px-20 !py-5 md:!py-8 text-lg md:text-xl mechanical-bracket
                ${isCyberpunk ? "bg-accent text-black hover:bg-accent/80 shadow-[0_0_50px_oklch(var(--accent-values)/0.3)]" : "bg-foreground text-white hover:bg-black rounded-full"}`}>
                 {isCyberpunk ? "INITIALIZE_ACQUISITION" : "Enter Lab"}
              </SystemButton>
           </div>
         </BackgroundParallax>
      </section>

      {/* SECTION 5: FOOTER */}
      <section className="h-screen w-full snap-start relative overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <SiteFooter />
        </div>
      </section>

    </div>
  );
}
