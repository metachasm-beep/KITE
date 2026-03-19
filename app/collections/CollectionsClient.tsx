"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Archive, Terminal, Share2, Plus } from "lucide-react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { useCart } from "@/lib/contexts/CartContext";
import { useState } from "react";
import { Artifact } from "@/lib/cms";

interface CollectionsClientProps {
  initialArtifacts: Artifact[];
}

export default function CollectionsClient({ initialArtifacts }: CollectionsClientProps) {
  const { addItem } = useCart();
  const router = useRouter();
  const [filterSeries, setFilterSeries] = useState<string>("ALL");
  const [filterStatus, setFilterStatus] = useState<string>("ALL");

  const uniqueSeries = ["ALL", ...Array.from(new Set(initialArtifacts.map(a => a.series)))];
  const statuses = ["ALL", "AVAILABLE", "SOLD_OUT"];

  const filteredArtifacts = initialArtifacts.filter(a => {
    const seriesMatch = filterSeries === "ALL" || a.series === filterSeries;
    const statusMatch = filterStatus === "ALL" || a.status === filterStatus;
    return seriesMatch && statusMatch;
  });

  return (
    <main className="min-h-screen bg-background pt-32 pb-48 relative overflow-hidden">
      {/* Background HUD Detail */}
      <div className="absolute top-0 right-0 w-1/3 aspect-square border-l border-b border-black/5 -z-0 opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <header className="max-w-4xl mb-32 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <Archive size={16} className="text-accent" />
              <span className="text-[10px] font-mono font-bold text-accent tracking-[0.3em] uppercase">Archive Index</span>
            </div>
            
            <h1 className="text-[48px] md:text-[96px] font-heading leading-none tracking-[-0.1em] text-foreground uppercase">
              THE <br />
              <span className="text-zinc-200">CATALOG</span>
            </h1>
            
            <p className="text-[16px] md:text-[20px] font-medium text-zinc-500 max-w-xl leading-relaxed">
              Explore our current collection of physical design units. Each piece is crafted using high-density materials and precise engineering.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 border-t border-black/10 pt-4 hidden md:flex">
             <span className="text-[10px] font-mono text-accent uppercase tracking-widest">{filteredArtifacts.length} Units Available</span>
             <Terminal size={14} className="text-zinc-200" />
          </div>
        </header>

        {/* Filter Section */}
        <div className="mb-16 flex flex-col md:flex-row gap-12 border-y border-black/5 py-8">
           <div className="space-y-4 flex-1">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Filter by Series</p>
              <div className="flex flex-wrap gap-4">
                 {uniqueSeries.map(s => (
                    <button 
                      key={s} 
                      onClick={() => setFilterSeries(s)}
                      className={`text-[10px] font-mono px-4 py-2 border transition-all uppercase tracking-widest
                        ${filterSeries === s ? 'border-accent text-accent bg-accent/5' : 'border-black/5 text-zinc-400 hover:text-foreground'}`}
                    >
                      {s === "ALL" ? "All Series" : s}
                    </button>
                 ))}
              </div>
           </div>
           
           <div className="space-y-4">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Availability</p>
              <div className="flex gap-4">
                 {statuses.map(s => (
                    <button 
                      key={s} 
                      onClick={() => setFilterStatus(s)}
                      className={`text-[10px] font-mono px-4 py-2 border transition-all uppercase tracking-widest
                        ${filterStatus === s ? 'border-accent text-accent bg-accent/5' : 'border-black/5 text-zinc-400 hover:text-foreground'}`}
                    >
                      {s === "ALL" ? "All Status" : s}
                    </button>
                 ))}
              </div>
           </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-1">
          {filteredArtifacts.map((artifact) => (
            <Link 
              key={artifact.slug}
              href={`/collections/${artifact.slug}`}
              className="group"
            >
              <HudContainer className="hover:border-accent/30 transition-all duration-500 aspect-[4/5] flex flex-col justify-between bg-white">
                {/* TOP: Title & Price */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-mono text-accent uppercase tracking-widest">Series 01</span>
                    </div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-foreground tracking-widest uppercase group-hover:text-accent transition-colors duration-500">
                      {artifact.title}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-right">
                     <span className="text-[11px] font-bold text-foreground font-mono">{artifact.price}</span>
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
                          className="p-1 px-3 border border-black/5 bg-muted hover:bg-black hover:text-white transition-all text-zinc-500 font-mono text-[8px] tracking-tighter uppercase"
                        >
                          Add to Cart
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
                          className="p-1 px-3 border border-accent/20 bg-accent/5 hover:bg-accent hover:text-white transition-all text-accent font-mono text-[8px] tracking-tighter uppercase"
                        >
                          Buy Now
                        </button>
                     </div>
                  </div>
                </div>

                {/* CENTER: Image */}
                <div className="relative flex-1 flex items-center justify-center p-6 bg-muted overflow-hidden my-6">
                   {artifact.media.src ? (
                      <img 
                        src={artifact.media.src} 
                        alt={artifact.title} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700" 
                      />
                   ) : (
                     <div className="w-full h-full border border-black/5 relative flex items-center justify-center">
                        <div className="w-2 h-2 bg-zinc-200 rounded-full" />
                     </div>
                   )}
                </div>

                {/* BOTTOM: Status */}
                <div className="flex items-end justify-between border-t border-black/5 pt-6">
                  <div className="space-y-1">
                    <span className="text-zinc-400 text-[8px] uppercase font-bold tracking-widest">Availability</span>
                    <p className={`text-[10px] font-bold uppercase transition-colors ${artifact.status === 'AVAILABLE' ? 'text-accent' : 'text-red-400'}`}>
                      {artifact.status === 'AVAILABLE' ? 'In Stock' : 'Sold Out'}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                     <span className="text-zinc-600 text-[9px] uppercase font-bold">Details</span>
                     <div className="w-4 h-[1px] bg-black" />
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
