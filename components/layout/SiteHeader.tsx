"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User, ShoppingCart, Shield } from "lucide-react";
import { useCart } from "@/lib/contexts/CartContext";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function SiteHeader() {
  const { data: session } = useSession();
  const { toggleCart, itemsCount } = useCart();
  const { isCyberpunk } = useTheme();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 font-jost
      ${isCyberpunk
        ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        : "bg-background/70 backdrop-blur-xl border-foreground/5"
      }`}>
      <div className="container mx-auto h-20 px-6 flex items-center justify-between">
        
        {/* BRANDING */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <span className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${isCyberpunk ? "text-[#00f5d4] font-mono cyber-glow" : "text-foreground font-heading"}`}>
            {isCyberpunk ? "BASELAB.SYS" : "BaseLab"}
          </span>
        </Link>

        {/* NAVIGATION (hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-8 mr-8">
          {[
            { label: isCyberpunk ? "STORE" : "Shop", href: "/collections" },
            { label: isCyberpunk ? "INTEL" : "About", href: "/system" },
            { label: isCyberpunk ? "SPECS" : "Details", href: "/telemetry" },
            { label: isCyberpunk ? "COMMS" : "Support", href: "/comms" }
          ].map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className="relative group px-2 py-1"
            >
              <span className={`text-sm font-medium transition-colors tracking-wide ${isCyberpunk ? "text-[#00f5d4]/60 hover:text-[#00f5d4] font-mono" : "text-zinc-500 hover:text-foreground"}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <ThemeToggle />
          
          {session ? (
            <div className="flex items-center gap-4">
              {(session.user as any)?.role === "admin" && (
                <Link href="/admin" className={`p-2 transition-colors ${isCyberpunk ? "text-[#00f5d4]/60 hover:text-[#00f5d4]" : "text-zinc-500 hover:text-foreground"}`}>
                  <Shield size={18} />
                </Link>
              )}
              <Link href="/account" className={`p-0.5 transition-colors border rounded-full overflow-hidden w-8 h-8 flex items-center justify-center ${isCyberpunk ? "border-[#00f5d4]/30 bg-[#0d1117]" : "border-black/5 bg-muted"} shadow-sm`}>
                {session.user?.image ? (
                  <img src={session.user.image} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User size={16} className={isCyberpunk ? "text-[#00f5d4]" : "text-zinc-500"} />
                )}
              </Link>
              <button 
                onClick={() => signOut({ callbackUrl: '/' })}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${isCyberpunk ? "text-[#00f5d4]/60 hover:text-red-400 font-mono tracking-wider" : "text-zinc-500 hover:text-red-500 hover:bg-red-50"}`}
              >
                {isCyberpunk ? "EXIT" : "Sign Out"}
              </button>
              
              {/* Cart — only visible for logged in users */}
              <button 
                onClick={toggleCart}
                className={`relative p-2 transition-colors ${isCyberpunk ? "text-[#00f5d4]/60 hover:text-[#00f5d4]" : "text-zinc-500 hover:text-foreground"}`}
              >
                <ShoppingCart size={18} />
                {itemsCount > 0 && (
                  <span className={`absolute -top-1 -right-1 w-4 h-4 text-white text-[10px] font-bold rounded-full flex items-center justify-center ${isCyberpunk ? "bg-[#00f5d4] text-black" : "bg-accent"}`}>
                    {itemsCount}
                  </span>
                )}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <Link 
                href="/api/auth/signin" 
                className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${isCyberpunk ? "border border-[#00f5d4]/50 text-[#00f5d4] hover:bg-[#00f5d4]/10 font-mono tracking-wider rounded-none" : "text-white bg-foreground hover:bg-black"}`}
              >
                {isCyberpunk ? "CONNECT" : "Sign In"}
              </Link>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

