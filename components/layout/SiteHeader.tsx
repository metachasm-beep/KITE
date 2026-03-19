"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User, ShoppingCart, Shield, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/lib/contexts/CartContext";

export function SiteHeader() {
  const { data: session } = useSession();
  const { toggleCart, itemsCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto h-16 px-6 flex items-center justify-between text-foreground">
        
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
            <span className="text-[14px] font-bold tracking-[-0.05em] text-foreground uppercase group-hover:text-accent transition-colors">
              UNIT_01
            </span>
            <span className="text-[8px] font-mono text-zinc-400 tracking-widest uppercase -mt-1">
              DESIGN_STUDIO
            </span>
          </div>
        </Link>

        {/* NAVIGATION: User-friendly Labels */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "SHOP", href: "/collections" },
            { label: "ABOUT", href: "/system" },
            { label: "DETAILS", href: "/telemetry" },
            { label: "SUPPORT", href: "/comms" }
          ].map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className="relative group px-2 py-1"
            >
              <span className="text-[11px] font-bold text-zinc-400 group-hover:text-foreground transition-colors tracking-widest uppercase">
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

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            {session ? (
              <div className="flex items-center gap-4">
                {(session.user as any)?.role === "admin" && (
                  <Link href="/admin" className="p-2 text-zinc-400 hover:text-foreground transition-colors">
                    <Shield size={16} />
                  </Link>
                )}
                <Link href="/account" className="p-2 text-zinc-400 hover:text-foreground transition-colors border border-black/5 rounded-sm">
                  <User size={16} />
                </Link>
                <button 
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="p-1 px-3 text-[10px] tracking-widest uppercase font-mono text-zinc-400 hover:text-red-500 border border-black/5 bg-black/[0.02] hover:bg-black/[0.05] transition-colors"
                >
                  LOGOUT
                </button>
                
                {/* Cart only visible for logged in users */}
                <button 
                  onClick={toggleCart}
                  className="relative p-2 text-zinc-400 hover:text-foreground transition-colors"
                >
                  <ShoppingCart size={18} />
                  {itemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-[9px] font-bold rounded-full flex items-center justify-center font-mono">
                      {itemsCount}
                    </span>
                  )}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <Link 
                  href="/api/auth/signin" 
                  className="text-[10px] font-bold text-zinc-400 hover:text-accent transition-colors tracking-widest uppercase"
                >
                  [ SIGN_IN ]
                </Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}
