export default function AdminOverview() {
  const KPIS = [
    { label: "PENDING_ORDERS", value: 14 },
    { label: "REVENUE_TODAY", value: "₹45,990" },
    { label: "AVAILABLE_ARTIFACTS", value: 120 },
    { label: "SYS_UPTIME", value: "STABLE" },
  ];

  return (
    <div className="space-y-12">
      <header className="border-b border-white/5 pb-6">
        <h1 className="text-4xl font-heading tracking-tighter text-white">SYS_OVERVIEW</h1>
        <p className="font-mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase mt-2">
          Global metrics and fulfillment status
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPIS.map((kpi) => (
          <div key={kpi.label} className="bg-[#0A0A0A] border border-white/10 p-6 flex flex-col justify-between h-32 hover:border-accent/40 transition-colors">
            <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
              {kpi.label}
            </span>
            <span className="text-3xl font-heading text-white">
              {kpi.value}
            </span>
          </div>
        ))}
      </div>

      <section className="bg-[#0A0A0A] border border-white/10 p-8 h-64 flex items-center justify-center">
        <span className="font-mono text-zinc-700 text-xs tracking-[0.2em] uppercase">
          [ DATA_STREAM_PENDING ]
        </span>
      </section>
    </div>
  );
}
