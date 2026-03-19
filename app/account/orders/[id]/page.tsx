import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getOrderDetail } from "@/lib/services/account";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { MoveLeft, Package, MapPin, Clock, CreditCard } from "lucide-react";
import { use } from "react";

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getServerSession(authOptions);
  const resolvedParams = await params;

  if (!session || !session.user?.email) {
    redirect("/");
  }

  const order = await getOrderDetail(resolvedParams.id, session.user.email);
  if (!order) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-48 px-6">
      <div className="container mx-auto max-w-4xl">
        
        <Link 
          href="/account"
          className="flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] text-zinc-600 uppercase hover:text-white transition-colors mb-16"
        >
          <MoveLeft size={14} />
          <span>RETURN_TO_COMMAND_CENTER</span>
        </Link>

        <header className="mb-16 border-b border-white/5 pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
             <div className="flex items-center gap-3">
                <Package size={16} className="text-accent" />
                <TechnicalLabel label="ACQUISITION_ID" value={order.id.toUpperCase()} className="font-bold" />
             </div>
             <h1 className="text-[32px] md:text-[48px] font-heading leading-none tracking-tight uppercase">
                STATUS: <span className="text-accent">{order.status}</span>
             </h1>
             <TechnicalLabel label="INITIALIZED_ON" value={new Date(order.createdAt).toLocaleString()} className="text-zinc-500" />
          </div>
          
          <div className="text-right">
             <TechnicalLabel label="TOTAL_YIELD" className="text-zinc-700 mb-1 justify-end" />
             <span className="text-4xl font-mono text-white tracking-tighter">₹{order.totalAmount.toLocaleString()}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Timeline & Items */}
          <div className="space-y-12">
            <section className="space-y-6">
               <div className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <Clock size={14} className="text-zinc-500" />
                  <TechnicalLabel label="ACQUISITION_TIMELINE" className="text-zinc-400" />
               </div>
               
               <div className="space-y-6 pl-4 border-l border-white/5 ml-2">
                  {order.timeline.map((event: any, i: number) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[21px] top-1 w-2h-2 bg-accent rounded-full border-4 border-black" />
                      <div className="space-y-1">
                         <span className="text-[10px] font-mono text-accent uppercase tracking-widest">{event.status}</span>
                         <p className="text-[11px] font-mono text-zinc-500 uppercase">{event.note || "SYSTEM_UPDATE"}</p>
                         <span className="text-[8px] font-mono text-zinc-700 uppercase">{new Date(event.timestamp).toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
               </div>
            </section>

            <section className="space-y-6">
               <div className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <Package size={14} className="text-zinc-500" />
                  <TechnicalLabel label="ALLOCATED_UNITS" className="text-zinc-400" />
               </div>
               
               <div className="space-y-4">
                  {order.items.map((item: any) => (
                    <HudContainer key={item.id} className="p-4 flex gap-4 bg-white/[0.01]">
                       <div className="w-16 h-16 border border-white/5 flex items-center justify-center p-2 bg-black">
                          <div className="w-2 h-2 bg-zinc-800 rounded-full animate-pulse" />
                       </div>
                       <div className="flex-1 flex justify-between">
                          <div className="space-y-1">
                             <h4 className="text-xs font-bold text-white uppercase">{item.title}</h4>
                             <TechnicalLabel label="QTY" value={item.quantity.toString()} className="text-[9px] text-zinc-600" />
                          </div>
                          <span className="text-xs font-mono text-zinc-400">₹{item.price.toLocaleString()}</span>
                       </div>
                    </HudContainer>
                  ))}
               </div>
            </section>
          </div>

          {/* Logistics & Payment */}
          <div className="space-y-12">
             <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-2">
                   <MapPin size={14} className="text-zinc-500" />
                   <TechnicalLabel label="LOGISTICS_DESTINATION" className="text-zinc-400" />
                </div>
                
                <HudContainer className="p-6 bg-black border-accent/10">
                   <div className="space-y-4 font-mono text-[11px] text-zinc-400 uppercase leading-relaxed">
                      <p className="text-white font-bold">{session.user.name}</p>
                      <p>{order.shippingAddress.line1}</p>
                      <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}</p>
                      <p>{order.shippingAddress.country}</p>
                   </div>
                </HudContainer>
             </section>

             <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-2">
                   <CreditCard size={14} className="text-zinc-500" />
                   <TechnicalLabel label="SETTLEMENT_METHOD" className="text-zinc-400" />
                </div>
                
                <div className="p-6 border border-white/5 bg-white/[0.01] flex justify-between items-center">
                   <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">DIGITAL_CURRENCY_SETTLEMENT</span>
                   <span className="text-[10px] font-mono text-accent uppercase font-bold tracking-widest">CONFIRMED</span>
                </div>
             </section>

             <div className="pt-12">
                <p className="text-[7px] font-mono text-zinc-800 tracking-widest leading-loose uppercase text-center">
                   UNIT_01_SECURE_PROTOCOL // {Math.random().toString(16).slice(2, 10).toUpperCase()}
                </p>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
