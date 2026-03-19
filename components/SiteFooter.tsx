"use client";

import Link from "next/link";
import { Terminal, ShieldCheck, MapPin, Send } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#050505] py-24 px-6 border-t border-white/5 relative overflow-hidden">
      {/* HUD Accents */}
      <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-accent/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-20 bg-gradient-to-b from-accent/20 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-24">
          
          <div className="max-w-md space-y-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-5 h-5 border border-accent/40 flex items-center justify-center">
                <div className="w-1 h-1 bg-accent animate-ping" />
              </div>
              <span className="text-[16px] font-bold text-white tracking-widest uppercase">UNIT_01</span>
            </Link>
            
            <p className="text-[13px] text-zinc-600 leading-relaxed font-mono uppercase tracking-tight">
              [ SYSTEM_ETHOS ] <br />
              DEFINING THE ARCHITECTURE OF PHYSICAL GEOMETRY. DESIGNED IN THE VOID. MANUFACTURED IN THE DARK.
            </p>

            <div className="flex items-center gap-8">
              {['INSTA', 'X_TWTR', 'ARE.NA'].map((social) => (
                <a key={social} href="#" className="text-[10px] font-bold text-zinc-700 hover:text-accent transition-colors tracking-[0.3em] uppercase">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-32">
            <div className="space-y-8">
              <span className="text-[11px] font-bold text-accent tracking-[0.4em] uppercase">U.01_INDEX</span>
              <nav className="flex flex-col gap-4">
                {['ARCHIVE', 'PROTOCOL', 'THE_LOGIC'].map((item) => (
                  <Link key={item} href="/collections" className="text-[11px] text-zinc-600 hover:text-white transition-colors uppercase tracking-widest">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="space-y-8">
              <span className="text-[11px] font-bold text-zinc-500 tracking-[0.4em] uppercase">SUPPORT_LOG</span>
              <nav className="flex flex-col gap-4">
                {['LOGISTICS', 'RETURNS', 'PRIVACY_v1.0'].map((item) => (
                  <Link key={item} href="#" className="text-[11px] text-zinc-600 hover:text-white transition-colors uppercase tracking-widest">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-8 col-span-2 md:col-span-1">
              <span className="text-[11px] font-bold text-zinc-500 tracking-[0.4em] uppercase">COMMS_LINK</span>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="SYNC@UNIT_01.XYZ" 
                  className="w-full bg-transparent border-b border-white/5 pb-4 text-[11px] text-white focus:outline-none focus:border-accent transition-colors placeholder:text-zinc-800 font-mono"
                />
                <button className="absolute right-0 top-0 text-accent hover:translate-x-1 transition-transform">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-700">
               <MapPin size={12} className="text-accent" />
               <span className="uppercase tracking-widest">HEADQUARTERS // IND_BLR</span>
            </div>
            <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-700">
               <ShieldCheck size={12} className="text-accent" />
               <span className="uppercase tracking-widest">ENCRYPTED_SSL</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-[9px] font-mono tracking-widest text-zinc-800">© 2024 UNIT_01 PROTOCOL // ALL_SYSTEMS_GO</span>
            <div className="flex gap-1">
               {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-accent/20" />)}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
