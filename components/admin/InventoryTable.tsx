"use client";

import { useState } from "react";
import { Artifact } from "@/lib/cms";
import { deleteArtifact, toggleArtifactStatus } from "@/app/actions/inventory";
import { Loader2 } from "lucide-react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";

export function InventoryTable({ initialArtifacts }: { initialArtifacts: Artifact[] }) {
  const [artifacts, setArtifacts] = useState(initialArtifacts);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("CONFIRM_DELETE: Are you sure you want to permanently delete this allocation?")) return;
    setLoadingId(id);
    const res = await deleteArtifact(id);
    if (res.success) {
      setArtifacts(artifacts.filter(a => a.id !== id));
    } else {
      alert("SYS_ERR: Deletion failed.");
    }
    setLoadingId(null);
  };

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    setLoadingId(id);
    const res = await toggleArtifactStatus(id, currentStatus);
    if (res.success) {
      setArtifacts(artifacts.map(a => 
        a.id === id ? { ...a, status: currentStatus === "SOLD_OUT" ? "AVAILABLE" : "SOLD_OUT" } : a
      ));
    }
    setLoadingId(null);
  };

  return (
    <HudContainer className="p-0 border-white/10 bg-white/[0.02] overflow-hidden">
      <table className="w-full text-left font-mono">
        <thead className="bg-black border-b border-white/10">
          <tr>
            <th className="p-4 font-normal"><TechnicalLabel label="UNIT_ID" className="text-zinc-500" /></th>
            <th className="p-4 font-normal"><TechnicalLabel label="NOMENCLATURE" className="text-zinc-500" /></th>
            <th className="p-4 font-normal"><TechnicalLabel label="SERIES" className="text-zinc-500" /></th>
            <th className="p-4 font-normal"><TechnicalLabel label="YIELD" className="text-zinc-500" /></th>
            <th className="p-4 font-normal text-right"><TechnicalLabel label="STATE" className="text-zinc-500 justify-end" /></th>
            <th className="p-4 font-normal text-right"><TechnicalLabel label="ACTION" className="text-zinc-500 justify-end" /></th>
          </tr>
        </thead>
        <tbody className="text-xs text-zinc-300">
          {artifacts.map((item) => (
            <tr key={item.id} className={`border-b border-white/5 transition-colors group ${loadingId === item.id ? 'opacity-50' : 'hover:bg-white/5'}`}>
              <td className="p-4 text-[10px] text-zinc-500 tracking-widest">{item.id.slice(-6)}</td>
              <td className="p-4 font-bold text-white uppercase tracking-tight">{item.title}</td>
              <td className="p-4 text-[11px] text-zinc-400">{item.series}</td>
              <td className="p-4 text-[11px] text-zinc-400">{item.price}</td>
              <td className="p-4 text-right">
                <button 
                  onClick={() => handleToggleStatus(item.id, item.status)}
                  disabled={loadingId === item.id}
                  className={`text-[10px] tracking-widest uppercase hover:underline ${item.status === "SOLD_OUT" ? "text-red-500/80" : "text-accent"}`}
                >
                  [{item.status === "AVAILABLE" ? "LOCALIZED" : "DE-FRAGMENTED"}]
                </button>
              </td>
              <td className="p-4 text-right space-x-4">
                <button 
                  onClick={() => handleDelete(item.id)}
                  disabled={loadingId === item.id}
                  className="text-[10px] tracking-widest text-zinc-500 uppercase hover:text-red-500 transition-colors"
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {artifacts.length === 0 && (
        <div className="p-8 text-center">
          <TechnicalLabel label="CATALOG_EMPTY" className="text-zinc-600 justify-center" />
        </div>
      )}
    </HudContainer>
  );
}
