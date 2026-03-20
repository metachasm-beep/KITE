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
import DecryptedText from "@/components/reactbits/DecryptedText";
import BlurText from "@/components/reactbits/BlurText";
import TrueFocus from "@/components/reactbits/TrueFocus";
import VariableWeight from "@/components/reactbits/VariableWeight";
import { CardContainer, CardBody, CardItem } from "@/components/ui/ThreeDCard";
import { SystemButton } from "@/components/common/SystemButton";

interface CollectionsClientProps {
  initialArtifacts: Artifact[];
}

export default function CollectionsClient({ initialArtifacts }: CollectionsClientProps) {
  const { isCyberpunk } = useTheme();
  const { addItem } = useCart();
  const router = useRouter();
  const [filterSeries, setFilterSeries] = useState<string>("ALL");
  const [filterStatus, setFilterStatus] = useState<string>("ALL");

  const uniqueSeries = ["ALL", ...Array.from(new Set(initialArtifacts.map((a: Artifact) => a.series)))];
  const statuses = ["ALL", "AVAILABLE", "SOLD_OUT"];

  const filteredArtifacts = initialArtifacts.filter((a: Artifact) => {
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
              <div className="flex flex-col items-start min-h-[80px] justify-end">
                <DecryptedText
                  text="THE_CATALOG"
                  className="text-6xl md:text-8xl font-mono text-[#00f5d4] leading-none"
                  animateOn="view"
                  speed={50}
                />
              </div>
            ) : (
              <div className="space-y-2">
                <BlurText
                  text="The Catalog"
                  className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground"
                  delay={150}
                  animateBy="letters"
                  direction="bottom"
                />
                <TrueFocus
                  sentence="Curating the future of minimal hardware."
                  className="text-lg text-zinc-500"
                  focusRadius={100}
                />
              </div>
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
                <VariableWeight
                  text="Discover premium, minimalist hardware designed for modern living. We bridge the gap between architectural form and everyday utility."
                  className="text-lg text-zinc-500 leading-relaxed"
                  initialWeight={300}
                  hoverWeight={600}
                />
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
                 {uniqueSeries.map((s) => (
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

        {/* The Grid with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8">
          {filteredArtifacts.map((artifact: Artifact) => (
            <CardContainer key={artifact.slug} containerClassName="py-0">
              <CardBody className={`relative group/card w-full h-auto rounded-3xl p-6 border transition-all duration-500
                ${isCyberpunk 
                  ? "bg-black border-[#00f5d4]/10 group-hover/card:border-[#00f5d4]/40 shadow-[0_0_30px_rgba(0,245,212,0.05)]" 
                  : "bg-white border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"}`}>
                
                <CardItem translateZ="50" className="w-full flex flex-col">
                  {/* Card Media Wrapper */}
                  <Link href={`/collections/${artifact.slug}`} className="block">
                    <div className={`aspect-[4/5] p-6 relative flex flex-col items-center justify-center overflow-hidden rounded-2xl
                      ${isCyberpunk ? "bg-zinc-950/50" : "bg-muted/30"}`}>
                       
                       {/* Top Tags */}
                       <CardItem translateZ="60" className="absolute top-6 left-6 flex items-center gap-2">
                          <span className={`text-[10px] font-bold tracking-widest uppercase ${isCyberpunk ? "text-[#00f5d4]/60 font-mono" : "text-zinc-500"}`}>
                            {isCyberpunk ? `// ${artifact.series?.toUpperCase() || "SERIES_01"}` : (artifact.series || "Series 01")}
                          </span>
                       </CardItem>
                       
                       {/* Status Tag */}
                       <CardItem translateZ="60" className="absolute top-6 right-6">
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5
                            ${isCyberpunk 
                              ? artifact.status === 'AVAILABLE' 
                                ? "bg-[#00f5d4]/10 text-[#00f5d4] border border-[#00f5d4]/40" 
                                : "bg-red-500/10 text-red-500 border border-red-500/40"
                              : artifact.status === 'AVAILABLE' 
                                ? "bg-accent/10 text-accent rounded-full" 
                                : "bg-red-500/10 text-red-500 rounded-full"}`}>
                            {artifact.status === 'AVAILABLE' ? (isCyberpunk ? 'IN_STOCK' : 'In Stock') : (isCyberpunk ? 'SOLD_OUT' : 'Sold Out')}
                          </span>
                       </CardItem>

                       {/* Center Image */}
                       <CardItem translateZ="100" className="w-full h-2/3 relative flex items-center justify-center mt-12">
                          {artifact.media.src ? (
                             <img 
                               src={artifact.media.src} 
                               alt={artifact.title} 
                               className={`w-full h-full object-contain mix-blend-multiply transition-transform duration-700
                                 ${isCyberpunk ? "invert brightness-200" : ""}`} 
                             />
                          ) : (
                            <div className={`w-20 h-20 flex items-center justify-center
                              ${isCyberpunk ? "bg-black border border-[#00f5d4]/40 shadow-[0_0_15px_rgba(0,245,212,0.2)]" : "bg-white border border-black/5 rounded-2xl shadow-sm"}`}>
                               <div className={`w-2 h-2 rounded-full ${isCyberpunk ? "bg-[#00f5d4]" : "bg-zinc-300"}`} />
                            </div>
                          )}
                       </CardItem>
                    </div>
                  </Link>
                  
                  {/* Bottom Content Area */}
                  <div className="pt-6 flex justify-between items-start">
                     <div className="space-y-1">
                        <CardItem translateZ="40" as="h3" className={`text-lg font-bold tracking-tight
                          ${isCyberpunk ? "text-[#00f5d4] font-mono" : "text-foreground"}`}>
                          {isCyberpunk ? artifact.title.toUpperCase() : artifact.title}
                        </CardItem>
                        <CardItem translateZ="30" as="p" className={`font-medium ${isCyberpunk ? "text-[#00f5d4]/60 font-mono text-sm" : "text-zinc-500"}`}>
                          {isCyberpunk ? `VAL: ${artifact.price}` : `₹${artifact.price}`}
                        </CardItem>
                     </div>
                     
                     <div className="flex gap-2">
                        <CardItem translateZ="60">
                          <SystemButton 
                            variant="secondary"
                            onClick={() => addItem({
                              id: artifact.id, 
                              slug: artifact.slug,
                              title: artifact.title,
                              price: artifact.price,
                              quantity: 1,
                              media: { src: artifact.media.src || "", placeholderLabel: artifact.series }
                            })}
                            className="!p-3 !rounded-full"
                          >
                            <Plus size={18} />
                          </SystemButton>
                        </CardItem>
                        <CardItem translateZ="60">
                          <SystemButton 
                            onClick={() => {
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
                            className="!px-6 !py-2.5"
                          >
                            {isCyberpunk ? "PURCHASE" : "Buy Now"}
                          </SystemButton>
                        </CardItem>
                     </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </main>
  );
}
