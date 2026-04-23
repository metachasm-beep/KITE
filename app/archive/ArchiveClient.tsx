"use client";

import { useTheme } from "@/lib/contexts/ThemeContext";
import { useEffect } from "react";
import DecryptedText from "@/components/reactbits/DecryptedText";
import BlurText from "@/components/reactbits/BlurText";
import { Terminal, Database, Activity, Map } from "lucide-react";
import { UNIVERSE, ERAS, FACTIONS } from "@/lib/data/lore";
import { Artifact } from "@/lib/cms";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/ThreeDCard";
import NeuralMap from "@/components/archive/NeuralMap";
import ArchiveLink from "@/components/archive/ArchiveLink";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ArchiveClientProps {
  artifacts: Artifact[];
}

export default function ArchiveClient({ artifacts }: ArchiveClientProps) {
  const { isCyberpunk, toggleTheme } = useTheme();

  // Force Cyberpunk mode on this page
  useEffect(() => {
    if (!isCyberpunk) {
      toggleTheme();
    }
  }, [isCyberpunk, toggleTheme]);

  return (
    <main className="min-h-screen bg-background text-accent pt-32 pb-40 font-jetbrains relative cyber-scanlines overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      
      {/* Hero Visual */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-[800px] pointer-events-none overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background z-10" />
         <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
         <motion.img 
           initial={{ opacity: 0, scale: 1.2, x: 100 }}
           animate={{ opacity: 0.6, scale: 1, x: 0 }}
           transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
           src="/images/lore/the_fold_nebula.png" 
           className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-[2000ms] ease-out-expo"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Sector */}
        <header className="mb-32 flex flex-col gap-8 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 text-accent/40"
          >
            <Terminal size={16} />
            <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase">
              // DATA_CORE_UNLOCKED // SYSTEM_ID: {UNIVERSE.name.toUpperCase()}
            </span>
          </motion.div>

          <DecryptedText
            text={UNIVERSE.name.toUpperCase()}
            speed={40}
            className="text-8xl md:text-[10rem] font-michroma font-bold tracking-tighter text-accent leading-none"
            animateOn="view"
          />

          <BlurText
            text={UNIVERSE.tagline.toUpperCase()}
            className="text-2xl text-accent/80 tracking-[0.2em] font-michroma uppercase max-w-3xl"
            delay={300}
            animateBy="words"
            direction="bottom"
          />

          <div className="relative mt-8 group max-w-2xl">
            <div className="absolute -inset-4 bg-accent/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <p className="text-sm text-accent/70 leading-relaxed uppercase tracking-wider bg-accent/5 p-8 border border-accent/20 backdrop-blur-md relative z-10 mechanical-bracket neural-flicker">
              <ArchiveLink>{UNIVERSE.summary}</ArchiveLink>
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-[9px] text-accent/40 leading-relaxed uppercase tracking-[0.3em] mt-2 relative z-10">
            <Database size={12} />
            ROLE // <ArchiveLink className="text-accent/60">{UNIVERSE.baselab_role}</ArchiveLink>
          </div>
        </header>

        {/* Neural Map Sector */}
        <section className="mb-40 relative z-10">
           <div className="flex items-center gap-3 mb-12 text-accent/30 border-b border-accent/10 pb-6">
            <span className="text-[9px] font-mono font-bold tracking-[0.5em] uppercase opacity-50">// NEURAL_SYNCHRONIZATION_ACTIVE</span>
          </div>
          <div className="p-4 border border-accent/5 bg-accent/5 backdrop-blur-sm rounded-sm">
            <NeuralMap />
          </div>
        </section>

        {/* Timeline Sector - Enhancement #6: Asymmetric */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-16 text-accent/80 border-b border-accent/10 pb-8">
            <Activity size={20} className="text-accent" />
            <h2 className="text-3xl font-michroma font-bold tracking-[0.1em] uppercase">Temporal Anomalies</h2>
          </div>
          
          <div className="space-y-12">
            {UNIVERSE.key_events.map((evt, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOutExpo" }}
                className={cn(
                  "flex flex-col md:flex-row gap-8 p-10 bg-accent/5 border border-accent/10 group hover:bg-accent/[0.08] transition-all duration-500 mechanical-bracket hud-depth neural-flicker",
                  idx % 2 === 1 ? "md:ml-24" : "md:mr-24"
                )}
              >
                <div className="md:w-1/3 flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-accent/40 uppercase tracking-[0.4em]">{evt.date}</span>
                  <h3 className="text-xl font-michroma font-bold text-accent group-hover:text-white transition-colors">{evt.event.toUpperCase()}</h3>
                </div>
                <div className="md:w-2/3 flex items-center border-l border-accent/10 pl-8">
                  <p className="text-xs text-accent/60 leading-relaxed uppercase tracking-wider font-jetbrains">
                    <ArchiveLink className="hover:text-accent transition-colors">{evt.description}</ArchiveLink>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Eras - Enhancement #6: Asymmetric Layout */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-16 text-accent/80 border-b border-accent/10 pb-8">
            <Activity size={20} className="text-accent" />
            <h2 className="text-3xl font-michroma font-bold tracking-[0.1em] uppercase">Chronological Sectors</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12">
            {ERAS.map((era, idx) => (
              <div 
                key={era.id} 
                className={cn(
                  "col-span-12 md:col-span-6 lg:col-span-4",
                  idx % 3 === 1 ? "md:mt-24" : "",
                  idx % 3 === 2 ? "md:mt-48" : ""
                )}
              >
                <CardContainer containerClassName="py-0">
                  <CardBody className="bg-accent/5 border border-accent/20 p-10 relative group hover:border-accent/40 transition-all duration-[800ms] ease-out-expo h-full flex flex-col overflow-hidden mechanical-bracket hud-depth neural-flicker">
                    {era.imagePath && (
                      <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-all duration-[1500ms] ease-out-expo">
                        <img src={era.imagePath} alt={era.name} className="w-full h-full object-cover grayscale scale-110 group-hover:scale-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                      </div>
                    )}
                    <div className="relative z-10 flex flex-col h-full">
                      <CardItem translateZ="20" className="text-[10px] font-mono text-accent/40 mb-6 tracking-[0.4em] uppercase">
                        SECTOR :: {era.years}
                      </CardItem>
                      <CardItem translateZ="40" className="text-3xl font-michroma font-bold mb-4 text-accent tracking-tighter">
                        {era.name.toUpperCase()}
                      </CardItem>
                      <CardItem translateZ="30" className="text-sm text-accent/80 italic mb-8 font-jetbrains opacity-80 group-hover:opacity-100 transition-opacity">
                        "{era.tagline}"
                      </CardItem>
                      <CardItem translateZ="10" className="text-xs text-accent/60 leading-relaxed mb-10 uppercase flex-grow font-jetbrains tracking-wide">
                        {era.description}
                      </CardItem>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <CardItem translateZ="60">
                          <Link 
                            href={`/archive/eras/${era.id}`}
                            className="btn-hud"
                          >
                            Sync_Record
                          </Link>
                        </CardItem>
                        <CardItem translateZ="50" className="flex flex-wrap justify-end gap-2 text-[8px] text-accent/50 max-w-[150px]">
                          {era.toneHints.slice(0, 2).map((hint, i) => (
                            <span key={i} className="px-2 py-1 border border-accent/20 bg-accent/5 font-mono uppercase tracking-widest">
                              {hint.toUpperCase()}
                            </span>
                          ))}
                        </CardItem>
                      </div>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
          </div>
        </section>

        {/* Factions */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-16 text-accent/80 border-b border-accent/10 pb-8">
            <Database size={20} className="text-accent" />
            <h2 className="text-3xl font-michroma font-bold tracking-[0.1em] uppercase">Verified Coalitions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {FACTIONS.map((faction) => (
               <div 
                 key={faction.id} 
                 className="p-10 bg-accent/5 border border-accent/10 flex flex-col gap-6 hover:bg-accent/[0.08] transition-all duration-700 ease-out-expo mechanical-bracket hud-depth group neural-flicker"
               >
                 <div className="flex justify-between items-start">
                   <h3 className="text-2xl font-michroma font-bold tracking-tight text-accent group-hover:text-white transition-colors">{faction.name.toUpperCase()}</h3>
                   <span className="text-[9px] px-3 py-1 bg-accent/10 border border-accent/20 text-accent/60 uppercase tracking-[0.3em] font-mono">
                     {faction.era}
                   </span>
                 </div>
                 <p className="text-sm text-accent/80 italic font-jetbrains">"{faction.motto}"</p>
                 <p className="text-xs text-accent/50 leading-relaxed uppercase border-b border-accent/10 pb-6 mb-2 font-jetbrains tracking-wider">
                   {faction.description}
                 </p>
                 <Link 
                   href={`/archive/factions/${faction.id}`}
                   className="text-[10px] font-mono font-bold text-accent hover:text-white transition-all uppercase tracking-[0.4em] inline-flex items-center gap-3 group/link"
                 >
                   OPEN_DOSSIER <span className="group-hover/link:translate-x-2 transition-transform duration-500 text-lg">&rarr;</span>
                 </Link>
               </div>
             ))}
          </div>
        </section>

      </div>
    </main>
  );
}
