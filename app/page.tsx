"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ThreeDImageSlider } from "@/components/home/ThreeDImageSlider";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, MoveUpRight, Zap } from "lucide-react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function Home() {
  const { isCyberpunk } = useTheme();

  return (
    <main className={`min-h-screen overflow-x-hidden transition-colors duration-700
      ${isCyberpunk ? "bg-black" : "bg-white"}`}>
      <HeroSection />
      
      {/* Product Preview Section */}
      <section className={`py-40 px-6 relative transition-colors duration-700
        ${isCyberpunk ? "bg-black" : "bg-white border-y border-stone-100"}`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12">
            <div className="space-y-6">
              <div className={`flex items-center gap-3 ${isCyberpunk ? "text-[#00f5d4]/40" : "text-stone-400"}`}>
                {isCyberpunk ? <Terminal size={14} /> : <Zap size={14} />}
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isCyberpunk ? "font-mono" : "font-jost"}`}>
                  {isCyberpunk ? "CURATED_SELECTION.MK2" : "Series 01 // Selected Units"}
                </span>
              </div>
              
              <h2 className={`text-5xl md:text-7xl font-bold tracking-tighter font-heading
                ${isCyberpunk ? "text-[#00f5d4] cyber-glow" : "text-foreground"}`}>
                Artifact <span className={`${isCyberpunk ? "text-[#00f5d4]/40" : "text-stone-300"}`}>Showcase</span>
              </h2>
            </div>
            
            <SystemButton href="/collections" className="group !px-10 !py-5">
               {isCyberpunk ? "EXPAND_SHOP" : "View Full Catalog"}
               <MoveUpRight size={18} className="inline ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </SystemButton>
          </div>

          <ThreeDImageSlider />

        </div>
      </section>

      <PhilosophySection />

      {/* Final Call to Action */}
      <section className={`py-60 px-6 text-center relative overflow-hidden transition-colors duration-700
        ${isCyberpunk ? "bg-black border-t border-[#00f5d4]/10" : "bg-[#FAFAF9] border-t border-stone-100"}`}>
         
         {isCyberpunk && (
           <div className="absolute inset-0 cyber-grid opacity-20" />
         )}

         <div className="container mx-auto flex flex-col items-center space-y-12 relative z-10">
            <h2 className={`text-5xl md:text-7xl font-bold tracking-tighter font-heading max-w-3xl
              ${isCyberpunk ? "text-[#00f5d4] cyber-glow" : "text-foreground"}`}>
               {isCyberpunk ? "OWN_A_PROTOTYPE_STABLE" : "Secure Your Piece of the Future."}
            </h2>
            <p className={`text-xl max-w-md mx-auto font-jost leading-relaxed
              ${isCyberpunk ? "text-[#00f5d4]/60 font-mono uppercase text-sm" : "text-stone-500"}`}>
               {isCyberpunk 
                 ? "LIMITED PRODUCTION RUN. EACH UNIT IS INDIVIDUALLY CALIBRATED AND VERIFIED."
                 : "Explore our latest collection of premium hardware essentials by Turtle Labs."}
            </p>
            <SystemButton href="/collections" className={`!px-16 !py-6 text-lg mt-8
              ${isCyberpunk ? "bg-[#00f5d4] text-black hover:bg-[#00f5d4]/80 shadow-[0_0_30px_rgba(0,245,212,0.4)]" : "bg-foreground text-white hover:bg-black rounded-full"}`}>
               {isCyberpunk ? "INITIALIZE_ACQUISITION" : "Enter Lab"}
            </SystemButton>
         </div>
         
         {/* Technical Background Details */}
         {!isCyberpunk && (
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-100/50 rounded-full blur-[120px] -z-10" />
         )}
      </section>

    </main>
  );
}
