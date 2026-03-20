"use client";

import React from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import Link from "next/link";
import { LogOut } from "lucide-react";

const ADMIN_NAV = [
  { label: "OVERVIEW", href: "/admin" },
  { label: "INVENTORY", href: "/admin/inventory" },
  { label: "ORDERS", href: "/admin/orders" },
  { label: "LOGISTICS", href: "/admin/logistics" },
  { label: "COUPONS", href: "/admin/coupons" },
  { label: "USERS", href: "/admin/users" },
];

export function AdminThemeWrapper({ 
  children, 
  userEmail 
}: { 
  children: React.ReactNode;
  userEmail?: string | null;
}) {
  const { isCyberpunk } = useTheme();

  return (
    <div className={`flex min-h-screen transition-colors duration-700
      ${isCyberpunk ? "bg-black" : "bg-white"}`}>
      
      {/* Sidebar */}
      <aside className={`w-64 border-r flex flex-col pt-10 transition-colors duration-700
        ${isCyberpunk ? "border-[#00f5d4]/10 bg-[#080808]" : "border-black/5 bg-white"}`}>
        
        <div className="px-6 mb-12">
          <span className={`text-xl font-heading tracking-tighter uppercase block
            ${isCyberpunk ? "text-[#00f5d4] cyber-glow" : "text-accent"}`}>
            UNIT_01<br />
            <span className={`${isCyberpunk ? "text-white" : "text-foreground"}`}>MISSION_CONTROL</span>
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {ADMIN_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 text-xs font-mono tracking-widest uppercase transition-all duration-300
                ${isCyberpunk 
                  ? "text-[#00f5d4]/40 hover:text-[#00f5d4] hover:bg-[#00f5d4]/5" 
                  : "text-zinc-400 hover:text-accent hover:bg-muted"}`}
            >
              {isCyberpunk ? `// ${link.label}` : link.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-6 space-y-4">
          <div className="text-[10px] font-mono tracking-widest text-zinc-400">
            LOGGED IN AS<br />
            <span className={isCyberpunk ? "text-[#00f5d4]/60" : "text-foreground"}>{userEmail}</span>
          </div>
          
          <Link 
            href="/"
            className={`flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase transition-colors
              ${isCyberpunk ? "text-red-500/60 hover:text-red-500" : "text-zinc-400 hover:text-red-600"}`}
          >
            <LogOut size={12} />
            Exit Control
          </Link>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className={`flex-1 overflow-auto transition-colors duration-700 
        ${isCyberpunk ? "bg-black" : "bg-muted/30"}`}>
        <div className="p-12">
          {children}
        </div>
      </main>
    </div>
  );
}
