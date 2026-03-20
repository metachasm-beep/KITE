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
    <main className="min-h-screen bg-white pt-32 pb-40 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <header className="max-w-4xl mb-20 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Archive size={16} className="text-zinc-400" />
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Archive Index</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground">
              The <span className="text-zinc-400">Catalog</span>
            </h1>
            
            <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
              Explore our current collection of physical design units. Each piece is crafted using premium materials and precise engineering.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end gap-2 border-t border-black/5 pt-4">
             <span className="text-sm font-medium text-zinc-500">{filteredArtifacts.length} Units Available</span>
          </div>
        </header>

        {/* Filter Section */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 border-y border-black/5 py-8">
           <div className="space-y-4 flex-1">
              <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Filter by Series</p>
              <div className="flex flex-wrap gap-3">
                 {uniqueSeries.map(s => (
                    <button 
                      key={s} 
                      onClick={() => setFilterSeries(s)}
                      className={`text-sm font-medium px-5 py-2 rounded-full transition-colors
                        ${filterSeries === s ? 'bg-foreground text-white' : 'bg-muted text-zinc-600 hover:bg-black/5'}`}
                    >
                      {s === "ALL" ? "All Series" : s}
                    </button>
                 ))}
              </div>
           </div>
           
           <div className="space-y-4">
              <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Availability</p>
              <div className="flex flex-wrap gap-3">
                 {statuses.map(s => (
                    <button 
                      key={s} 
                      onClick={() => setFilterStatus(s)}
                      className={`text-sm font-medium px-5 py-2 rounded-full transition-colors
                        ${filterStatus === s ? 'bg-foreground text-white' : 'bg-muted text-zinc-600 hover:bg-black/5'}`}
                    >
                      {s === "ALL" ? "All Status" : 
                       s === "AVAILABLE" ? "In Stock" : "Sold Out"}
                    </button>
                 ))}
              </div>
           </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtifacts.map((artifact) => (
            <Link 
              key={artifact.slug}
              href={`/collections/${artifact.slug}`}
              className="group flex flex-col"
            >
              <div className="aspect-[4/5] bg-muted/30 rounded-3xl p-6 relative flex flex-col items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-muted/60">
                 {/* Top Tags */}
                 <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="text-xs font-semibold text-zinc-500 tracking-wide uppercase">{artifact.series || "Series 01"}</span>
                 </div>
                 
                 {/* Status Tag */}
                 <div className="absolute top-6 right-6">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${artifact.status === 'AVAILABLE' ? 'bg-accent/10 text-accent' : 'bg-red-500/10 text-red-500'}`}>
                      {artifact.status === 'AVAILABLE' ? 'In Stock' : 'Sold Out'}
                    </span>
                 </div>

                 {/* Center Image */}
                 <div className="w-full h-2/3 relative flex items-center justify-center mt-12">
                    {artifact.media.src ? (
                       <img 
                         src={artifact.media.src} 
                         alt={artifact.title} 
                         className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                       />
                    ) : (
                      <div className="w-20 h-20 rounded-2xl border border-black/5 bg-white shadow-sm flex items-center justify-center">
                         <div className="w-2 h-2 bg-zinc-300 rounded-full" />
                      </div>
                    )}
                 </div>
              </div>
              
              {/* Bottom Content Area outside the card */}
              <div className="pt-6 px-2 flex justify-between items-start">
                 <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                      {artifact.title}
                    </h3>
                    <p className="text-zinc-500 font-medium">{artifact.price}</p>
                 </div>
                 
                 <div className="flex gap-2">
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
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-zinc-600 hover:bg-foreground hover:text-white transition-colors"
                      title="Add to Cart"
                    >
                      <Plus size={18} />
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
                      className="px-5 h-10 rounded-full bg-accent/10 text-accent font-medium text-sm hover:bg-accent hover:text-white transition-colors"
                    >
                      Buy Now
                    </button>
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
