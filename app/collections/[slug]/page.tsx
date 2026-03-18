import { getArtifactBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";
import Link from "next/link";

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
    <main className="min-h-[85vh] bg-black text-white flex flex-col md:flex-row border-y border-white/5">
      {/* 3D Visualizer Placeholder Pane */}
      <section className="flex-1 min-h-[50vh] bg-[#020202] border-r border-white/5 relative flex items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_60%)]" />
        
        {/* Placeholder structural "artifact" geometry line-art */}
        <div className="w-[300px] h-[300px] border-[0.5px] border-accent/40 rotate-[35deg] shadow-[0_0_80px_rgba(139,92,246,0.1)] relative z-10 transition-transform duration-1000 hover:rotate-0 flex items-center justify-center">
          <div className="w-1/2 h-1/2 border-[0.5px] border-white/20 -rotate-45" />
        </div>

        <div className="absolute top-6 left-6 flex flex-col gap-1 text-[8px] font-mono tracking-widest text-zinc-600 uppercase">
          <span>DIM_SCALE: 1:1</span>
          <span>X: 120 / Y: 40 / Z: 40</span>
        </div>
      </section>

      {/* Specifications & Actions Pane */}
      <section className="w-full md:w-[450px] lg:w-[600px] p-12 md:p-20 flex flex-col justify-center">
        <Link 
          href="/collections"
          className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase hover:text-white transition-colors block mb-12"
        >
          &lt; BACK_TO_ARCHIVE
        </Link>
        
        <span className="text-[10px] font-mono tracking-[0.4em] text-accent uppercase mb-4 block">
          {artifact.series}
        </span>
        <h1 className="text-4xl lg:text-5xl font-heading tracking-tighter uppercase mb-6 leading-none">
          {artifact.title}
        </h1>
        
        <p className="font-mono text-zinc-400 text-xs tracking-[0.2em] leading-loose mb-12 uppercase">
          {artifact.description}
        </p>

        {/* Spec Grid */}
        <div className="border border-white/10 mb-12">
          {artifact.specs.map((spec, index) => (
            <div key={spec.label} className={`flex justify-between p-4 ${index !== artifact.specs.length - 1 ? "border-b border-white/5" : ""}`}>
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                {spec.label}
              </span>
              <span className="text-xs font-mono tracking-widest text-zinc-200 uppercase text-right">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-end justify-between mb-8">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">RETAIL_VALUE</span>
          <span className="text-2xl font-mono text-white tracking-widest">{artifact.price}</span>
        </div>

        <button 
          className={`w-full py-6 font-mono font-bold tracking-[0.3em] text-xs uppercase transition-all shadow-lg
            ${artifact.status === "SOLD_OUT" ? "bg-zinc-900 text-zinc-600 cursor-not-allowed border border-white/5" : "bg-accent text-white hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"}`}
          disabled={artifact.status === "SOLD_OUT"}
        >
          {artifact.status === "SOLD_OUT" ? "[ DEPLETED ]" : "[ INIT_PURCHASE_SEQUENCE ]"}
        </button>
      </section>
    </main>
  );
}
