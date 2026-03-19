import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAccountData } from "@/lib/services/account";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";
import { User, Activity, Package, CreditCard, ChevronRight } from "lucide-react";

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    redirect("/");
  }

  const accountData = await getAccountData(session.user.email);
  if (!accountData) {
    redirect("/");
  }

  const user = accountData.profile;

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-48 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Profile Command Center Header */}
        <header className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
          <div className="flex items-center gap-10">
            <HudContainer className="p-0 rounded-full w-24 h-24 border-black/5 overflow-hidden relative bg-muted shadow-sm">
              {user.image ? (
                <Image src={user.image} alt="Profile" fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User size={32} className="text-zinc-300" />
                </div>
              )}
            </HudContainer>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Activity size={14} className="text-accent" />
                <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-bold">Authorized Agent: ID_{user.id.slice(-4)}</span>
              </div>
              <h1 className="text-[44px] md:text-[64px] font-heading leading-none tracking-[-0.08em] uppercase text-foreground">
                {user.name || "UNNAMED_ENTITY"}
              </h1>
              <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest">{user.email}</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 border-t border-black/5 pt-6 hidden md:flex">
             <span className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold">Sys Relay: Linked</span>
             <span className="text-zinc-300 font-mono text-[9px] uppercase">Last Sync: {new Date().toLocaleTimeString()}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <section className="lg:col-span-2 space-y-12">
            
            {/* Transaction Log */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                <Package size={16} className="text-zinc-400" />
                <h2 className="text-xl font-heading tracking-tight text-zinc-500 uppercase">Transaction Log</h2>
              </div>

              <div className="space-y-3">
                {accountData.orders.length > 0 ? (
                  accountData.orders.map((order) => (
                    <Link key={order.id} href={`/account/orders/${order.id}`} className="block">
                      <HudContainer className="p-0 border-black/5 hover:border-accent/20 transition-all group overflow-hidden bg-white shadow-sm">
                        <div className="p-6 flex items-center justify-between group-hover:bg-accent/[0.01] transition-colors">
                        <div className="flex items-center gap-8">
                          <div className="space-y-1">
                            <span className="text-zinc-400 font-mono text-[8px] uppercase font-bold block">Batch ID</span>
                            <span className="text-sm font-mono text-foreground tracking-widest font-bold">{order.id.slice(-8).toUpperCase()}</span>
                          </div>
                          <div className="space-y-1">
                            <span className="text-zinc-400 font-mono text-[8px] uppercase font-bold block">Date</span>
                            <span className="text-xs font-mono text-zinc-500 uppercase">{new Date(order.createdAt).toLocaleDateString()}</span>
                          </div>
                          <div className="space-y-1 hidden sm:block">
                            <span className="text-zinc-400 font-mono text-[8px] uppercase font-bold block">Items</span>
                            <span className="text-sm font-mono text-zinc-400 tracking-tighter">[{order.itemCount} Units]</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-12">
                           <div className="text-right space-y-1">
                              <span className="text-zinc-400 font-mono text-[8px] uppercase font-bold block">Status</span>
                              <span className={`text-[10px] font-mono font-bold tracking-[0.2em] uppercase 
                                ${order.status === 'SHIPPED' || order.status === 'DELIVERED' ? 'text-accent' : 'text-zinc-400'}`}>
                                {order.status}
                              </span>
                           </div>
                           <div className="h-10 w-px bg-black/5" />
                           <div className="text-right">
                              <span className="text-xl font-mono text-foreground tracking-tighter font-bold">₹{order.totalAmount.toLocaleString()}</span>
                           </div>
                           <ChevronRight size={16} className="text-zinc-200 group-hover:text-accent transition-colors" />
                        </div>
                      </div>
                    </HudContainer>
                    </Link>
                  ))
                ) : (
                  <div className="p-12 border border-dashed border-black/5 bg-muted/30 flex flex-col items-center justify-center opacity-40 rounded-[2rem]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">No Transaction Records Found</span>
                  </div>
                )}
              </div>
            </div>

            {/* Owned Objects - Design Studies */}
            <div className="space-y-8 opacity-20 filter grayscale">
              <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                <Activity size={16} className="text-zinc-400" />
                <h2 className="text-xl font-heading tracking-tight text-zinc-400 uppercase">Study Ownership Protocol</h2>
              </div>
              <div className="h-32 border border-black/5 bg-muted/50 rounded-[2rem] flex items-center justify-center">
                 <span className="text-[10px] font-mono tracking-widest text-zinc-400">Initializing Study Mapping...</span>
              </div>
            </div>
          </section>

          {/* Sidebar Area */}
          <aside className="space-y-12">
             <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                  <CreditCard size={16} className="text-zinc-400" />
                  <h2 className="text-xl font-heading tracking-tight text-zinc-500 uppercase">Telemetry Subs</h2>
                </div>
                
                <HudContainer className="p-6 bg-white border-black/5 shadow-sm">
                   <div className="space-y-6">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-mono tracking-tighter text-zinc-400 uppercase font-bold">Drop List Sync</span>
                         <span className="text-[9px] font-mono text-accent font-bold">Active</span>
                      </div>
                      <p className="text-[11px] font-mono text-zinc-500 leading-relaxed uppercase">
                         You are currently synchronized with all future geometric studies and physical releases.
                      </p>
                      <button className="text-[9px] font-mono text-zinc-300 hover:text-accent transition-colors underline underline-offset-4 tracking-[0.2em] uppercase">
                         Terminate Sync
                      </button>
                   </div>
                </HudContainer>
             </div>

             <div className="space-y-6">
                <SystemButton className="w-full py-6 text-[10px]" onClick={() => {}}>
                  COMMUNICATE WITH HQ
                </SystemButton>
                <p className="text-[7px] font-mono text-zinc-300 tracking-widest leading-loose uppercase text-center px-4">
                   All data transmissions are encrypted via end-to-end speculative protocol. 0x{Math.random().toString(16).slice(2, 10).toUpperCase()}
                </p>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
