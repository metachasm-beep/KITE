export default function AdminOverview() {
  const KPIS = [
    { label: "ACTIVE_ALLOCATIONS", value: 14, status: "NOMINAL" },
    { label: "GROSS_YIELD", value: "₹45,990", status: "OPTIMIZED" },
    { label: "UNITS_LOCALIZED", value: 120, status: "STABLE" },
    { label: "SYS_UPTIME", value: "99.9%", status: "SYNCED" },
  ];

  return (
    <div className="space-y-12">
      <header className="border-b border-black/5 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-heading tracking-[-0.05em] text-foreground text-outline uppercase">SYS_OVERVIEW</h1>
          <p className="font-mono text-[10px] text-zinc-400 tracking-[0.3em] uppercase mt-2">
            Global metrics and allocation telemetry
          </p>
        </div>
        <div className="text-right">
            <span className="font-mono text-[9px] text-accent tracking-[0.3em] uppercase block animate-pulse">LIVE_SYNC</span>
            <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">NODE: AP-NORTHEAST-1</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPIS.map((kpi) => (
          <div key={kpi.label} className="bg-white border border-black/5 p-6 flex flex-col justify-between h-36 hover:border-accent/40 transition-colors group relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-black/5 group-hover:border-accent/30 transition-colors" />
            <div className="flex justify-between items-start">
               <span className="font-mono text-[9px] text-zinc-400 tracking-widest uppercase font-bold">
                 {kpi.label}
               </span>
               <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-50 group-hover:opacity-100" />
            </div>
            <div>
               <span className="text-4xl font-heading text-foreground block mb-1 tracking-tighter">
                 {kpi.value}
               </span>
               <span className="font-mono text-[8px] text-accent tracking-[0.2em] uppercase font-bold">
                 STATUS: {kpi.status}
               </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="col-span-2 bg-white border border-black/5 p-8 h-80 flex flex-col relative overflow-hidden shadow-sm">
             <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-zinc-400 text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 font-bold">
                   <div className="w-1 h-3 bg-accent" />
                   ACQUISITION_VELOCITY
                </span>
                <span className="font-mono text-zinc-300 text-[9px] tracking-widest uppercase border border-black/5 px-2 py-1 rounded-sm">7 DAYS</span>
             </div>
             
             <div className="flex-1 border-b border-l border-black/5 relative flex items-end p-4 gap-2 bg-muted/20">
                 {[40, 70, 45, 90, 65, 110, 85].map((h, i) => (
                     <div key={i} className="bg-accent/20 hover:bg-accent/60 transition-colors w-full relative group cursor-pointer" style={{ height: `${(h / 110) * 100}%` }}>
                         <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-mono text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                             {h}
                         </div>
                     </div>
                 ))}
             </div>
          </section>

          <section className="col-span-1 bg-white border border-black/5 p-8 h-80 flex flex-col shadow-sm">
             <h3 className="font-mono text-zinc-400 text-[10px] tracking-[0.2em] uppercase mb-6 flex items-center gap-2 font-bold">
                <div className="w-1 h-3 bg-black/10" />
                SYSTEM_LOGS
             </h3>
             <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar pr-2">
                 {[
                     { time: "09:42:01", msg: "UNIT_ACTV: void-figure-01", type: "INFO" },
                     { time: "08:14:55", msg: "NEW_ALLOCATION: ORD-8892", type: "ACQUISITION" },
                     { time: "06:00:00", msg: "GEO_SYNC_COMPLETE", type: "SYSTEM" },
                     { time: "02:11:42", msg: "NEW_ALLOCATION: ORD-8891", type: "ACQUISITION" },
                     { time: "00:00:01", msg: "CYCLE_RESET", type: "SYSTEM" },
                 ].map((log, i) => (
                     <div key={i} className="flex gap-4 items-start border-b border-black/5 pb-3">
                         <span className="font-mono text-[9px] text-zinc-300 mt-0.5">{log.time}</span>
                         <div>
                             <span className="font-mono text-[9px] text-accent block font-bold">{log.type}</span>
                             <span className="font-mono text-[10px] text-zinc-500 block">{log.msg}</span>
                         </div>
                     </div>
                 ))}
             </div>
          </section>
      </div>
    </div>
  );
}
