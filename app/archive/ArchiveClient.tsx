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
    <main className="min-h-screen bg-[#080808] text-[#00f5d4] pt-32 pb-40 font-mono relative cyber-scanlines">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#00f5d4]/10 to-transparent pointer-events-none" />
      
      {/* Hero Visual */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-[600px] pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#080808] z-10" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-10" />
         <motion.img 
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.2 }}
           src="/images/lore/the_fold_nebula.png" 
           className="w-full h-full object-cover grayscale brightness-50"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Sector */}
        <header className="mb-24 flex flex-col gap-6 max-w-4xl">
          <div className="flex items-center gap-3 text-[#00f5d4]/50">
            <Terminal size={18} />
            <span className="text-sm font-bold tracking-widest uppercase">
              // TERMINAL_ACCESS: {UNIVERSE.name.toUpperCase()}
            </span>
          </div>

          <DecryptedText
            text={UNIVERSE.name.toUpperCase()}
            speed={60}
            className="text-7xl md:text-9xl font-bold tracking-tighter text-[#00f5d4] cyber-glow leading-none"
            animateOn="view"
          />

          <BlurText
            text={UNIVERSE.tagline.toUpperCase()}
            className="text-xl text-[#00f5d4]/80 tracking-widest uppercase"
            delay={200}
            animateBy="words"
            direction="bottom"
          />

          <p className="text-sm text-[#00f5d4]/60 leading-relaxed uppercase tracking-wider max-w-2xl mt-4 bg-[#00f5d4]/5 p-6 border-l-2 border-[#00f5d4]/40 backdrop-blur-sm relative z-10">
            <ArchiveLink>{UNIVERSE.summary}</ArchiveLink>
          </p>
          <p className="text-xs text-[#00f5d4]/40 leading-relaxed uppercase tracking-wider max-w-2xl mt-2 italic relative z-10">
            ROLE // <ArchiveLink>{UNIVERSE.baselab_role}</ArchiveLink>
          </p>
        </header>

        {/* Neural Map Sector */}
        <section className="mb-32 relative z-10">
           <div className="flex items-center gap-3 mb-10 text-[#00f5d4]/80 border-b border-[#00f5d4]/20 pb-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">// DATA_VISUALIZATION_MODULE</span>
          </div>
          <NeuralMap />
        </section>

        {/* Timeline Sector */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-10 text-[#00f5d4]/80 border-b border-[#00f5d4]/20 pb-4">
            <Activity size={24} />
            <h2 className="text-2xl font-bold tracking-widest uppercase">The Great Fracture Timeline</h2>
          </div>
          
          <div className="space-y-6">
            {UNIVERSE.key_events.map((evt, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 p-6 border border-[#00f5d4]/20 bg-[#0d1117]/80 rounded-xl hover:bg-[#00f5d4]/5 transition-colors">
                <div className="md:w-1/4">
                  <span className="text-xs text-[#00f5d4]/60 uppercase tracking-widest">{evt.date}</span>
                  <h3 className="text-lg font-bold cyber-glow mt-1">{evt.event}</h3>
                </div>
                <div className="md:w-3/4 flex items-center">
                  <p className="text-sm text-[#00f5d4]/70 leading-relaxed uppercase">
                    <ArchiveLink>{evt.description}</ArchiveLink>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Eras */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-10 text-[#00f5d4]/80 border-b border-[#00f5d4]/20 pb-4">
            <Database size={24} />
            <h2 className="text-2xl font-bold tracking-widest uppercase">Historical Eras</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ERAS.map((era) => (
              <CardContainer key={era.id} containerClassName="py-0">
                <CardBody className="bg-[#00f5d4]/5 border border-[#00f5d4]/20 rounded-2xl p-8 relative group hover:border-[#00f5d4] transition-all h-full flex flex-col">
                  <CardItem translateZ="20" className="text-xs text-[#00f5d4]/50 mb-4 tracking-widest uppercase">
                    ERA :: {era.years}
                  </CardItem>
                  <CardItem translateZ="40" className="text-2xl font-bold mb-2 text-[#00f5d4] cyber-glow">
                    {era.name.toUpperCase()}
                  </CardItem>
                  <CardItem translateZ="30" className="text-sm text-[#00f5d4]/70 italic mb-6">
                    "{era.tagline}"
                  </CardItem>
                  <CardItem translateZ="10" className="text-xs text-[#00f5d4]/60 leading-relaxed mb-8 uppercase flex-grow">
                    {era.description}
                  </CardItem>
                  <CardItem translateZ="60">
                    <Link 
                      href={`/archive/eras/${era.id}`}
                      className="text-[10px] font-bold text-[#00f5d4] hover:text-white transition-colors border border-[#00f5d4]/20 px-4 py-2 uppercase tracking-widest bg-black/40"
                    >
                      Access_Records &gt;&gt;
                    </Link>
                  </CardItem>
                  <CardItem translateZ="50" className="flex flex-wrap gap-2 text-[10px] text-[#00f5d4]">
                    {era.toneHints.map((hint, i) => (
                      <span key={i} className="px-2 py-1 border border-[#00f5d4]/30 bg-[#00f5d4]/10 rounded-sm">
                        {hint.toUpperCase()}
                      </span>
                    ))}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </section>

        {/* Factions */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-10 text-[#00f5d4]/80 border-b border-[#00f5d4]/20 pb-4">
            <Map size={24} />
            <h2 className="text-2xl font-bold tracking-widest uppercase">Active Factions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {FACTIONS.map((faction) => (
               <div key={faction.id} className="p-8 border-l-4 border-[#00f5d4] bg-[#00f5d4]/5 flex flex-col gap-4 hover:bg-[#00f5d4]/10 transition-colors">
                 <div className="flex justify-between items-start">
                   <h3 className="text-xl font-bold tracking-wider">{faction.name.toUpperCase()}</h3>
                   <span className="text-[10px] px-2 py-1 bg-[#00f5d4]/20 border border-[#00f5d4]/40 uppercase tracking-widest">
                     {faction.era}
                   </span>
                 </div>
                 <p className="text-sm text-[#00f5d4]/80 italic">"{faction.motto}"</p>
                 <p className="text-xs text-[#00f5d4]/60 leading-relaxed uppercase border-b border-[#00f5d4]/10 pb-4 mb-4">{faction.description}</p>
                 <Link 
                   href={`/archive/factions/${faction.id}`}
                   className="text-[10px] font-bold text-[#00f5d4] hover:text-white transition-colors uppercase tracking-widest inline-flex items-center gap-2 group"
                 >
                   Dossier_Link <span className="group-hover:translate-x-1 transition-transform">&gt;&gt;</span>
                 </Link>
               </div>
             ))}
          </div>
        </section>

      </div>
    </main>
  );
}
