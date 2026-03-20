"use client";

import Link from "next/link";
import { Terminal, ShieldCheck, MapPin, Send } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-muted py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-24">
          
          <div className="max-w-xs space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-semibold tracking-tight text-foreground transition-colors">
                BaseLab
              </span>
            </Link>
            
            <p className="text-sm text-zinc-500 leading-relaxed">
              Premium essentials designed for the modern lifestyle. Clean, durable, and minimal.
            </p>

            <div className="flex items-center gap-6">
              {['Instagram', 'Twitter', 'Contact'].map((social) => (
                <a key={social} href="#" className="text-sm font-medium text-zinc-400 hover:text-foreground transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="space-y-6">
              <span className="text-sm font-semibold text-foreground">Shop</span>
              <nav className="flex flex-col gap-4">
                {[
                  { label: "All Products", href: "/collections" },
                  { label: "New Arrivals", href: "/collections" },
                  { label: "Best Sellers", href: "/collections" }
                ].map((item) => (
                  <Link key={item.label} href={item.href} className="text-sm text-zinc-500 hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="space-y-6">
              <span className="text-sm font-semibold text-foreground">Support</span>
              <nav className="flex flex-col gap-4">
                {[
                  { label: "FAQ", href: "/comms" },
                  { label: "Returns", href: "/comms" },
                  { label: "Privacy Policy", href: "/comms" }
                ].map((item) => (
                  <Link key={item.label} href={item.href} className="text-sm text-zinc-500 hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <span className="text-sm font-semibold text-foreground">Newsletter</span>
              <p className="text-sm text-zinc-500">Subscribe for updates on new drops.</p>
              <div className="relative group mt-4">
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full bg-transparent border-b border-black/10 pb-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-zinc-400"
                />
                <button className="absolute right-0 top-0 text-zinc-400 hover:text-foreground transition-colors">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS */}
        <div className="mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
               <MapPin size={14} />
               <span>Designed in Bangalore</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
               <ShieldCheck size={14} />
               <span>Secure Checkout</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-xs text-zinc-400">© 2026 BaseLab Inc. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
