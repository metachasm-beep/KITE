"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Archive, Terminal, Share2, Plus } from "lucide-react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { useCart } from "@/lib/contexts/CartContext";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useState } from "react";
import { Artifact } from "@/lib/cms";
import GlitchText from "@/components/reactbits/GlitchText";
import DecryptedText from "@/components/reactbits/DecryptedText";

interface CollectionsClientProps {
  initialArtifacts: Artifact[];
}

export default function CollectionsClient({ initialArtifacts }: CollectionsClientProps) {
  const { isCyberpunk } = useTheme();
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
    <main className={`min-h-screen pt-32 pb-40 relative transition-colors duration-700
      ${isCyberpunk ? "bg-black text-[#00f5d4]" : "bg-white text-foreground"}`}>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <header className="max-w-4xl mb-20 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="space-y-6">
            <div className={`flex items-center gap-3 ${isCyberpunk ? "text-[#00f5d4]/40" : "text-zinc-400"}`}>
              {isCyberpunk ? <Terminal size={16} /> : <Archive size={16} />}
              <span className={`text-xs font-medium uppercase tracking-widest ${isCyberpunk ? "font-mono" : ""}`}>
                {isCyberpunk ? "ARCHIVE_INDEX.DB" : "Archive Index"}
              </span>
            </div>
            
            {isCyberpunk ? (
              <div className="flex flex-col items-start">
                <GlitchText speed={0.4} className="text-[#00f5d4] font-mono leading-none !m-0 !p-0">
                  THE_CATALOG
                </GlitchText>
              </div>
            ) : (
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground">
                The <span className="text-zinc-300">Catalog</span>
              </h1>
            )}
            
            <div className="max-w-xl">
              {isCyberpunk ? (
                <DecryptedText 
                  text="EXPLORE OUR CURRENT COLLECTION OF PHYSICAL DESIGN UNITS. EACH PIECE IS CRAFTED USING PREMIUM MATERIALS AND PRECISE ENGINEERING."
                  animateOn="view"
                  speed={30}
                  className="text-sm font-mono text-[#00f5d4]/60 leading-relaxed uppercase tracking-wider"
                />
              ) : (
                <p className="text-lg text-zinc-500 leading-relaxed">
                  Explore our current collection of physical design units. Each piece is crafted using premium materials and precise engineering.
                </p>
              )}
            </div>
          </div>

          <div className={`hidden md:flex flex-col items-end gap-2 pt-4 border-t ${isCyberpunk ? "border-[#00f5d4]/20" : "border-black/5"}`}>
             <span className={`text-sm font-medium ${isCyberpunk ? "text-[#00f5d4]/60 font-mono" : "text-zinc-500"}`}>
               {filteredArtifacts.length} Units Available
             </span>
          </div>
        </header>

        {/* Filter Section */}
        <div className={`mb-12 flex flex-col md:flex-row gap-8 py-8 border-y ${isCyberpunk ? "border-[#00f5d4]/20" : "border-black/5"}`}>
           <div className="space-y-4 flex-1">
              <p className={`text-xs font-medium uppercase tracking-widest ${isCyberpunk ? "text-[#00f5d4]/40 font-mono" : "text-zinc-400"}`}>
                {isCyberpunk ? "// FILTER_BY_SERIES" : "Filter by Series"}
              </p>
              <div className="flex flex-wrap gap-3">
                 {uniqueSeries.map(s => (
                    <button 
                      key={s} 
                      onClick={() => setFilterSeries(s)}
                      className={`text-sm font-medium px-5 py-2 transition-all duration-300
                        ${isCyberpunk 
                          ? filterSeries === s 
                            ? "bg-[#00f5d4] text-black shadow-[0_0_15px_rgba(0,245,212,0.4)]" 
                            : "bg-black border border-[#00f5d4]/30 text-[#00f5d4]/60 hover:border-[#00f5d4] hover:text-[#00f5d4]" 
                          : filterSeries === s 
                            ? "bg-foreground text-white rounded-full" 
                            : "bg-muted text-zinc-600 hover:bg-black/5 rounded-full"}`}
                    >
                      {isCyberpunk ? (s === "ALL" ? "ALL_SERIES" : s.toUpperCase()) : (s === "ALL" ? "All Series" : s)}
                    </button>
                 ))}
              </div>
           </div>
           
           <div className="space-y-4">
              <p className={`text-xs font-medium uppercase tracking-widest ${isCyberpunk ? "text-[#00f5d4]/40 font-mono" : "text-zinc-400"}`}>
                {isCyberpunk ? "// AVAILABILITY" : "Availability"}
              </p>
              <div className="flex flex-wrap gap-3">
                 {statuses.map(s => (
                    <button 
                      key={s} 
                      onClick={() => setFilterStatus(s)}
                      className={`text-sm font-medium px-5 py-2 transition-all duration-300
                        ${isCyberpunk 
                          ? filterStatus === s 
                            ? "bg-[#00f5d4] text-black shadow-[0_0_15px_rgba(0,245,212,0.4)]" 
                            : "bg-black border border-[#00f5d4]/30 text-[#00f5d4]/60 hover:border-[#00f5d4] hover:text-[#00f5d4]" 
                          : filterStatus === s 
                            ? "bg-foreground text-white rounded-full" 
                            : "bg-muted text-zinc-600 hover:bg-black/5 rounded-full"}`}
                    >
                      {isCyberpunk ? s.toUpperCase() : (s === "ALL" ? "All Status" : s === "AVAILABLE" ? "In Stock" : "Sold Out")}
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
              <div className={`aspect-[4/5] p-6 relative flex flex-col items-center justify-center overflow-hidden transition-all duration-500
                ${isCyberpunk 
                  ? "bg-black border border-[#00f5d4]/10 group-hover:border-[#00f5d4]/40 group-hover:shadow-[0_0_30px_rgba(0,245,212,0.1)]" 
                  : "bg-muted/30 rounded-3xl group-hover:bg-muted/60 border border-black/5"}`}>
                 
                 {/* Top Tags */}
                 <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className={`text-xs font-semibold tracking-wide uppercase ${isCyberpunk ? "text-[#00f5d4]/60 font-mono" : "text-zinc-500"}`}>
                      {isCyberpunk ? `// ${artifact.series?.toUpperCase() || "SERIES_01"}` : (artifact.series || "Series 01")}
                    </span>
                 </div>
                 
                 {/* Status Tag */}
                 <div className="absolute top-6 right-6">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 transition-all
                      ${isCyberpunk 
                        ? artifact.status === 'AVAILABLE' 
                          ? "bg-[#00f5d4]/10 text-[#00f5d4] border border-[#00f5d4]/40" 
                          : "bg-red-500/10 text-red-500 border border-red-500/40"
                        : artifact.status === 'AVAILABLE' 
                          ? "bg-accent/10 text-accent rounded-full" 
                          : "bg-red-500/10 text-red-500 rounded-full"}`}>
                      {artifact.status === 'AVAILABLE' ? (isCyberpunk ? 'IN_STOCK' : 'In Stock') : (isCyberpunk ? 'SOLD_OUT' : 'Sold Out')}
                    </span>
                 </div>

                 {/* Center Image */}
                 <div className="w-full h-2/3 relative flex items-center justify-center mt-12">
                    {artifact.media.src ? (
                       <img 
                         src={artifact.media.src} 
                         alt={artifact.title} 
                         className={`w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700
                           ${isCyberpunk ? "invert brightness-200" : ""}`} 
                       />
                    ) : (
                      <div className={`w-20 h-20 flex items-center justify-center transition-colors
                        ${isCyberpunk ? "bg-black border border-[#00f5d4]/40 shadow-[0_0_15px_rgba(0,245,212,0.2)]" : "bg-white border border-black/5 rounded-2xl shadow-sm"}`}>
                         <div className={`w-2 h-2 rounded-full ${isCyberpunk ? "bg-[#00f5d4]" : "bg-zinc-300"}`} />
                      </div>
                    )}
                 </div>
              </div>
              
              {/* Bottom Content Area outside the card */}
              <div className="pt-6 px-2 flex justify-between items-start">
                 <div className="space-y-1">
                    <h3 className={`text-lg font-semibold tracking-tight transition-colors
                      ${isCyberpunk ? "text-[#00f5d4] font-mono group-hover:text-white" : "text-foreground group-hover:text-accent"}`}>
                      {isCyberpunk ? artifact.title.toUpperCase() : artifact.title}
                    </h3>
                    <p className={`font-medium ${isCyberpunk ? "text-[#00f5d4]/60 font-mono text-sm" : "text-zinc-500"}`}>
                      {isCyberpunk ? `VAL: ${artifact.price}` : artifact.price}
                    </p>
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
                      className={`w-10 h-10 flex items-center justify-center transition-all
                        ${isCyberpunk 
                          ? "bg-black border border-[#00f5d4]/40 text-[#00f5d4] hover:bg-[#00f5d4] hover:text-black" 
                          : "bg-muted rounded-full text-zinc-600 hover:bg-foreground hover:text-white"}`}
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
                      className={`px-5 h-10 font-medium text-sm transition-all
                        ${isCyberpunk 
                          ? "bg-[#00f5d4]/10 border border-[#00f5d4] text-[#00f5d4] hover:bg-[#00f5d4] hover:text-black font-mono" 
                          : "bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-white"}`}
                    >
                      {isCyberpunk ? "PURCHASE" : "Buy Now"}
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
