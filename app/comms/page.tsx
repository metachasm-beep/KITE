"use client";

import { useState } from "react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";
import { Send, Terminal, Wifi } from "lucide-react";
import { motion } from "framer-motion";

export default function CommsPage() {
  const [status, setStatus] = useState<"IDLE" | "TRANSMITTING" | "SUCCESS">("IDLE");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("TRANSMITTING");
    setTimeout(() => setStatus("SUCCESS"), 2000);
  };

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-48 px-6 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header HUD */}
        <header className="mb-24 flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
            <TechnicalLabel label="COMMS_ESTABLISHED" value="SECURE_LINE" />
          </div>
          <h1 className="text-5xl md:text-8xl font-heading tracking-[-0.05em] text-white uppercase">
            MISSION <br />
            <span className="text-zinc-900 stroke-zinc-700">COMMUNICATIONS</span>
          </h1>
          <p className="max-w-xl text-xs font-mono text-zinc-500 uppercase tracking-widest leading-relaxed">
            SECURE RELAY FOR CRITICAL INQUIRIES, PROTOCOL FEEDBACK, AND GEOMETRIC ANOMALY REPORTING. ALL TRANSMISSIONS ARE ENCRYPTED.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Transmission Status Sidebar */}
          <aside className="lg:col-span-2 space-y-8">
            <HudContainer className="p-8 bg-black border-white/5 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <TechnicalLabel label="SIGNAL_STRENGTH" className="text-zinc-600" />
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <div key={i} className={`w-1 h-3 ${i < 5 ? 'bg-accent' : 'bg-zinc-900'}`} />)}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <TechnicalLabel label="LATENCY" className="text-zinc-600" />
                  <span className="text-[10px] font-mono text-accent uppercase">12MS // STABLE</span>
                </div>
              </div>

              <div className="h-px bg-white/5" />

              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <Wifi size={14} className="text-accent animate-pulse" />
                    <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">ACTIVE_ENCRYPTION</span>
                 </div>
                 <p className="text-[8px] font-mono text-zinc-700 leading-relaxed uppercase">
                   AES-256 BIT ROTATION PROTOCOL ACTIVATED. YOUR IDENTITY IS PROTECTED BY THE UNIT_01 SECURE VAULT.
                 </p>
              </div>
            </HudContainer>

            <div className="p-6 bg-white/[0.01] border border-white/5 hidden lg:block">
              <div className="flex items-center gap-3 mb-4">
                <Terminal size={14} className="text-zinc-800" />
                <TechnicalLabel label="SYSTEM_LOGS" className="text-zinc-800" />
              </div>
              <div className="space-y-2 font-mono text-[7px] text-zinc-800 uppercase leading-none">
                <p>[20:03:12] RELAY_INITIALIZED</p>
                <p>[20:03:13] HANDSHAKE_SUCCESS</p>
                <p>[20:03:14] BUFFER_READY</p>
              </div>
            </div>
          </aside>

          {/* Contact Form HUD */}
          <div className="lg:col-span-3">
            <HudContainer className="p-8 md:p-12 bg-black border-accent/10 relative overflow-hidden">
               {status === "SUCCESS" ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="flex flex-col items-center justify-center py-24 text-center space-y-8"
                 >
                    <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center text-accent shadow-[0_0_20px_rgba(0,242,255,0.15)]">
                       <Send size={24} />
                    </div>
                    <div className="space-y-2">
                       <TechnicalLabel label="TRANSMISSION_COMPLETE" className="text-accent justify-center" />
                       <h3 className="text-3xl font-heading text-white uppercase">SUCCESSFUL_RELAY</h3>
                    </div>
                    <button onClick={() => setStatus("IDLE")} className="text-[10px] font-mono text-zinc-600 hover:text-white uppercase tracking-widest underline underline-offset-8">
                       NEW_TRANSMISSION
                    </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="space-y-6">
                      <div className="space-y-2">
                        <TechnicalLabel label="AGENT_NOMENCLATURE" value="(NAME)" className="text-zinc-500" />
                        <input required type="text" className="w-full bg-white/[0.01] border border-white/5 p-4 text-xs text-white focus:outline-none focus:border-accent transition-colors uppercase font-mono" placeholder="AGENT_NAME" />
                      </div>
                      <div className="space-y-2">
                        <TechnicalLabel label="SECURE_RELAY_ADDRESS" value="(EMAIL)" className="text-zinc-500" />
                        <input required type="email" className="w-full bg-white/[0.01] border border-white/5 p-4 text-xs text-white focus:outline-none focus:border-accent transition-colors uppercase font-mono" placeholder="AGENT_EMAIL" />
                      </div>
                      <div className="space-y-2">
                        <TechnicalLabel label="MISSION_INTEL" value="(MESSAGE)" className="text-zinc-500" />
                        <textarea required rows={5} className="w-full bg-white/[0.01] border border-white/5 p-4 text-xs text-white focus:outline-none focus:border-accent transition-colors uppercase font-mono resize-none" placeholder="TRANSMIT_YOUR_MESSAGE_HERE..." />
                      </div>
                   </div>

                   <SystemButton disabled={status === "TRANSMITTING"} type="submit" className="w-full py-6 flex items-center justify-center gap-4">
                     {status === "TRANSMITTING" ? "TRANSMITTING..." : "INITIALIZE_RELAY"}
                     <Send size={14} className={status === "TRANSMITTING" ? "animate-pulse" : ""} />
                   </SystemButton>
                 </form>
               )}
            </HudContainer>
          </div>

        </div>
      </div>
    </main>
  );
}
