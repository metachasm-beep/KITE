"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User, ShoppingCart, Shield, Activity } from "lucide-react";
import { motion } from "framer-motion";

export function SiteHeader() {
  const { data: session } = useSession();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto h-16 px-6 flex items-center justify-between">
        
        {/* BRANDING: UNIT_01 */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-6 h-6 border border-accent/40 flex items-center justify-center overflow-hidden">
            <motion.div 
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 bg-accent/20 w-full"
            />
            <span className="text-[10px] font-bold text-accent z-10">01</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold tracking-[-0.05em] text-white uppercase group-hover:text-accent transition-colors">
              UNIT_01
            </span>
            <span className="text-[8px] font-mono text-zinc-600 tracking-widest uppercase -mt-1">
              DESIGN_PROTOCOL
            </span>
          </div>
        </Link>

        {/* NAVIGATION: Technical HUD Style */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "ARCHIVE", href: "/collections" },
            { label: "LOGIC", href: "/system" },
            { label: "STATUS", href: "/system" }
          ].map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className="relative group px-2 py-1"
            >
              <span className="text-[11px] font-bold text-zinc-500 group-hover:text-white transition-colors tracking-widest uppercase">
                {item.label}
              </span>
              <motion.div 
                className="absolute bottom-0 left-0 h-[1px] bg-accent"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </Link>
          ))}
        </nav>

        {/* TELEMETRY & ACTIONS */}
        <div className="flex items-center gap-6">
          {/* Heartbeat / Telemetry */}
          <div className="hidden lg:flex items-center gap-3 border-l border-white/10 pl-6 h-8">
            <div className="flex flex-col items-end">
              <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-tighter">DATA_SYNC</span>
              <span className="text-[9px] font-mono text-accent uppercase leading-none">STABLE</span>
            </div>
            <Activity size={14} className="text-accent animate-pulse" />
          </div>

          <div className="flex items-center gap-4">
            {session ? (
              <div className="flex items-center gap-4">
                {(session.user as any)?.role === "admin" && (
                  <Link href="/admin" className="p-2 text-zinc-500 hover:text-white transition-colors">
                    <Shield size={16} />
                  </Link>
                )}
                <Link href="/account" className="p-2 text-zinc-500 hover:text-white transition-colors border border-white/5 rounded-sm">
                  <User size={16} />
                </Link>
                <button 
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="p-1 px-3 text-[10px] tracking-widest uppercase font-mono text-zinc-500 hover:text-red-500 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  SIGN_OUT
                </button>
              </div>
            ) : (
              <Link 
                href="/api/auth/signin" 
                className="text-[10px] font-bold text-zinc-400 hover:text-accent transition-colors tracking-widest uppercase"
              >
                [ LOGIN ]
              </Link>
            )}
            
            <Link href="/cart" className="relative p-2 text-zinc-500 hover:text-white transition-colors">
              <ShoppingCart size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}
