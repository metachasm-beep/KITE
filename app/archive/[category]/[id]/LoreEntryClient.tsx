"use client";

import { useTheme } from "@/lib/contexts/ThemeContext";
import { useEffect } from "react";
import DecryptedText from "@/components/reactbits/DecryptedText";
import BlurText from "@/components/reactbits/BlurText";
import ArchiveLink from "@/components/archive/ArchiveLink";
import { Terminal, ArrowLeft, Cpu, Activity, Database, Map } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface LoreEntryClientProps {
  entry: any;
  category: string;
}

export default function LoreEntryClient({ entry, category }: LoreEntryClientProps) {
  const { isCyberpunk, toggleTheme } = useTheme();

  // Force Cyberpunk mode on these pages
  useEffect(() => {
    if (!isCyberpunk) {
      toggleTheme();
    }
  }, [isCyberpunk, toggleTheme]);

  const Icon = category === "tech" ? Cpu : category === "events" ? Activity : category === "eras" ? Database : Map;

  return (
    <main className="min-h-screen bg-background text-accent pt-32 pb-40 font-jetbrains relative cyber-scanlines overflow-x-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      
      {/* Hero Background Image */}
      {entry.imagePath && (
        <div className="absolute top-0 right-0 w-full lg:w-3/5 h-[60vh] lg:h-screen pointer-events-none overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/80 to-background z-10" />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
           <motion.img 
             initial={{ opacity: 0, scale: 1.2, x: 50 }}
             animate={{ opacity: 0.7, scale: 1, x: 0 }}
             transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
             src={entry.imagePath} 
             alt={entry.name}
             className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 transition-all duration-[2000ms] ease-out-expo"
           />
        </div>
      )}

      <div className="container mx-auto px-6 relative z-20">
        
        {/* Back Link */}
        <Link href="/archive" className="inline-flex items-center gap-3 text-accent/40 hover:text-accent transition-all mb-16 uppercase text-[9px] font-mono tracking-[0.4em] group">
          <ArrowLeft size={12} className="group-hover:-translate-x-2 transition-transform duration-500" />
          // RETURN_TO_NEURAL_INTERFACE
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Main Content Area - Enhancement #6: Asymmetric */}
          <div className="lg:col-span-7 space-y-16">
            <header className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 text-accent/40"
              >
                <Icon size={16} />
                <span className="text-[9px] font-mono font-bold tracking-[0.5em] uppercase">
                  SECTOR: {category.toUpperCase()} // REGISTRY_ID: {entry.id.toUpperCase()}
                </span>
              </motion.div>

              <DecryptedText
                text={entry.name.toUpperCase()}
                speed={50}
                className="text-6xl md:text-8xl font-michroma font-bold tracking-tighter text-accent cyber-glow leading-none"
                animateOn="view"
              />

              <div className="h-px w-48 bg-accent/20" />
            </header>

            <div className="max-w-3xl space-y-12">
               <BlurText
                 text={entry.description.toUpperCase()}
                 className="text-xl text-accent tracking-[0.15em] font-michroma border-l-4 border-accent pl-10"
                 delay={200}
                 animateBy="words"
                 direction="bottom"
               />

               <div className="relative group">
                 <div className="absolute -inset-4 bg-accent/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                 <div className="text-sm text-accent/70 leading-relaxed uppercase tracking-widest space-y-8 bg-accent/5 p-12 border border-accent/10 backdrop-blur-md relative z-10 mechanical-bracket hud-depth neural-flicker font-jetbrains">
                   <p className="first-letter:text-4xl first-letter:font-michroma first-letter:text-accent first-letter:mr-3 first-letter:float-left">
                      <ArchiveLink>{entry.longDescription || entry.description}</ArchiveLink>
                   </p>
                 </div>
               </div>
            </div>
          </div>

          {/* Sidebar Area - Enhancement #6: Asymmetric Stagger */}
          <div className="lg:col-span-5 space-y-12 lg:pt-48">
             <div className="p-10 border border-accent/10 bg-accent/5 backdrop-blur-2xl relative group overflow-hidden mechanical-bracket hud-depth neural-flicker">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full translate-x-16 -translate-y-16" />
                
                <h4 className="text-[9px] font-mono font-bold text-accent/40 uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                   <Terminal size={14} /> // DATA_SPECIFICATIONS
                </h4>

                <div className="space-y-8 font-jetbrains">
                   <div className="flex justify-between items-end border-b border-accent/10 pb-4">
                      <span className="text-[10px] text-accent/30 uppercase tracking-widest">Status</span>
                      <span className="text-xs text-accent uppercase font-bold tracking-[0.2em] animate-pulse">DECRYPTED // STABLE</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-accent/10 pb-4">
                      <span className="text-[10px] text-accent/30 uppercase tracking-widest">Origin</span>
                      <span className="text-xs text-accent uppercase font-bold tracking-[0.2em]">The Fold // Shards</span>
                   </div>
                   {entry.years && (
                     <div className="flex justify-between items-end border-b border-accent/10 pb-4">
                        <span className="text-[10px] text-accent/30 uppercase tracking-widest">Temporal_Period</span>
                        <span className="text-xs text-accent uppercase font-bold tracking-[0.2em]">{entry.years}</span>
                     </div>
                   )}
                   {entry.motto && (
                     <div className="pt-6">
                        <span className="text-[10px] text-accent/30 uppercase block mb-3 tracking-widest">Coalition_Motto</span>
                        <span className="text-sm text-accent font-michroma italic tracking-wider opacity-90 group-hover:opacity-100 transition-opacity">"{entry.motto}"</span>
                     </div>
                   )}
                </div>
             </div>

             <div className="p-10 border border-accent/10 bg-accent/5 backdrop-blur-2xl relative overflow-hidden group mechanical-bracket hud-depth">
                <h4 className="text-[9px] font-mono font-bold text-accent/40 uppercase tracking-[0.4em] mb-8 font-mono">// SIGNAL_VISUALIZER</h4>
                <div className="aspect-square bg-background/80 flex items-center justify-center p-6 border border-accent/10">
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                     className="w-full h-full border border-accent/20 rounded-full relative flex items-center justify-center"
                   >
                     <div className="w-1 h-48 bg-gradient-to-t from-transparent via-accent/30 to-transparent absolute top-1/2 -translate-y-1/2" />
                     <div className="w-48 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent absolute left-1/2 -translate-x-1/2" />
                     <div className="w-6 h-6 bg-accent rounded-full blur-[12px] animate-pulse" />
                     <div className="absolute inset-0 border-[0.5px] border-accent/5 rounded-full scale-75" />
                     <div className="absolute inset-0 border-[0.5px] border-accent/5 rounded-full scale-50" />
                   </motion.div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}
