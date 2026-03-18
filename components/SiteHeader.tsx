"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User, ShoppingCart, Shield } from "lucide-react";

export function SiteHeader() {
  const { data: session } = useSession();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#ffffff10] bg-[#000000cc] backdrop-blur-xl">
      <div className="container mx-auto h-16 px-6 flex items-center justify-between">
        
        {/* LOGO - Apple-style Minimal */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full" />
          </div>
          <span className="text-[13px] font-semibold tracking-tighter text-white uppercase">
            VOIDLAB
          </span>
        </Link>

        {/* NAVIGATION - Centered and Subtle */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/collections" className="text-[12px] font-medium text-zinc-400 hover:text-white transition-colors">
            COLLECTIONS
          </Link>
          <Link href="/about" className="text-[12px] font-medium text-zinc-400 hover:text-white transition-colors">
            ABOUT
          </Link>
          <Link href="/archive" className="text-[12px] font-medium text-zinc-400 hover:text-white transition-colors">
            ARCHIVE
          </Link>
        </nav>

        {/* ACTIONS - Utility icons */}
        <div className="flex items-center gap-5">
          {session ? (
            <div className="flex items-center gap-5">
              {(session.user as any)?.role === "admin" && (
                <Link 
                  href="/admin" 
                  className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white"
                  title="Admin Dashboard"
                >
                  <Shield size={16} />
                </Link>
              )}
              <Link 
                href="/account" 
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white"
                title="Account"
              >
                <User size={16} />
              </Link>
              <button 
                onClick={() => signOut()}
                className="text-[11px] font-medium text-zinc-500 hover:text-white transition-colors"
              >
                SIGN OUT
              </button>
            </div>
          ) : (
            <Link 
              href="/api/auth/signin" 
              className="text-[11px] font-medium text-zinc-400 hover:text-white transition-colors"
            >
              SIGN IN
            </Link>
          )}
          
          <Link 
            href="/cart" 
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white relative"
          >
            <ShoppingCart size={16} />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-white text-[8px] font-bold text-black rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}
