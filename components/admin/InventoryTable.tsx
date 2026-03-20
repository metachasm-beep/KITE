"use client";

import { useState } from "react";
import { Artifact } from "@/lib/cms";
import { deleteArtifact, toggleArtifactStatus } from "@/app/actions/inventory";
import { Loader2, Trash2, Zap, LayoutGrid, Package } from "lucide-react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { useTheme } from "@/lib/contexts/ThemeContext";

export function InventoryTable({ initialArtifacts }: { initialArtifacts: Artifact[] }) {
  const { isCyberpunk } = useTheme();
  const [artifacts, setArtifacts] = useState(initialArtifacts || []);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("CONFIRM_DELETE: Are you sure you want to permanently delete this allocation?")) return;
    setLoadingId(id);
    try {
      const res = await deleteArtifact(id);
      if (res.success) {
        setArtifacts(artifacts.filter(a => a.id !== id));
      } else {
        alert("SYS_ERR: Deletion failed.");
      }
    } catch (e) {
      alert("FATAL_ERR: Protocol violation.");
    }
    setLoadingId(null);
  };

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    setLoadingId(id);
    try {
      const res = await toggleArtifactStatus(id, currentStatus);
      if (res.success) {
        setArtifacts(artifacts.map(a => 
          a.id === id ? { ...a, status: currentStatus === "SOLD_OUT" ? "AVAILABLE" : "SOLD_OUT" } : a
        ));
      }
    } catch (e) {
      console.error(e);
    }
    setLoadingId(null);
  };

  return (
    <div className="space-y-4">
      <div className={`flex items-center gap-4 mb-8 ${isCyberpunk ? "text-[#00f5d4]/40" : "text-stone-400"}`}>
        <Package size={20} />
        <span className="text-xs font-bold tracking-[0.3em] uppercase font-jost">ALLOCATED_UNITS_DATABASE</span>
      </div>

      <HudContainer className={`p-0 overflow-hidden font-jost border-0 ${isCyberpunk ? "bg-black/40 border-white/10" : "bg-white/50 backdrop-blur-xl border-foreground/5 shadow-xl shadow-stone-200/50"}`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className={`${isCyberpunk ? "bg-black" : "bg-stone-50"} border-b ${isCyberpunk ? "border-white/10" : "border-stone-200"}`}>
              <tr>
                <th className="p-5 font-bold text-[10px] tracking-widest uppercase text-stone-400">ID</th>
                <th className="p-5 font-bold text-[10px] tracking-widest uppercase text-stone-400">NOMENCLATURE</th>
                <th className="p-5 font-bold text-[10px] tracking-widest uppercase text-stone-400">SERIES / PRICE</th>
                <th className="p-5 font-bold text-[10px] tracking-widest uppercase text-stone-400 text-right">STATE</th>
                <th className="p-5 font-bold text-[10px] tracking-widest uppercase text-stone-400 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isCyberpunk ? "divide-white/5" : "divide-stone-100"}`}>
              {artifacts.length > 0 ? artifacts.map((item) => (
                <tr key={item.id} className={`group transition-all duration-300 ${loadingId === item.id ? 'opacity-50' : isCyberpunk ? 'hover:bg-[#00f5d4]/5' : 'hover:bg-accent/5'}`}>
                  <td className="p-5">
                    <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded bg-stone-100 ${isCyberpunk ? "bg-white/5 text-[#00f5d4]/60" : "text-stone-400"}`}>
                      {item.id?.slice(-6) || "N/A"}
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="flex flex-col">
                      <span className={`text-sm font-bold tracking-tight ${isCyberpunk ? "text-white" : "text-foreground font-heading"}`}>
                        {item.title}
                      </span>
                      <span className={`text-[10px] uppercase tracking-widest ${isCyberpunk ? "text-[#00f5d4]/40" : "text-stone-400"}`}>
                        {item.slug}
                      </span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex flex-col">
                      <span className={`text-xs ${isCyberpunk ? "text-white/60" : "text-stone-500 font-medium"}`}>
                        {item.series}
                      </span>
                      <span className={`text-xs font-bold ${isCyberpunk ? "text-[#00f5d4]" : "text-stone-900"}`}>
                        {item.price}
                      </span>
                    </div>
                  </td>
                  <td className="p-5 text-right">
                    <button 
                      onClick={() => handleToggleStatus(item.id, item.status)}
                      disabled={loadingId === item.id}
                      className={`text-[10px] font-bold tracking-tighter uppercase px-3 py-1 rounded-full border transition-all
                        ${item.status === "SOLD_OUT" 
                          ? "bg-red-50 text-red-500 border-red-100 hover:bg-red-100" 
                          : "bg-green-50 text-green-600 border-green-100 hover:bg-green-100"
                        }
                        ${isCyberpunk ? "!bg-transparent !border-[#00f5d4]/20 !text-[#00f5d4] hover:!bg-[#00f5d4]/10" : ""}`}
                    >
                      {item.status === "AVAILABLE" ? "IN_STOCK" : "SOLD_OUT"}
                    </button>
                  </td>
                  <td className="p-5 text-right">
                    <button 
                      onClick={() => handleDelete(item.id)}
                      disabled={loadingId === item.id}
                      className={`p-2 rounded-full transition-colors ${isCyberpunk ? "text-[#00f5d4]/40 hover:text-red-400 hover:bg-red-400/10" : "text-stone-400 hover:text-red-500 hover:bg-red-50"}`}
                    >
                      {loadingId === item.id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="p-20 text-center">
                    <div className="flex flex-col items-center gap-4 opacity-40">
                      <Zap size={32} />
                      <span className="text-xs font-bold tracking-widest uppercase">ZERO_UNITS_DETECTED</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </HudContainer>
    </div>
  );
}
