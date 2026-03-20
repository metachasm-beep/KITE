"use client";

import { useTheme } from "@/lib/contexts/ThemeContext";

export default function SystemPage() {
  const { isCyberpunk } = useTheme();
  
  return (
    <div className={`min-h-screen pt-32 pb-24 border-x max-w-7xl mx-auto transition-colors duration-700
      ${isCyberpunk ? "bg-[#050505] border-white/5" : "bg-white border-black/5"}`}>
      <div className="container mx-auto px-6 max-w-4xl">
        <header className={`mb-24 border-b pb-12 ${isCyberpunk ? "border-white/10" : "border-black/5"}`}>
           <span className="text-[10px] font-mono text-accent tracking-[0.4em] uppercase block mb-6 animate-pulse">INTERNAL_DOC // 0X</span>
           <h1 className={`text-5xl md:text-7xl font-semibold tracking-tight mb-6 
             ${isCyberpunk ? "text-white" : "text-foreground text-outline"}`}>
             THE_PROTOCOL
           </h1>
           <p className={`text-sm font-mono uppercase tracking-widest leading-relaxed max-w-2xl
             ${isCyberpunk ? "text-zinc-400" : "text-zinc-500"}`}>
              UNIT_01 is a physical design laboratory engineering geometric studies in heavy-density materials. Our architecture bridges digital telemetry with tactile presence.
           </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
           <section className="space-y-6">
              <h2 className={`text-[11px] font-bold tracking-[0.3em] uppercase border-l-2 border-accent pl-4 py-1
                ${isCyberpunk ? "text-white" : "text-foreground text-outline"}`}>
                MATERIAL_LOGIC
              </h2>
              <p className="text-xs font-mono text-zinc-500 uppercase leading-loose">
                 Aesthetic decisions must feel derived from engineering requirements. We prioritize high-density PLA composites, heavy resins, and matte surface finishing. There is no decorative clutter. Only technical necessity.
              </p>
           </section>

           <section className="space-y-6">
              <h2 className={`text-[11px] font-bold tracking-[0.3em] uppercase border-l-2 border-accent pl-4 py-1
                ${isCyberpunk ? "text-white" : "text-foreground text-outline"}`}>
                ALLOCATION_MECH
              </h2>
              <p className="text-xs font-mono text-zinc-500 uppercase leading-loose">
                 Every object is rigorously specified for exact tolerances. We do not mass-produce; we allocate units to the archive through strict drop mechanics. Once an allocation is DE-FRAGMENTED, the geometric mold is retired.
              </p>
           </section>

           <section className={`space-y-6 md:col-span-2 mt-8 p-8 border ${isCyberpunk ? "border-white/5 bg-white/[0.02]" : "border-black/5 bg-black/[0.01]"}`}>
              <div className={`flex justify-between items-center mb-8 border-b pb-4 ${isCyberpunk ? "border-white/5" : "border-black/5"}`}>
                 <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">SYS_LOGS</span>
                 <span className="text-[10px] font-mono text-accent tracking-widest uppercase">ENCRYPTED</span>
              </div>
              <ul className="space-y-4 font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
                 <li className="flex gap-4"><span className="text-zinc-600">2026.03.19</span> PROTOCOL V4.2 INITIALIZED</li>
                 <li className="flex gap-4"><span className="text-zinc-600">STATE_CHNG</span> HERO VISUALS ACTIVATED</li>
                 <li className="flex gap-4"><span className="text-zinc-600">GEO_METRIC</span> MATTE BLACK #000 ASSIGNED</li>
              </ul>
           </section>
        </div>
      </div>
    </div>
  );
}
