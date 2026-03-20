"use client";

import { motion } from "framer-motion";
import { Activity, Database, Network, Cpu } from "lucide-react";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function StatusPage() {
  const { isCyberpunk } = useTheme();
  
  const systems = [
    { label: "FRONTEND_NODE", status: "OPERATIONAL", uptime: "99.9%", ping: "12ms" },
    { label: "DATA_LAKE_SYNC", status: "OPERATIONAL", uptime: "100%", ping: "45ms" },
    { label: "AUTH_GATEWAY", status: "OPERATIONAL", uptime: "99.9%", ping: "28ms" },
    { label: "EDGE_ROUTING", status: "OPERATIONAL", uptime: "99.9%", ping: "8ms" },
  ];

  return (
    <div className={`min-h-screen pt-32 pb-24 border-x max-w-7xl mx-auto transition-colors duration-700
      ${isCyberpunk ? "bg-[#050505] border-white/5" : "bg-white border-black/5"}`}>
      <div className="container mx-auto px-6 max-w-4xl">
        <header className={`mb-24 border-b pb-12 flex justify-between items-end ${isCyberpunk ? "border-white/10" : "border-black/5"}`}>
           <div>
             <span className="text-[10px] font-mono text-accent tracking-[0.4em] uppercase block mb-6 animate-pulse">TELEMETRY // LIVE</span>
             <h1 className={`text-5xl md:text-7xl font-semibold tracking-tight mb-4
               ${isCyberpunk ? "text-white" : "text-foreground text-outline"}`}>SYS_STATUS</h1>
             <p className={`text-sm font-mono uppercase tracking-widest leading-relaxed
               ${isCyberpunk ? "text-zinc-400" : "text-zinc-500"}`}>
                Global structural integrity and node performance
             </p>
           </div>
           <div className={`hidden md:flex items-center gap-4 border px-4 py-2 ${isCyberpunk ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"}`}>
              <Activity size={16} className="text-accent animate-pulse" />
              <div className="flex flex-col">
                 <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">ALL_SYSTEMS</span>
                 <span className="text-[11px] font-bold tracking-widest text-accent uppercase">NOMINAL</span>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 gap-4">
           {systems.map((sys, idx) => (
              <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.1 }}
                 className={`flex flex-col md:flex-row md:items-center justify-between p-6 border transition-all gap-6
                   ${isCyberpunk 
                     ? "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]" 
                     : "border-black/5 bg-black/[0.01] hover:bg-black/[0.03]"}`}
              >
                 <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-sm ${isCyberpunk ? "bg-white/5" : "bg-black/5"}`}>
                       {idx === 0 ? <Cpu size={16} className="text-zinc-400" /> : 
                        idx === 1 ? <Database size={16} className="text-zinc-400" /> :
                        idx === 2 ? <Network size={16} className="text-zinc-400" /> :
                        <Activity size={16} className="text-zinc-400" />}
                    </div>
                    <div>
                       <span className={`text-xs font-bold tracking-[0.2em] block ${isCyberpunk ? "text-white" : "text-foreground"}`}>{sys.label}</span>
                       <span className="text-[10px] font-mono text-zinc-500 tracking-widest mt-1 block">REGION: AP-NORTHEAST-1</span>
                    </div>
                 </div>

                 <div className="flex items-center gap-12 font-mono">
                    <div className="flex flex-col text-right">
                       <span className="text-[9px] text-zinc-600 tracking-widest">UPTIME</span>
                       <span className={`text-[11px] tracking-widest ${isCyberpunk ? "text-white" : "text-foreground"}`}>{sys.uptime}</span>
                    </div>
                    <div className="flex flex-col text-right">
                       <span className="text-[9px] text-zinc-600 tracking-widest">LATENCY</span>
                       <span className={`text-[11px] tracking-widest ${isCyberpunk ? "text-white" : "text-foreground"}`}>{sys.ping}</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-[120px] justify-end">
                       <span className="text-[10px] text-accent tracking-[0.2em]">{sys.status}</span>
                       <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-80" />
                    </div>
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
