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
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-48 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Profile Command Center Header */}
        <header className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
          <div className="flex items-center gap-10">
            <HudContainer className="p-0 rounded-full w-24 h-24 border-accent/20 overflow-hidden relative">
              {user.image ? (
                <Image src={user.image} alt="Profile" fill className="object-cover opacity-80" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <User size={32} className="text-zinc-800" />
                </div>
              )}
              <div className="absolute inset-0 bg-accent/5 animate-pulse pointer-events-none" />
            </HudContainer>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Activity size={14} className="text-accent" />
                <TechnicalLabel label="AUTHORIZED_AGENT" value={`ID_${user.id.slice(-4)}`} className="font-bold" />
              </div>
              <h1 className="text-[44px] md:text-[64px] font-heading leading-none tracking-[-0.08em] uppercase">
                {user.name || "UNNAMED_ENTITY"}
              </h1>
              <TechnicalLabel label="ENCRYPTED_EMAIL" value={user.email} className="text-zinc-600" />
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 border-t border-white/5 pt-6 hidden md:flex">
             <TechnicalLabel label="SYS_RELAY" value="LINKED" className="text-accent" />
             <TechnicalLabel label="LAST_SYNC" value={new Date().toLocaleTimeString()} className="text-zinc-700 font-mono text-[9px]" />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <section className="lg:col-span-2 space-y-12">
            
            {/* Transaction Log */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Package size={16} className="text-zinc-500" />
                <h2 className="text-xl font-heading tracking-tight text-zinc-400 uppercase">TRANSACTION_LOG</h2>
              </div>

              <div className="space-y-3">
                {accountData.orders.length > 0 ? (
                  accountData.orders.map((order) => (
                    <Link key={order.id} href={`/account/orders/${order.id}`} className="block">
                      <HudContainer className="p-0 border-white/5 hover:border-accent/20 transition-all group overflow-hidden">
                        <div className="p-6 flex items-center justify-between bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors">
                        <div className="flex items-center gap-8">
                          <div className="space-y-1">
                            <TechnicalLabel label="BATCH_ID" className="text-zinc-700 text-[8px]" />
                            <span className="text-sm font-mono text-white tracking-widest">{order.id.slice(-8).toUpperCase()}</span>
                          </div>
                          <div className="space-y-1">
                            <TechnicalLabel label="DATE" className="text-zinc-700 text-[8px]" />
                            <span className="text-xs font-mono text-zinc-500 uppercase">{new Date(order.createdAt).toLocaleDateString()}</span>
                          </div>
                          <div className="space-y-1 hidden sm:block">
                            <TechnicalLabel label="QTY" className="text-zinc-700 text-[8px]" />
                            <span className="text-sm font-mono text-zinc-400 tracking-tighter">[{order.itemCount} UNITS]</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-12">
                           <div className="text-right space-y-1">
                              <TechnicalLabel label="STATUS" className="text-zinc-700 text-[8px] justify-end" />
                              <span className={`text-[10px] font-mono font-bold tracking-[0.2em] uppercase 
                                ${order.status === 'SHIPPED' || order.status === 'DELIVERED' ? 'text-accent' : 'text-zinc-600'}`}>
                                {order.status}
                              </span>
                           </div>
                           <div className="h-10 w-px bg-white/5" />
                           <div className="text-right">
                              <span className="text-xl font-mono text-white tracking-tighter">₹{order.totalAmount.toLocaleString()}</span>
                           </div>
                           <ChevronRight size={16} className="text-zinc-800 group-hover:text-accent transition-colors" />
                        </div>
                      </div>
                    </HudContainer>
                    </Link>
                  ))
                ) : (
                  <div className="p-12 border border-dashed border-white/5 bg-white/[0.01] flex flex-col items-center justify-center opacity-40">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-700">NO_TRANSACTION_RECORDS_FOUND</span>
                  </div>
                )}
              </div>
            </div>

            {/* Owned Objects - Design Studies */}
            <div className="space-y-8 opacity-30 cursor-not-allowed">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Activity size={16} className="text-zinc-800" />
                <h2 className="text-xl font-heading tracking-tight text-zinc-800 uppercase">STUDY_OWNERSHIP_PROTOCOL</h2>
              </div>
              <div className="h-32 border border-white/5 bg-white/[0.01] flex items-center justify-center">
                 <TechnicalLabel label="INITIALIZING_STUDY_MAPPING..." className="text-zinc-800" />
              </div>
            </div>
          </section>

          {/* Sidebar Area */}
          <aside className="space-y-12">
             <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <CreditCard size={16} className="text-zinc-500" />
                  <h2 className="text-xl font-heading tracking-tight text-zinc-400 uppercase">TELEMETRY_SUBS</h2>
                </div>
                
                <HudContainer className="p-6 bg-[#020202] border-white/5">
                   <div className="space-y-6">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-mono tracking-tighter text-zinc-500 uppercase">DROP_LIST_SYNC</span>
                         <span className="text-[9px] font-mono text-accent">ACTIVE</span>
                      </div>
                      <p className="text-[11px] font-mono text-zinc-600 leading-relaxed uppercase">
                         YOU ARE CURRENTLY SYNCHRONIZED WITH ALL FUTURE GEOMETRIC STUDIES AND PHYSICAL RELEASES.
                      </p>
                      <button className="text-[9px] font-mono text-zinc-800 hover:text-white transition-colors underline underline-offset-4 tracking-[0.2em] uppercase">
                         TERMINATE_SYNC
                      </button>
                   </div>
                </HudContainer>
             </div>

             <div className="space-y-6">
                <SystemButton className="w-full py-4 text-[10px]" onClick={() => {}}>
                  COMMUNICATE_WITH_HQ
                </SystemButton>
                <p className="text-[7px] font-mono text-zinc-800 tracking-widest leading-loose uppercase text-center px-4">
                   ALL DATA TRANSMISSIONS ARE ENCRYPTED VIA END-TO-END SPECULATIVE PROTOCOL. 0x{Math.random().toString(16).slice(2, 10).toUpperCase()}
                </p>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
