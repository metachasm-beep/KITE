import Link from "next/link";
import { getArtifacts } from "@/lib/cms";

export default async function CollectionsPage() {
  const artifacts = await getArtifacts();

  return (
    <main className="min-h-screen bg-black pt-24 pb-48">
      <div className="container mx-auto px-6">
        
        {/* Apple-style Page Header */}
        <header className="max-w-4xl mb-32">
          <span className="text-[14px] font-bold text-zinc-500 tracking-[0.2em] mb-4 block uppercase leading-loose">
            SERIES_CATALOG
          </span>
          <h1 className="text-[48px] md:text-[84px] font-heading tracking-tighter text-white mb-12 uppercase leading-[0.9]">
            The Artifact <br />
            <span className="text-zinc-700">Collection</span>
          </h1>
          <p className="text-[17px] md:text-[22px] font-medium text-zinc-400 max-w-2xl leading-relaxed">
            Every object is a physical manifestation of high-level geometric theory. Engineered with precision, manufactured for eternity.
          </p>
        </header>

        {/* The Grid - Clean, minimalist, and precise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1">
          {artifacts.map((artifact) => (
            <Link 
              key={artifact.slug}
              href={`/collections/${artifact.slug}`}
              className="group relative block bg-[#050505] border border-white/5 hover:border-white/10 transition-all aspect-[4/5] p-10 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Meta Info */}
              <div className="flex items-start justify-between z-10">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-700 group-hover:text-accent transition-colors uppercase">
                    DROP_SERIES // 01
                  </span>
                  <h3 className="text-[18px] md:text-[22px] font-bold text-white tracking-widest group-hover:tracking-[0.15em] transition-all uppercase">
                    {artifact.title}
                  </h3>
                </div>
                <span className="text-[12px] font-bold text-white tracking-widest">
                  {artifact.price}
                </span>
              </div>

              {/* Visual Placeholder for Artifact - Ultra Clean */}
              <div className="relative flex-1 flex items-center justify-center pointer-events-none">
                 <div className="w-1/2 aspect-square rounded-full border border-white/5 group-hover:border-white/10 transition-colors flex items-center justify-center">
                    <div className="w-4 h-4 bg-zinc-900 rounded-full animate-pulse transition-transform group-hover:scale-110" />
                 </div>
              </div>

              {/* Bottom Status / Category */}
              <div className="flex items-end justify-between z-10">
                <span className={`text-[9px] font-bold px-3 py-1 border rounded-full tracking-widest uppercase transition-colors 
                  ${artifact.status === 'AVAILABLE' ? 
                    'border-zinc-800 text-zinc-500 group-hover:border-white group-hover:text-white' : 
                    'border-red-900/20 text-red-500/40'}`}>
                  {artifact.status}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-900 group-hover:text-zinc-400 transition-colors">
                  SECURE_BUY_ENCRYPTED
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
