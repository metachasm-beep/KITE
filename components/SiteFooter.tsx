"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-black py-24 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-20">
          
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-4 h-4 bg-white rounded-full" />
              <span className="text-[14px] font-bold text-white tracking-widest uppercase">VOIDLAB</span>
            </Link>
            <p className="text-[13px] text-zinc-500 leading-relaxed mb-10">
              Defining the artifacts of tomorrow through the materials of today. Designed in the void, crafted for life.
            </p>
            <div className="flex items-center gap-6">
              {['INSTAGRAM', 'TWITTER', 'ARE.NA'].map((social) => (
                <a key={social} href="#" className="text-[10px] font-bold text-zinc-600 hover:text-white transition-colors tracking-widest">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
            <div className="space-y-6">
              <span className="text-[11px] font-bold text-zinc-400 tracking-widest uppercase">CATALOG</span>
              <nav className="flex flex-col gap-4">
                {['SERIES 01', 'SERIES 02', 'LATEST DROP'].map((item) => (
                  <Link key={item} href="/collections" className="text-[11px] text-zinc-600 hover:text-white transition-colors uppercase">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="space-y-6">
              <span className="text-[11px] font-bold text-zinc-400 tracking-widest uppercase">SUPPORT</span>
              <nav className="flex flex-col gap-4">
                {['SHIPPING', 'RETURNS', 'PRIVACY'].map((item) => (
                  <Link key={item} href="#" className="text-[11px] text-zinc-600 hover:text-white transition-colors uppercase">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <span className="text-[11px] font-bold text-zinc-400 tracking-widest uppercase">UPDATES</span>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="EMAIL_ADDRESS" 
                  className="w-full bg-transparent border-b border-white/10 pb-4 text-[11px] text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800"
                />
                <button className="absolute right-0 top-0 text-white hover:translate-x-1 transition-transform">
                  <MoveRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono tracking-widest text-zinc-700">
          <span>© 2024 VOIDLAB INDUSTRIES. ALL RIGHTS RESERVED.</span>
          <span>EST. IN THE VOID // BORN IN THE MACHINE</span>
        </div>
      </div>
    </footer>
  );
}
