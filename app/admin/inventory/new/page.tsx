"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, X, ImageIcon, Loader2 } from "lucide-react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";

export default function NewArtifactPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    series: "SERIES 01 // ORIGIN",
    description: "",
    price: "",
    status: "AVAILABLE",
    specs: [{ label: "WEIGHT", value: "" }, { label: "MATERIAL", value: "HIGH-DENSITY PLA" }]
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = "";
    if (imageFile) {
      const uploadData = new FormData();
      uploadData.append("file", imageFile);
      const uploadRes = await uploadArtifactImage(uploadData);
      if (uploadRes.success) {
        imageUrl = uploadRes.publicUrl || "";
      } else {
        alert("UPLOAD_ERR: " + uploadRes.error);
        setLoading(false);
        return;
      }
    }

    const res = await createArtifact({ ...formData, imageUrl });
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
        <TechnicalLabel label="SYS_PROTOCOL" value="INITIALIZATION" className="mt-2 text-zinc-500" />
      </header>

      <form onSubmit={handleSubmit} className="space-y-8 font-mono">
        {/* IMAGE UPLOAD HUD */}
        <div className="space-y-4">
          <TechnicalLabel label="MEDIA_VAULT" value="ASSET_INITIALIZATION" className="text-zinc-500" />
          <HudContainer className="relative group p-0 border-none">
            {imagePreview ? (
              <div className="relative aspect-video w-full border border-accent/20 bg-black overflow-hidden">
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    type="button" 
                    onClick={removeImage}
                    className="p-3 bg-black/60 border border-white/10 text-white hover:text-red-500 hover:border-red-500/40 transition-all group/btn"
                  >
                    <X size={20} className="group-hover/btn:rotate-90 transition-transform" />
                  </button>
                </div>
                <TechnicalLabel 
                  label="PREVIEW_ACTIVE" 
                  value={`0xCC${Math.floor(Math.random() * 999)}`} 
                  className="absolute top-4 left-4 text-accent text-[8px]" 
                />
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center aspect-video w-full border border-dashed border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-accent/40 transition-all cursor-pointer group">
                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                <Upload size={24} className="text-zinc-600 group-hover:text-accent transition-colors mb-4" />
                <TechnicalLabel label="UPLOAD_CORE_ASSET" className="text-zinc-600 group-hover:text-white" />
                <span className="text-[8px] text-zinc-800 mt-2 uppercase tracking-tighter">
                  (DRAG_OR_CLICK_TO_INITIALIZE)
                </span>
              </label>
            )}
          </HudContainer>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <TechnicalLabel label="NOMENCLATURE" value="(TITLE)" className="text-zinc-500 text-[10px]" />
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
          <SystemButton disabled={loading} type="submit" className="px-12 py-4 text-[10px]">
            {loading ? "INITIALIZING..." : "EXECUTE_ALLOCATION"}
          </SystemButton>
        </div>
      </form>
    </div>
  );
}
