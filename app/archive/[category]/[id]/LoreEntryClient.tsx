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
    <main className="min-h-screen bg-[#080808] text-[#00f5d4] pt-32 pb-40 font-mono relative cyber-scanlines overflow-x-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      
      {/* Hero Background Image */}
      {entry.imagePath && (
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-[60vh] lg:h-screen pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#080808]/80 to-[#080808] z-10" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10" />
           <motion.img 
             initial={{ opacity: 0, scale: 1.1 }}
             animate={{ opacity: 0.4, scale: 1 }}
             transition={{ duration: 1.5 }}
             src={entry.imagePath} 
             alt={entry.name}
             className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 transition-all duration-1000"
           />
        </div>
      )}

      <div className="container mx-auto px-6 relative z-20">
        
        {/* Back Link */}
        <Link href="/archive" className="inline-flex items-center gap-2 text-[#00f5d4]/40 hover:text-[#00f5d4] transition-colors mb-12 uppercase text-[10px] tracking-[0.2em] group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          // Return to Neural_Map
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Main Content Area */}
          <div className="lg:col-span-7 space-y-12">
            <header className="space-y-6">
              <div className="flex items-center gap-3 text-[#00f5d4]/50">
                <Icon size={18} />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
                  ARCHIVE_SECTOR: {category.toUpperCase()} // ID: {entry.id.toUpperCase()}
                </span>
              </div>

              <DecryptedText
                text={entry.name.toUpperCase()}
                speed={60}
                className="text-5xl md:text-7xl font-bold tracking-tighter text-[#00f5d4] cyber-glow leading-none"
                animateOn="view"
              />

              <div className="h-px w-32 bg-[#00f5d4]/40" />
            </header>

            <div className="max-w-2xl space-y-8">
               <BlurText
                 text={entry.description.toUpperCase()}
                 className="text-lg text-[#00f5d4]/80 tracking-widest uppercase border-l-2 border-[#00f5d4]/40 pl-6"
                 delay={100}
                 animateBy="words"
                 direction="bottom"
               />

               <div className="text-sm text-[#00f5d4]/60 leading-relaxed uppercase tracking-wider space-y-6 bg-black/40 p-8 border border-[#00f5d4]/10 backdrop-blur-md">
                 <p>
                    <ArchiveLink>{entry.longDescription || entry.description}</ArchiveLink>
                 </p>
               </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-5 space-y-8 lg:pt-32">
             <div className="p-8 border border-[#00f5d4]/10 bg-black/60 backdrop-blur-xl rounded-2xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f5d4]/5 rounded-bl-full translate-x-12 -translate-y-12" />
                
                <h4 className="text-[10px] font-bold text-[#00f5d4]/40 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                   <Terminal size={12} /> // TECHNICALS
                </h4>

                <div className="space-y-6">
                   <div className="flex justify-between items-end border-b border-[#00f5d4]/10 pb-2">
                      <span className="text-[9px] text-[#00f5d4]/30 uppercase">Status</span>
                      <span className="text-xs text-[#00f5d4] uppercase font-bold tracking-widest">Decrypted</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-[#00f5d4]/10 pb-2">
                      <span className="text-[9px] text-[#00f5d4]/30 uppercase">Origin</span>
                      <span className="text-xs text-[#00f5d4] uppercase font-bold tracking-widest">Shards // Unknown</span>
                   </div>
                   {entry.years && (
                     <div className="flex justify-between items-end border-b border-[#00f5d4]/10 pb-2">
                        <span className="text-[9px] text-[#00f5d4]/30 uppercase">Period</span>
                        <span className="text-xs text-[#00f5d4] uppercase font-bold tracking-widest">{entry.years}</span>
                     </div>
                   )}
                   {entry.motto && (
                     <div className="pt-4">
                        <span className="text-[9px] text-[#00f5d4]/30 uppercase block mb-1">Motto</span>
                        <span className="text-xs text-[#00f5d4] uppercase italic tracking-wider">"{entry.motto}"</span>
                     </div>
                   )}
                </div>
             </div>

             <div className="p-8 border border-[#00f5d4]/10 bg-black/60 backdrop-blur-xl rounded-2xl relative overflow-hidden group">
                <h4 className="text-[10px] font-bold text-[#00f5d4]/40 uppercase tracking-[0.3em] mb-4">// SHARD_VISUALIZATION</h4>
                <div className="aspect-square bg-zinc-950/80 rounded-xl flex items-center justify-center p-4">
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                     className="w-full h-full border border-[#00f5d4]/20 rounded-full relative flex items-center justify-center"
                   >
                     <div className="w-1 h-32 bg-gradient-to-t from-transparent via-[#00f5d4]/40 to-transparent absolute top-1/2 -translate-y-1/2" />
                     <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00f5d4]/40 to-transparent absolute left-1/2 -translate-x-1/2" />
                     <div className="w-4 h-4 bg-[#00f5d4] rounded-full blur-[10px] animate-pulse" />
                   </motion.div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}
