import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

const ADMIN_NAV = [
  { label: "OVERVIEW", href: "/admin" },
  { label: "INVENTORY", href: "/admin/inventory" },
  { label: "ORDERS", href: "/admin/orders" },
  { label: "LOGISTICS", href: "/admin/logistics" },
  { label: "COUPONS", href: "/admin/coupons" },
  { label: "USERS", href: "/admin/users" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).role !== "admin") {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-black/5 flex flex-col pt-10">
        <div className="px-6 mb-12">
          <span className="text-xl font-heading tracking-tighter text-accent uppercase block">
            UNIT_01<br />
            <span className="text-foreground">MISSION_CONTROL</span>
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {ADMIN_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-xs font-mono tracking-widest text-zinc-400 hover:text-accent hover:bg-muted uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-6 text-[10px] font-mono tracking-widest text-zinc-400">
          LOGGED IN AS<br />
          <span className="text-foreground">{session.user?.email}</span>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 overflow-auto bg-muted/30">
        <div className="p-12">
          {children}
        </div>
      </main>
    </div>
  );
}
