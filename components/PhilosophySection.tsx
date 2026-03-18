"use client";

const SPECS = [
  { label: "MATERIAL", value: "PLA COMPOSITE / TOUGH MATTE" },
  { label: "FINISH", value: "MATTE BLACK #000" },
  { label: "FABRICATION", value: "LAYERED DEPOSITION" },
  { label: "EDITION", value: "OPEN SYSTEM" },
];

export function PhilosophySection() {
  return (
    <section className="py-24 px-6 bg-[#030303] border-y border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-accent text-[10px] font-bold tracking-[0.5em] mb-8 block uppercase">
              OUR_MANIFESTO
            </span>
            <h2 className="text-4xl md:text-6xl font-heading tracking-tighter mb-8 max-w-lg">
              DESIGNED AS OBJECTS, <span className="text-zinc-400">NOT TOYS.</span>
            </h2>
            <p className="text-zinc-600 text-sm md:text-lg font-body leading-relaxed max-w-xl mb-12 uppercase tracking-widest">
              Manufactured through layered fabrication systems and built specifically for display. Each series 
              is a progression of forms captured from speculative futures and realized today.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {SPECS.map((spec) => (
              <div key={spec.label} className="p-6 border border-white/5 bg-black/40 hover:border-accent/40 transition-colors">
                <span className="text-[9px] font-mono text-zinc-700 tracking-[0.2em] block mb-4 uppercase">
                  {spec.label}
                </span>
                <span className="text-xs font-bold font-mono tracking-widest text-zinc-300 uppercase">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
