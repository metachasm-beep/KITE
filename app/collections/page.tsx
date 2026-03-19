import Link from "next/link";
import { getArtifacts } from "@/lib/cms";
import { Archive, Terminal, Share2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function CollectionsPage() {
  const artifacts = await getArtifacts();

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
              <span className="text-[10px] font-mono font-bold text-zinc-600 tracking-[0.4em] uppercase">SYSTEM_ARCHIVE // INDEX_01</span>
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
             <span className="text-[8px] font-mono text-zinc-700 uppercase">SYS_TELEMETRY</span>
             <span className="text-[11px] font-mono text-accent uppercase tracking-widest leading-none">U.01_ACTIVE_SYNC</span>
             <Terminal size={14} className="text-zinc-800" />
          </div>
        </header>

        {/* The Grid - Archive Vault aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-1">
          {artifacts.map((artifact) => (
            <Link 
              key={artifact.slug}
              href={`/collections/${artifact.slug}`}
              className="hud-container group hover:border-accent/30 transition-all duration-500 aspect-[4/5] flex flex-col justify-between"
            >
              <div className="corner" />
              
              {/* TOP: Telemetry + Title */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-mono text-accent uppercase tracking-tighter">[ SYNCING ]</span>
                    <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest">{artifact.series}</span>
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-bold text-white tracking-widest uppercase group-hover:text-accent transition-colors duration-500">
                    {artifact.title}
                  </h3>
                </div>
                <div className="flex flex-col items-end">
                   <span className="text-[11px] font-bold text-white font-mono">{artifact.price}</span>
                   <Share2 size={12} className="text-zinc-800 mt-2 hover:text-white transition-colors" />
                </div>
              </div>

              {/* CENTER: Technical Visualization */}
              <div className="relative flex-1 flex items-center justify-center p-12">
                 <div className="absolute inset-0 bg-white/[0.01] -z-10" />
                 <div className="w-full h-full border border-white/5 relative flex items-center justify-center">
                    <div className="absolute inset-4 border border-white/5 opacity-50" />
                    <div className="w-12 h-12 border border-accent/20 rounded-full animate-pulse flex items-center justify-center">
                       <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#00F2FF]" />
                    </div>
                 </div>
              </div>

              {/* BOTTOM: DATA STATS */}
              <div className="flex items-end justify-between border-t border-white/5 pt-6">
                <div className="space-y-1">
                  <span className="text-[7px] font-mono text-zinc-700 block uppercase">SYNC_STATUS</span>
                  <span className={`text-[9px] font-bold font-mono tracking-widest uppercase 
                    ${artifact.status === 'AVAILABLE' ? 'text-accent' : 'text-red-900/60'}`}>
                    {artifact.status === 'AVAILABLE' ? 'LOCALIZED' : 'DE-FRAGMENTED'}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                   <span className="text-[9px] font-mono text-zinc-600 uppercase">VIEW_SPEC</span>
                   <div className="w-4 h-[1px] bg-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
