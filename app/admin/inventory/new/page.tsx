"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createArtifact } from "@/app/actions/inventory";

export default function NewArtifactPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    series: "SERIES 01 // ORIGIN",
    description: "",
    price: "",
    status: "LOCALIZED",
    specs: [{ label: "WEIGHT", value: "" }, { label: "MATERIAL", value: "HIGH-DENSITY PLA" }]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await createArtifact(formData);
    if (res.success) {
      router.push("/admin/inventory");
    } else {
      alert("Error creating allocation.");
      setLoading(false);
    }
  };

  const updateSpec = (index: number, key: "label" | "value", val: string) => {
    const newSpecs = [...formData.specs];
    newSpecs[index][key] = val;
    setFormData({ ...formData, specs: newSpecs });
  };

  return (
    <div className="max-w-2xl">
      <header className="border-b border-white/10 pb-6 mb-12">
        <h1 className="text-4xl font-heading tracking-[-0.05em] text-white">ALLOCATE_NEW_UNIT</h1>
        <p className="font-mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase mt-2">
          Initialize a new geometric study into the database
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8 font-mono">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] tracking-widest text-zinc-500 uppercase">NOMENCLATURE (TITLE)</label>
            <input required type="text" className="w-full bg-white/[0.02] border border-white/10 p-4 text-xs text-white focus:outline-none focus:border-accent transition-colors" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. UNIT_01 // OMEGA" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] tracking-widest text-zinc-500 uppercase">SYS_SLUG (URL)</label>
            <input required type="text" className="w-full bg-white/[0.02] border border-white/10 p-4 text-xs text-white focus:outline-none focus:border-accent transition-colors" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} placeholder="e.g. unit-01-omega" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] tracking-widest text-zinc-500 uppercase">TELEMETRY DATA (DESCRIPTION)</label>
          <textarea required rows={4} className="w-full bg-white/[0.02] border border-white/10 p-4 text-xs text-white focus:outline-none focus:border-accent transition-colors" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] tracking-widest text-zinc-500 uppercase">YIELD_OUTPUT (PRICE)</label>
            <input required type="text" className="w-full bg-white/[0.02] border border-white/10 p-4 text-xs text-white focus:outline-none focus:border-accent transition-colors" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} placeholder="e.g. ₹2,999" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] tracking-widest text-zinc-500 uppercase">SERIES</label>
            <input required type="text" className="w-full bg-white/[0.02] border border-white/10 p-4 text-xs text-white focus:outline-none focus:border-accent transition-colors" value={formData.series} onChange={e => setFormData({...formData, series: e.target.value})} />
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 space-y-4">
           <h3 className="text-[10px] tracking-widest text-accent uppercase">TECHNICAL_SPECS</h3>
           {formData.specs.map((spec, i) => (
              <div key={i} className="flex gap-4">
                 <input type="text" className="w-1/3 bg-white/[0.01] border border-white/5 p-3 text-xs text-zinc-400 focus:outline-none focus:border-white/20" value={spec.label} onChange={e => updateSpec(i, "label", e.target.value)} />
                 <input type="text" className="flex-1 bg-white/[0.01] border border-white/5 p-3 text-xs text-white focus:outline-none focus:border-white/20" value={spec.value} onChange={e => updateSpec(i, "value", e.target.value)} />
              </div>
           ))}
           <button type="button" onClick={() => setFormData({...formData, specs: [...formData.specs, {label:"", value:""}]})} className="text-[9px] tracking-widest text-zinc-500 hover:text-white uppercase transition-colors">
              + ADD_SPEC_LINE
           </button>
        </div>

        <div className="pt-12 flex justify-end gap-6">
          <button type="button" onClick={() => router.back()} className="text-[10px] tracking-widest text-zinc-500 hover:text-white uppercase transition-colors">
            ABORT
          </button>
          <button disabled={loading} type="submit" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold tracking-[0.2em] text-[10px] uppercase hover:bg-accent hover:border-accent hover:text-black transition-colors">
            {loading ? "INITIALIZING..." : "EXECUTE_ALLOCATION"}
          </button>
        </div>
      </form>
    </div>
  );
}
