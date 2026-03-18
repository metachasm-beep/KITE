"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV_LINKS = [
  { label: "COLLECTIONS", href: "/collections" },
  { label: "COMMUNITY", href: "/community" },
  { label: "SYSTEM", href: "/archive" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const isAdmin = (session?.user as any)?.role === "admin";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center space-x-2">
          <span className="text-2xl font-heading tracking-tighter transition-colors group-hover:text-accent">
            VOID<span className="text-accent group-hover:text-white">LAB</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[10px] font-bold tracking-[0.3em] transition-all hover:text-accent",
                pathname === link.href ? "text-accent" : "text-zinc-600"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth Zone */}
        <div className="flex items-center space-x-4">
          <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.5)]" />

          {status === "loading" ? (
            <span className="text-[9px] font-mono text-zinc-700 tracking-[0.2em] uppercase animate-pulse">
              VERIFYING...
            </span>
          ) : session ? (
            <div className="flex items-center gap-4">
              {isAdmin && (
                <Link
                  href="/admin"
                  className="text-[9px] font-bold font-mono tracking-[0.2em] uppercase text-accent border border-accent/30 px-2 py-1 hover:bg-accent hover:text-white transition-all"
                >
                  [ADMIN]
                </Link>
              )}
              <Link href="/account" className="flex items-center gap-2 group">
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt="User"
                    width={28}
                    height={28}
                    className="rounded-full border border-white/10 group-hover:border-accent/40 transition-colors"
                  />
                ) : null}
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-zinc-400 group-hover:text-white transition-colors hidden sm:inline">
                  {session.user?.name?.split(" ")[0] || "USER"}
                </span>
              </Link>
              <button
                onClick={() => signOut()}
                className="text-[9px] font-mono tracking-[0.2em] uppercase text-zinc-600 hover:text-white transition-colors"
              >
                [LOG_OUT]
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="text-[9px] font-mono tracking-[0.2em] uppercase text-zinc-500 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 transition-all"
            >
              [SIGN_IN]
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
