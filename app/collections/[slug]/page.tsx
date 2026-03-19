import { getArtifactBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Terminal, MoveLeft, Cpu, Activity } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ArtifactDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const artifact = await getArtifactBySlug(resolvedParams.slug);

  if (!artifact) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col lg:flex-row border-y border-white/5 pt-16">
      
      {/* 3D Visualizer / HUD Display Pane */}
      <section className="flex-1 min-h-[60vh] lg:min-h-screen bg-[#020202] border-r border-white/5 relative flex items-center justify-center p-12 overflow-hidden">
        {/* HUD Overlay Layer */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.1)_0%,transparent_70%)]" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/5" />
          <div className="scanline-overlay" />
        </div>

        {/* Diagnostic Labels */}
        <div className="absolute top-10 left-10 flex flex-col gap-4">
           <div className="flex items-center gap-2">
              <Activity size={12} className="text-accent animate-pulse" />
              <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">SIGNAL_STABLE</span>
           </div>
           <div className="space-y-1">
              <span className="text-[7px] font-mono text-zinc-700 uppercase block tracking-wider">UNIT_COORD</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase block tracking-widest leading-none">X: 120 / Y: 40 / Z: 40</span>
           </div>
        </div>

        <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 text-right">
           <span className="text-[7px] font-mono text-zinc-700 uppercase block tracking-wider">ENGINEERING_LOG</span>
           <span className="text-[10px] font-mono text-zinc-500 uppercase block tracking-widest max-w-[200px] leading-tight">
             PRECISION_TOLERANCE_0.01mm_MEASURED
           </span>
        </div>
        
        {/* Placeholder Structural Geometry / Live Image */}
        <div className="hud-container w-[280px] md:w-[400px] aspect-square flex items-center justify-center group overflow-hidden">
          <div className="corner" />
          <div className="absolute inset-0 bg-white/[0.01] -z-10 group-hover:bg-accent/[0.02] transition-colors" />
          
          {artifact.imageUrl ? (
            <img 
              src={artifact.imageUrl} 
              alt={artifact.title} 
              className="w-full h-full object-contain p-8 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
            />
          ) : (
            <div className="w-1/2 h-1/2 border-[0.5px] border-accent/20 rotate-45 flex items-center justify-center group-hover:rotate-0 transition-transform duration-1000">
              <div className="w-full h-full border-[0.5px] border-white/10 -rotate-90" />
            </div>
          )}
          
          {/* Central Core Glow */}
          {!artifact.imageUrl && <div className="absolute w-2 h-2 bg-accent rounded-full blur-[4px] animate-ping" />}
        </div>
      </section>

      {/* Specifications & Actions Pane */}
      <section className="w-full lg:w-[500px] xl:w-[650px] p-12 md:p-24 flex flex-col justify-center relative bg-[#050505]">
        
        <Link 
          href="/collections"
          className="flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] text-zinc-600 uppercase hover:text-white transition-colors mb-16"
        >
          <MoveLeft size={14} />
          <span>RETURN_TO_ARCHIVE</span>
        </Link>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Cpu size={14} className="text-accent" />
              <span className="text-[11px] font-bold text-accent tracking-[0.4em] uppercase">
                {artifact.series}
              </span>
            </div>
            <h1 className="text-[44px] md:text-[64px] font-heading leading-none tracking-[-0.08em] text-white uppercase">
              {artifact.title}
            </h1>
          </div>
          
          <div className="p-6 bg-white/[0.02] border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-1 bg-accent" />
             <p className="font-mono text-zinc-500 text-[13px] tracking-tight leading-relaxed uppercase">
               {artifact.description}
             </p>
          </div>

          {/* Spec Grid - HUD Style */}
          <div className="space-y-1">
             <div className="flex items-center gap-2 mb-4">
                <Terminal size={12} className="text-zinc-700" />
                <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest">UNIT_SPECIFICATIONS</span>
             </div>
             
             <div className="border-y border-white/5">
                {artifact.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-4 border-b border-white/[0.02] group hover:bg-white/[0.01] transition-colors px-2">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase group-hover:text-zinc-400 transition-colors">
                      {spec.label}
                    </span>
                    <span className="text-[11px] font-mono tracking-widest text-white uppercase text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
             </div>
          </div>

          <div className="flex items-center justify-between py-6">
            <div className="flex flex-col">
               <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-[0.2em] mb-1">UNIT_VALUE</span>
               <span className="text-3xl font-mono text-white tracking-tighter">{artifact.price}</span>
            </div>
            
            <div className="text-right">
               <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-[0.2em] mb-1">AVAILABILITY</span>
               <span className={`text-[11px] font-mono font-bold tracking-widest uppercase block 
                 ${artifact.status === 'AVAILABLE' ? 'text-accent' : 'text-red-900/40'}`}>
                 {artifact.status === 'AVAILABLE' ? '[ LOCALIZED ]' : '[ DE-FRAGMENTED ]'}
               </span>
            </div>
          </div>

          <button 
            className={`btn-hud w-full py-6 
              ${artifact.status === "SOLD_OUT" ? "opacity-30 cursor-not-allowed border-zinc-800 text-zinc-800" : ""}`}
            disabled={artifact.status === "SOLD_OUT"}
          >
            {artifact.status === "SOLD_OUT" ? "UNIT_DEPLETED" : "INIT_ACQUISITION_PROTOCOL"}
          </button>
        </div>
      </section>
    </main>
  );
}
