"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ThreeDImageSlider } from "@/components/home/ThreeDImageSlider";
import { motion } from "framer-motion";
import { Terminal, MoveUpRight, Zap } from "lucide-react";
import { SystemButton } from "@/components/common/SystemButton";
import { useTheme } from "@/lib/contexts/ThemeContext";
import ParallaxText from "@/components/reactbits/ParallaxText";

export default function Home() {
  const { isCyberpunk } = useTheme();

  return (
    <main className={`min-h-screen overflow-x-hidden transition-colors duration-1000 ease-out-expo
      ${isCyberpunk ? "bg-background" : "bg-white"}`}>
      
      {/* Fold 1: Hero */}
      <div className="h-screen w-full flex flex-col snap-start overflow-hidden">
        <HeroSection />
      </div>

      <div className="py-4 bg-accent/5 border-y border-accent/10">
        <ParallaxText 
          className="text-4xl md:text-6xl font-michroma font-bold text-accent/20 uppercase"
          direction="left"
          baseVelocity={2}
        >
          {isCyberpunk ? "SYSTEM_ONLINE // DATA_RECOVERY // BASELAB_VOID //" : "TURTLE_LABS // SERIES_01 // ARCHITECTURAL_HARDWARE //"}
        </ParallaxText>
      </div>

      {/* Fold 2: Product Showcase */}
      <section className={`h-screen w-full flex flex-col justify-center snap-start relative px-6 overflow-hidden transition-colors duration-1000
        ${isCyberpunk ? "bg-background" : "bg-white border-y border-stone-100"}`}>
        
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
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
              
              <h2 className={`text-5xl md:text-8xl font-bold tracking-tighter font-michroma
                ${isCyberpunk ? "text-accent cyber-glow" : "text-foreground"}`}>
                Artifact <span className={`${isCyberpunk ? "text-accent/30" : "text-stone-300"}`}>Showcase</span>
              </h2>
            </div>
            
            <SystemButton href="/collections" className="group !px-12 !py-5 mechanical-bracket">
               {isCyberpunk ? "EXPAND_SHOP" : "View Full Catalog"}
               <MoveUpRight size={18} className="inline ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
            </SystemButton>
          </div>

          <div className="relative group">
            <div className="absolute -inset-10 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <ThreeDImageSlider />
          </div>
        </div>
      </section>

      <div className="py-4 bg-accent/5 border-y border-accent/10">
        <ParallaxText 
          className="text-4xl md:text-6xl font-michroma font-bold text-accent/20 uppercase"
          direction="right"
          baseVelocity={2}
        >
          {isCyberpunk ? "FORM_FOLLOWS_FUNCTION // STRUCTURAL_RIGOR //" : "MINIMALIST_DESIGN // PREMIUM_MATERIALS //"}
        </ParallaxText>
      </div>

      {/* Fold 3: Philosophy */}
      <div className="min-h-screen w-full flex flex-col justify-center snap-start overflow-hidden">
        <PhilosophySection />
      </div>

      {/* Fold 4: Final CTA */}
      <section className={`h-screen w-full flex flex-col justify-center items-center snap-start px-6 text-center relative overflow-hidden transition-colors duration-1000
        ${isCyberpunk ? "bg-background border-t border-accent/10" : "bg-[#FAFAF9] border-t border-stone-100"}`}>
         
         {isCyberpunk && (
           <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
         )}

         <div className="container mx-auto flex flex-col items-center space-y-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <h2 className={`text-6xl md:text-9xl font-bold tracking-tighter font-michroma max-w-5xl mx-auto leading-none
                ${isCyberpunk ? "text-accent cyber-glow" : "text-foreground"}`}>
                 {isCyberpunk ? "OWN_A_PROTOTYPE" : "Secure Your Piece of the Future."}
              </h2>
              <p className={`text-xl max-w-2xl mx-auto font-jetbrains leading-relaxed tracking-wider
                ${isCyberpunk ? "text-accent/50 uppercase text-sm" : "text-stone-500 font-jost"}`}>
                 {isCyberpunk 
                   ? "LIMITED PRODUCTION RUN. EACH UNIT IS INDIVIDUALLY CALIBRATED AND VERIFIED AT BASELAB_VOID."
                   : "Explore our latest collection of premium hardware essentials by Turtle Labs."}
              </p>
            </motion.div>

            <SystemButton href="/collections" className={`!px-20 !py-8 text-xl mt-8 mechanical-bracket
              ${isCyberpunk ? "bg-accent text-black hover:bg-accent/80 shadow-[0_0_50px_oklch(var(--accent-values)/0.3)]" : "bg-foreground text-white hover:bg-black rounded-full"}`}>
               {isCyberpunk ? "INITIALIZE_ACQUISITION" : "Enter Lab"}
            </SystemButton>
         </div>
         
         {/* Technical Background Details */}
         {!isCyberpunk && (
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-100/50 rounded-full blur-[120px] -z-10" />
         )}
         
         {isCyberpunk && (
           <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[10px] font-mono text-accent/20 tracking-[0.5em] uppercase">
             // SYSTEM_ID: BL-001 // STATUS: SECURE
           </div>
         )}
      </section>

    </main>
  );
}
