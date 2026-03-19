"use client";

import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { Cog, ShieldCheck, Truck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function TelemetryPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-48 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header HUD */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Zap size={14} className="text-accent" />
              <TechnicalLabel label="SYS_TELEMETRY" value="CORE_SPECS" />
            </div>
            <h1 className="text-5xl md:text-8xl font-heading tracking-[-0.05em] text-white uppercase">
              TECHNICAL <br />
              <span className="text-zinc-900 stroke-zinc-700">SPECIFICATIONS</span>
            </h1>
          </div>
          <div className="flex flex-col items-end gap-2">
            <TechnicalLabel label="LAST_CALIBRATION" value="2026.03.19" className="text-zinc-700" />
            <TechnicalLabel label="PROTOCOL_VER" value="V4.2.0" className="text-zinc-700 font-mono text-[9px]" />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Areas */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* 1. Material Logic */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <Cog size={16} className="text-accent" />
                <h2 className="text-xl font-heading tracking-tight text-white uppercase">MATERIAL_SCIENCE</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HudContainer className="p-6 bg-white/[0.01]">
                  <TechnicalLabel label="SUBSTRATE_01" value="HIGH-DENSITY_PLA" className="mb-4 text-accent" />
                  <p className="text-[11px] font-mono text-zinc-500 leading-relaxed uppercase">
                    A INDUSTRIAL-GRADE THERMOPLASTIC POLYMER DERIVED FROM RENEWABLE RESOURCES. ENGINEERED FOR STRUCTURAL INTEGRITY AND MATTE FINISH EXCELLENCE.
                  </p>
                </HudContainer>
                <HudContainer className="p-6 bg-white/[0.01]">
                  <TechnicalLabel label="SUBSTRATE_02" value="GEOPOLYMER_RESIN" className="mb-4 text-accent" />
                  <p className="text-[11px] font-mono text-zinc-500 leading-relaxed uppercase">
                    ADVANCED PHOTOPOLYMER COMPOSITES USED FOR HIGH-PRECISION GEOMETRY. PROVIDES ISO-GRADE SURFACE TOLERANCES COMPATIBLE WITH ARCHIVAL STORAGE.
                  </p>
                </HudContainer>
              </div>
            </section>

            {/* 2. Logistics Protocol (FAQ) */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <Truck size={16} className="text-accent" />
                <h2 className="text-xl font-heading tracking-tight text-white uppercase">LOGISTICS_SYNC (FAQ)</h2>
              </div>
              <div className="space-y-4">
                {[
                  { q: "TRANSIT_DURATION", a: "UNITS ARE TYPICALLY DISPATCHED WITHIN 48-72 HOURS OF ALLOCATION SUCCESS. GLOBAL SYNC ADDS 5-10 CYCLES." },
                  { q: "DEFRAGMENTATION_POLICY (RETURNS)", a: "UNITS MAY BE RE-INTEGRATED INTO THE VAULT WITHIN 14 CYCLES IF STRUCTURAL INTEGRITY IS UNCOMPROMISED." },
                  { q: "SECURE_HANDLING", a: "ALL SHIPMENTS ARE ENCAPSULATED IN PROTECTIVE HUD-GRADE MODULES TO PREVENT GEOMETRIC DRIFT DURING TRANSIT." }
                ].map((item, i) => (
                  <HudContainer key={i} className="p-6 border-white/5 hover:border-accent/10 transition-colors">
                    <h3 className="text-[10px] font-bold text-zinc-400 mb-3 tracking-widest uppercase">{item.q}</h3>
                    <p className="text-[11px] font-mono text-zinc-600 leading-relaxed uppercase">{item.a}</p>
                  </HudContainer>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Area: Live Order Lookup */}
          <aside className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <ShieldCheck size={16} className="text-zinc-500" />
                <h2 className="text-xl font-heading tracking-tight text-zinc-400 uppercase">ORDER_LOOKUP</h2>
              </div>
              
              <HudContainer className="p-8 bg-[#020202] border-accent/10 space-y-8">
                <div className="space-y-4">
                  <TechnicalLabel label="ID_VERIFICATION" className="text-zinc-600" />
                  <input 
                    type="text" 
                    placeholder="BATCH_REFERENCE_ID"
                    className="w-full bg-white/[0.02] border border-white/5 p-4 text-[10px] font-mono text-white focus:outline-none focus:border-accent transition-colors uppercase tracking-widest"
                  />
                  <button className="w-full btn-hud py-4 text-[9px]">
                    INITIALIZE_SCAN
                  </button>
                </div>
                <div className="p-4 border border-dashed border-white/5 text-center">
                   <p className="text-[8px] font-mono text-zinc-800 uppercase tracking-tighter">
                     ENTER YOUR ALLOCATION ID TO RETRIEVE REAL-TIME TELEMETRY DATA FROM THE VAULT.
                   </p>
                </div>
              </HudContainer>
            </div>

            <div className="p-6 bg-white/[0.01] border border-white/5">
              <TechnicalLabel label="WARRANTY_STATUS" value="LIFETIME_SYNC" className="text-zinc-700 text-[8px] mb-4" />
              <p className="text-[9px] font-mono text-zinc-800 leading-relaxed uppercase">
                YOUR GEOMETRIC STUDY IS PROTECTED BY THE UNIT_01 LIFETIME INTEGRITY PROTOCOL. ANY STRUCTURAL ANOMALIES SHOULD BE REPORTED VIA SECURE COMMS.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
