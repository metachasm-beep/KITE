"use client";

import Link from "next/link";
import { Terminal, ShieldCheck, MapPin, Send, Zap } from "lucide-react";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface SiteFooterProps {
  minimal?: boolean;
}

export function SiteFooter({ minimal = false }: SiteFooterProps) {
  const { isCyberpunk } = useTheme();

  if (minimal) {
    return (
      <footer className={`w-full py-6 px-6 border-t transition-colors duration-700 backdrop-blur-sm z-30
        ${isCyberpunk ? "bg-black/40 border-accent/10" : "bg-white/40 border-stone-100"}`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
             <Link href="/" className={`text-sm font-bold tracking-tighter transition-colors ${isCyberpunk ? "text-accent cyber-glow" : "text-foreground"}`}>
               BASELAB
             </Link>
             <div className={`hidden md:flex gap-4 text-[9px] font-mono uppercase tracking-[0.2em] ${isCyberpunk ? "text-accent/30" : "text-stone-400"}`}>
               <Link href="/collections" className="hover:text-accent transition-colors">Catalog</Link>
               <Link href="/comms" className="hover:text-accent transition-colors">Comms</Link>
               <Link href="/archive" className="hover:text-accent transition-colors">Archive</Link>
             </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className={`flex items-center gap-2 text-[9px] tracking-[0.2em] font-mono uppercase ${isCyberpunk ? "text-accent/20" : "text-stone-300"}`}>
               {isCyberpunk ? <Terminal size={10} /> : <MapPin size={10} />}
               <span>BL-2026</span>
            </div>
            <span className={`text-[9px] font-mono tracking-[0.2em] uppercase ${isCyberpunk ? "text-accent/20" : "text-stone-300"}`}>
              © 2026 TURTLE LABS
            </span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={`py-24 px-6 relative overflow-hidden transition-colors duration-700 border-t
      ${isCyberpunk ? "bg-black border-[#00f5d4]/10" : "bg-[#FAFAF9] border-stone-100"}`}>
      
      {isCyberpunk && (
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      )}

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-24">
          
          <div className="max-w-xs space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <span className={`text-2xl font-heading tracking-tighter transition-colors
                ${isCyberpunk ? "text-[#00f5d4] cyber-glow" : "text-foreground"}`}>
                BASELAB
              </span>
            </Link>
            
            <p className={`text-sm leading-relaxed font-jost
              ${isCyberpunk ? "text-[#00f5d4]/60 font-mono uppercase text-xs tracking-wider" : "text-stone-500"}`}>
              {isCyberpunk 
                ? "UNIT_01 :: ARCHIVAL RECONSTRUCTION LAB. PROBING THE FOLD FOR SPATIAL ECHOES."
                : "Premium hardware essentials designed by Turtle Labs. Bridging architectural form with everyday utility."}
            </p>

            <div className="space-y-3 pt-2">
               <div className="flex flex-col gap-2">
                  <a href="mailto:aditya@turtlelabs.co.in" className={`text-xs font-mono transition-colors flex items-center gap-2
                    ${isCyberpunk ? "text-[#00f5d4]/40 hover:text-[#00f5d4]" : "text-stone-400 hover:text-foreground"}`}>
                    <span className="opacity-50">//</span> aditya@turtlelabs.co.in
                  </a>
                  <a href="tel:8600391678" className={`text-xs font-mono transition-colors flex items-center gap-2
                    ${isCyberpunk ? "text-[#00f5d4]/40 hover:text-[#00f5d4]" : "text-stone-400 hover:text-foreground"}`}>
                    <span className="opacity-50">//</span> +91 8600391678
                  </a>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="space-y-6">
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase font-jost
                ${isCyberpunk ? "text-[#00f5d4]/30" : "text-stone-400"}`}>Catalog</span>
              <nav className="flex flex-col gap-4">
                {[
                  { label: isCyberpunk ? "ACTIVE_HULLS" : "Active Units", href: "/collections" },
                  { label: isCyberpunk ? "NEURAL_FRAGMENTS" : "Fragments", href: "/archive" }
                ].map((item) => (
                  <Link key={item.label} href={item.href} className={`text-sm transition-colors font-jost
                    ${isCyberpunk ? "text-[#00f5d4]/60 hover:text-[#00f5d4] font-mono uppercase text-xs" : "text-stone-500 hover:text-foreground"}`}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="space-y-6">
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase font-jost
                ${isCyberpunk ? "text-[#00f5d4]/30" : "text-stone-400"}`}>Governance</span>
              <nav className="flex flex-col gap-4">
                {[
                  { label: "Logistics", href: "/comms" },
                  { label: "Returns", href: "/comms" }
                ].map((item) => (
                  <Link key={item.label} href={item.href} className={`text-sm transition-colors font-jost
                    ${isCyberpunk ? "text-[#00f5d4]/60 hover:text-[#00f5d4] font-mono uppercase text-xs" : "text-stone-500 hover:text-foreground"}`}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase font-jost
                ${isCyberpunk ? "text-[#00f5d4]/30" : "text-stone-400"}`}>Intel</span>
              <p className={`text-sm font-jost leading-relaxed
                ${isCyberpunk ? "text-[#00f5d4]/40 font-mono text-xs uppercase" : "text-stone-500"}`}>
                Subscribe for status updates.
              </p>
              <div className="relative group mt-6">
                <input 
                  type="email" 
                  placeholder="name@nexus.com" 
                  className={`w-full bg-transparent border-b pb-3 text-sm transition-all placeholder:text-stone-300 font-jost focus:outline-none
                    ${isCyberpunk ? "border-[#00f5d4]/20 text-[#00f5d4] focus:border-[#00f5d4]" : "border-stone-200 text-foreground focus:border-foreground"}`}
                />
                <button className={`absolute right-0 top-0 transition-colors
                  ${isCyberpunk ? "text-[#00f5d4]/40 hover:text-[#00f5d4]" : "text-stone-400 hover:text-foreground"}`}>
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className={`mt-32 pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-8
          ${isCyberpunk ? "border-[#00f5d4]/10" : "border-stone-100"}`}>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className={`flex items-center gap-2 text-[9px] tracking-[0.25em] font-mono uppercase
              ${isCyberpunk ? "text-[#00f5d4]/30" : "text-stone-400"}`}>
               {isCyberpunk ? <Terminal size={12} /> : <MapPin size={12} />}
               <span>Designed in Bangalore // 2026</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className={`text-[9px] font-mono tracking-[0.25em] uppercase
              ${isCyberpunk ? "text-[#00f5d4]/20" : "text-stone-300"}`}>
              © 2026 TURTLE LABS PVT LTD
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
