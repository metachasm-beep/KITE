export default function SystemPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24 border-x border-white/5 max-w-7xl mx-auto">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-24 border-b border-white/10 pb-12">
           <span className="text-[10px] font-mono text-accent tracking-[0.4em] uppercase block mb-6 animate-pulse">INTERNAL_DOC // 0X</span>
           <h1 className="text-5xl md:text-7xl font-heading tracking-tight text-white mb-6">THE_PROTOCOL</h1>
           <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest leading-relaxed max-w-2xl">
              UNIT_01 is a physical design laboratory engineering geometric studies in heavy-density materials. Our architecture bridges digital telemetry with tactile presence.
           </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
           <section className="space-y-6">
              <h2 className="text-[11px] font-bold text-white tracking-[0.3em] uppercase border-l-2 border-accent pl-4 py-1">MATERIAL_LOGIC</h2>
              <p className="text-xs font-mono text-zinc-500 uppercase leading-loose">
                 Aesthetic decisions must feel derived from engineering requirements. We prioritize high-density PLA composites, heavy resins, and matte surface finishing. There is no decorative clutter. Only technical necessity.
              </p>
           </section>

           <section className="space-y-6">
              <h2 className="text-[11px] font-bold text-white tracking-[0.3em] uppercase border-l-2 border-accent pl-4 py-1">ALLOCATION_MECH</h2>
              <p className="text-xs font-mono text-zinc-500 uppercase leading-loose">
                 Every object is rigorously specified for exact tolerances. We do not mass-produce; we allocate units to the archive through strict drop mechanics. Once an allocation is DE-FRAGMENTED, the geometric mold is retired.
              </p>
           </section>

           <section className="space-y-6 md:col-span-2 mt-8 p-8 border border-white/5 bg-white/[0.02]">
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
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
