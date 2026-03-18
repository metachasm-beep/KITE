import Link from "next/link";
import { getArtifacts } from "@/lib/cms";

export default async function CollectionsPage() {
  const artifacts = await getArtifacts();

  return (
    <main className="min-h-screen bg-black px-6 py-24">
      <div className="container mx-auto">
        <header className="mb-20">
          <span className="text-[10px] font-mono tracking-[0.4em] text-accent uppercase mb-4 block">
            AVAILABLE_OBJECTS // 001
          </span>
          <h1 className="text-5xl md:text-7xl font-heading tracking-tighter uppercase">
            COLLECT<span className="text-zinc-600">IONS</span>
          </h1>
          <p className="font-mono text-zinc-500 text-xs tracking-[0.2em] mt-6 max-w-lg leading-loose uppercase">
            Browse currently active manufacturing runs alongside the archived architectural prototypes.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artifacts.map((item) => (
            <Link key={item.id} href={`/collections/${item.slug}`} className="group block">
              <div className="aspect-square bg-[#050505] border border-white/5 relative overflow-hidden transition-all duration-500 group-hover:border-accent">
                {/* Simulated Object Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-100 group-hover:bg-accent/5 transition-all duration-500">
                  <div className="w-1/2 h-1/2 border border-white/20 group-hover:border-accent/40 rotate-45 transition-transform duration-1000" />
                </div>

                {/* Information Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
                    {item.series}
                  </span>
                  <h2 className="text-2xl font-heading tracking-tighter text-white uppercase flex justify-between items-end">
                    {item.title}
                    <span className="text-xs font-mono text-accent tracking-widest">{item.price}</span>
                  </h2>
                </div>
                
                {item.status === "SOLD_OUT" && (
                  <div className="absolute top-6 right-6">
                    <span className="text-[9px] font-mono border border-zinc-700 text-zinc-500 px-3 py-1 uppercase tracking-widest backdrop-blur-sm">
                      [ DEPLETED ]
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
