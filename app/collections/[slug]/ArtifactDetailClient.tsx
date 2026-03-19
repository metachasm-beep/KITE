"use client";

import Link from "next/link";
import { Terminal, MoveLeft, Cpu, Activity } from "lucide-react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";
import { useCart } from "@/lib/contexts/CartContext";
import { Artifact } from "@/lib/cms";

interface ArtifactDetailClientProps {
  artifact: Artifact;
}

export default function ArtifactDetailClient({ artifact }: ArtifactDetailClientProps) {
  const { addItem } = useCart();

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row border-y border-black/5 pt-16">
      
      {/* Visualizer Display Pane */}
      <section className="flex-1 min-h-[60vh] lg:min-h-screen bg-muted border-r border-black/5 relative flex items-center justify-center p-12 overflow-hidden">
        {/* Subtle Overlay Layer */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,128,128,0.05)_0%,transparent_70%)]" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-black/5" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-black/5" />
        </div>

        {/* Labels */}
        <div className="absolute top-10 left-10 flex flex-col gap-4">
           <div className="flex items-center gap-2">
              <Activity size={12} className="text-accent" />
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Active State</span>
           </div>
        </div>
        
        {/* Image Container */}
        <HudContainer className="w-[280px] md:w-[400px] aspect-square flex items-center justify-center group overflow-hidden bg-white">
          {artifact.media.src ? (
            <img 
              src={artifact.media.src} 
              alt={artifact.title} 
              className="w-full h-full object-contain p-8 group-hover:scale-105 transition-all duration-1000" 
            />
          ) : (
            <div className="w-1/2 h-1/2 border border-black/5 flex items-center justify-center">
              <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
            </div>
          )}
        </HudContainer>
      </section>

      {/* Specifications & Actions Pane */}
      <section className="w-full lg:w-[500px] xl:w-[650px] p-12 md:p-24 flex flex-col justify-center relative bg-background">
        
        <Link 
          href="/collections"
          className="flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] text-zinc-400 uppercase hover:text-foreground transition-colors mb-16"
        >
          <MoveLeft size={14} />
          <span>Back to Catalog</span>
        </Link>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Cpu size={14} className="text-accent" />
              <span className="font-bold text-accent text-xs uppercase tracking-widest">{artifact.series}</span>
            </div>
            <h1 className="text-[44px] md:text-[64px] font-heading leading-none tracking-[-0.08em] text-foreground uppercase">
              {artifact.title}
            </h1>
          </div>
          
          <div className="p-6 bg-muted border border-black/5 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-1 bg-accent" />
             <p className="font-mono text-zinc-500 text-[13px] tracking-tight leading-relaxed uppercase">
                {artifact.description}
             </p>
          </div>

          {/* Details */}
          <div className="space-y-1">
             <div className="flex items-center gap-2 mb-4">
                <Terminal size={12} className="text-zinc-200" />
                <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Product Details</span>
             </div>
             
             <div className="border-y border-black/5">
                {artifact.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-4 border-b border-black/[0.02] group hover:bg-black/[0.01] transition-colors px-2">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{spec.label}</span>
                    <span className="text-[11px] font-mono tracking-widest text-foreground uppercase text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
             </div>
          </div>

          <div className="flex items-center justify-between py-6">
            <div className="flex flex-col">
               <span className="text-zinc-400 text-[8px] uppercase font-bold tracking-widest mb-1">List Price</span>
               <span className="text-3xl font-mono text-foreground tracking-tighter">{artifact.price}</span>
            </div>
            
            <div className="text-right">
               <span className="text-zinc-400 text-[8px] uppercase font-bold tracking-widest mb-1">Availability</span>
               <p className={`text-[10px] font-bold uppercase ${artifact.status === 'AVAILABLE' ? 'text-accent' : 'text-red-400'}`}>
                 {artifact.status === 'AVAILABLE' ? '[ In Stock ]' : '[ Sold Out ]'}
               </p>
            </div>
          </div>

          <SystemButton 
            onClick={() => addItem({
              id: artifact.id,
              slug: artifact.slug,
              title: artifact.title,
              price: artifact.price,
              quantity: 1,
              media: artifact.media
            })}
            className={`w-full py-6 
              ${artifact.status === "SOLD_OUT" ? "opacity-30 cursor-not-allowed border-zinc-200 text-zinc-400" : ""}`}
            disabled={artifact.status === "SOLD_OUT"}
          >
            {artifact.status === "SOLD_OUT" ? "Sold Out" : "Add to Cart"}
          </SystemButton>
        </div>
      </section>
    </main>
  );
}
