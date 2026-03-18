import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      
      {/* Current Drop Preview Section (Placeholder) */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-zinc-700 text-[10px] font-mono tracking-[0.4em] mb-4 block uppercase leading-loose">
                CURRENT_DROP // 01
              </span>
              <h2 className="text-4xl md:text-7xl font-heading tracking-tighter text-white uppercase max-w-lg">
                VOID<span className="text-accent">FIGURE</span>
              </h2>
            </div>
            <button className="px-12 py-5 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-accent hover:text-white transition-all">
              VIEW_ALL_OBJECTS
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1">
            <div className="bg-zinc-900 aspect-square flex items-center justify-center border border-white/5 hover:border-accent/40 transition-colors group">
              <span className="text-[10px] font-mono tracking-widest text-zinc-700 group-hover:text-accent uppercase">
                OBJECT_01 // PREVIEW
              </span>
            </div>
            <div className="bg-zinc-900 aspect-square flex items-center justify-center border border-white/5 hover:border-accent/40 transition-colors group">
              <span className="text-[10px] font-mono tracking-widest text-zinc-700 group-hover:text-accent uppercase">
                OBJECT_02 // PREVIEW
              </span>
            </div>
            <div className="bg-zinc-900 aspect-square flex items-center justify-center border border-white/5 hover:border-accent/40 transition-colors group">
              <span className="text-[10px] font-mono tracking-widest text-zinc-700 group-hover:text-accent uppercase">
                OBJECT_03 // PREVIEW
              </span>
            </div>
          </div>
        </div>
      </section>

      <PhilosophySection />
    </main>
  );
}
