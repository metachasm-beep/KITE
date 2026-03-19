"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { getArtifacts } from "@/lib/cms";
import { Archive, Terminal, Share2, Plus } from "lucide-react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { useCart } from "@/lib/contexts/CartContext";
import { useEffect, useState } from "react";
import { Artifact } from "@/lib/cms";

export default function CollectionsPage() {
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const { addItem } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [filterSeries, setFilterSeries] = useState<string>("ALL");
  const [filterStatus, setFilterStatus] = useState<string>("ALL");

  useEffect(() => {
    getArtifacts().then(res => {
      setArtifacts(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center font-mono text-zinc-800 uppercase tracking-widest">SYNCHRONIZING_ARCHIVE...</div>;

  const uniqueSeries = ["ALL", ...Array.from(new Set(artifacts.map(a => a.series)))];
  const statuses = ["ALL", "AVAILABLE", "SOLD_OUT"];

  const filteredArtifacts = artifacts.filter(a => {
    const seriesMatch = filterSeries === "ALL" || a.series === filterSeries;
    const statusMatch = filterStatus === "ALL" || a.status === filterStatus;
    return seriesMatch && statusMatch;
  });

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-48 relative overflow-hidden">
      {/* Background HUD Detail */}
      <div className="absolute top-0 right-0 w-1/3 aspect-square border-l border-b border-white/5 -z-0 opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Page Header - Archive Index Style */}
        <header className="max-w-4xl mb-32 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <Archive size={16} className="text-accent" />
              <TechnicalLabel label="SYSTEM_ARCHIVE" value="INDEX_01" className="font-bold" />
            </div>
            
            <h1 className="text-[48px] md:text-[96px] font-heading leading-none tracking-[-0.1em] text-white uppercase">
              THE <br />
              <span className="text-zinc-800">DROP_LIST</span>
            </h1>
            
            <p className="text-[16px] md:text-[20px] font-medium text-zinc-500 max-w-xl leading-relaxed">
              A curated index of physical design units. Each release is a technical study in speculative architecture and high-density material friction.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 border-t border-white/10 pt-4 hidden md:flex">
             <TechnicalLabel label="SYS_TELEMETRY" className="text-zinc-700" />
             <TechnicalLabel label={`${filteredArtifacts.length}_UNITS_MATCHED`} className="text-accent leading-none" />
             <Terminal size={14} className="text-zinc-800" />
          </div>
        </header>

        {/* Filter HUD */}
        <div className="mb-16 flex flex-col md:flex-row gap-12 border-y border-white/5 py-8">
           <div className="space-y-4 flex-1">
              <TechnicalLabel label="FILTER_BY_SERIES" className="text-zinc-600" />
              <div className="flex flex-wrap gap-4">
                 {uniqueSeries.map(s => (
                    <button 
                      key={s} 
                      onClick={() => setFilterSeries(s)}
                      className={`text-[10px] font-mono px-4 py-2 border transition-all uppercase tracking-widest
                        ${filterSeries === s ? 'border-accent text-accent bg-accent/5' : 'border-white/5 text-zinc-500 hover:text-white'}`}
                    >
                      {s === "ALL" ? "ALL_SERIES" : s}
                    </button>
                 ))}
              </div>
           </div>
           
           <div className="space-y-4">
              <TechnicalLabel label="AVAILABILITY_MATRIX" className="text-zinc-600" />
              <div className="flex gap-4">
                 {statuses.map(s => (
                    <button 
                      key={s} 
                      onClick={() => setFilterStatus(s)}
                      className={`text-[10px] font-mono px-4 py-2 border transition-all uppercase tracking-widest
                        ${filterStatus === s ? 'border-accent text-accent bg-accent/5' : 'border-white/5 text-zinc-500 hover:text-white'}`}
                    >
                      {s === "ALL" ? "ALL_STATUS" : s}
                    </button>
                 ))}
              </div>
           </div>
        </div>

        {/* The Grid - Archive Vault aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-1">
          {filteredArtifacts.map((artifact) => (
            <Link 
              key={artifact.slug}
              href={`/collections/${artifact.slug}`}
              className="group"
            >
              <HudContainer className="hover:border-accent/30 transition-all duration-500 aspect-[4/5] flex flex-col justify-between">
                {/* TOP: Telemetry + Title */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <TechnicalLabel label="SYNCING" className="text-accent text-[8px] animate-pulse" />
                      <TechnicalLabel label={artifact.series} className="text-zinc-700 text-[8px]" />
                    </div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-white tracking-widest uppercase group-hover:text-accent transition-colors duration-500">
                      {artifact.title}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <span className="text-[11px] font-bold text-white font-mono">{artifact.price}</span>
                     <div className="flex flex-col gap-2">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem({
                              id: artifact.id,
                              slug: artifact.slug,
                              title: artifact.title,
                              price: artifact.price,
                              quantity: 1,
                              media: { src: artifact.media.src || "", placeholderLabel: artifact.series }
                            });
                          }}
                          className="p-1 px-3 border border-white/5 bg-white/5 hover:bg-accent hover:text-black transition-all text-zinc-500 font-mono text-[8px] tracking-tighter uppercase"
                        >
                          ADD_TO_CART
                        </button>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem({
                              id: artifact.id,
                              slug: artifact.slug,
                              title: artifact.title,
                              price: artifact.price,
                              quantity: 1,
                              media: { src: artifact.media.src || "", placeholderLabel: artifact.series }
                            });
                            router.push("/checkout?method=PHONEPE");
                          }}
                          className="p-1 px-3 border border-accent/20 bg-accent/5 hover:bg-accent hover:text-black transition-all text-accent font-mono text-[8px] tracking-tighter uppercase"
                        >
                          BUY_NOW
                        </button>
                     </div>
                  </div>
                </div>

                {/* CENTER: Technical Visualization */}
                <div className="relative flex-1 flex items-center justify-center p-6 bg-[#020202] overflow-hidden my-6">
                   <div className="absolute inset-0 bg-white/[0.01] -z-10" />
                   {artifact.media.src ? (
                     <img 
                       src={artifact.media.src} 
                       alt={artifact.title} 
                       className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" 
                     />
                   ) : (
                     <div className="w-full h-full border border-white/5 relative flex items-center justify-center">
                        <div className="absolute inset-4 border border-white/5 opacity-50" />
                        <div className="w-12 h-12 border border-accent/20 rounded-full animate-pulse flex items-center justify-center">
                           <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#00F2FF]" />
                        </div>
                        {artifact.media.placeholderLabel && (
                          <TechnicalLabel 
                            label={artifact.media.placeholderLabel} 
                            className="absolute bottom-4 text-[7px] text-zinc-800"
                          />
                        )}
                     </div>
                   )}
                </div>

                {/* BOTTOM: DATA STATS */}
                <div className="flex items-end justify-between border-t border-white/5 pt-6">
                  <div className="space-y-1">
                    <TechnicalLabel label="SYNC_STATUS" className="text-zinc-700 text-[7px]" />
                    <TechnicalLabel 
                      label={artifact.status === 'AVAILABLE' ? 'LOCALIZED' : 'DE-FRAGMENTED'} 
                      className={artifact.status === 'AVAILABLE' ? 'text-accent' : 'text-red-900/60'}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                     <TechnicalLabel label="VIEW_SPEC" className="text-zinc-600 text-[9px]" />
                     <div className="w-4 h-[1px] bg-white" />
                  </div>
                </div>
              </HudContainer>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
