import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getOrderDetail } from "@/lib/services/account";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { MoveLeft, Package, MapPin, Clock, CreditCard, Activity } from "lucide-react";
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

  const address = order.shippingAddress as any;

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-48 px-6">
      <div className="container mx-auto max-w-4xl">
        
        <Link 
          href="/account"
          className="flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] text-zinc-400 uppercase hover:text-accent transition-colors mb-16"
        >
          <MoveLeft size={14} />
          <span>Return to Dashboard</span>
        </Link>

        <header className="mb-16 border-b border-black/5 pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
             <div className="flex items-center gap-3">
                <Package size={16} className="text-accent" />
                <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-bold">Acquisition ID: {order.id.toUpperCase()}</span>
             </div>
             <h1 className="text-[32px] md:text-[48px] font-heading leading-none tracking-tight uppercase">
                Status: <span className="text-accent">{order.status}</span>
             </h1>
             <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest">Initialized: {new Date(order.createdAt).toLocaleString()}</p>
          </div>
          
          <div className="text-right">
             <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest block mb-1 text-right">Total Yield</span>
             <span className="text-4xl font-mono text-foreground tracking-tighter">₹{order.totalAmount.toLocaleString()}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Timeline & Items */}
          <div className="space-y-12">
            <section className="space-y-6">
               <div className="flex items-center gap-3 border-b border-black/5 pb-2">
                  <Clock size={14} className="text-zinc-400" />
                  <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-bold">Timeline</span>
               </div>
               
               <div className="space-y-6 pl-4 border-l border-black/5 ml-2">
                  {order.timeline.map((event: any, i: number) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[21px] top-1 w-2 h-2 bg-accent rounded-full border-4 border-background" />
                      <div className="space-y-1">
                         <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">{event.status}</span>
                         <p className="text-[11px] font-mono text-zinc-500 uppercase">{event.note || "System Task Complete"}</p>
                         <span className="text-[8px] font-mono text-zinc-300 uppercase">{new Date(event.timestamp).toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
               </div>
            </section>

            <section className="space-y-6">
               <div className="flex items-center gap-3 border-b border-black/5 pb-2">
                  <Package size={14} className="text-zinc-400" />
                  <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-bold">Allocated Units</span>
               </div>
               
               <div className="space-y-4">
                  {order.items.map((item: any) => (
                    <HudContainer key={item.id} className="p-4 flex gap-4 bg-white border-black/5 shadow-sm">
                       <div className="w-16 h-16 border border-black/5 flex items-center justify-center p-2 bg-muted">
                          <div className="w-2 h-2 bg-zinc-200 rounded-full" />
                       </div>
                       <div className="flex-1 flex justify-between">
                          <div className="space-y-1">
                             <h4 className="text-sm font-bold text-foreground uppercase tracking-tight">{item.title}</h4>
                             <p className="text-zinc-400 text-[9px] uppercase font-mono tracking-widest">Quantity: {item.quantity}</p>
                          </div>
                          <span className="text-sm font-mono text-foreground font-bold font-mono">₹{item.price.toLocaleString()}</span>
                       </div>
                    </HudContainer>
                  ))}
               </div>
            </section>
          </div>

          {/* Logistics & Payment */}
          <div className="space-y-12">
             <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-black/5 pb-2">
                   <MapPin size={14} className="text-zinc-400" />
                   <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-bold">Destination</span>
                </div>
                
                <HudContainer className="p-6 bg-white border-black/5 shadow-sm">
                   <div className="space-y-4 font-mono text-[11px] text-zinc-500 uppercase leading-relaxed">
                      <p className="text-foreground font-bold">{order.user.name}</p>
                      <p>{address?.line1}</p>
                      <p>{address?.line2}</p>
                      <p>{address?.city}, {address?.state} {address?.postalCode}</p>
                      <p>{address?.country}</p>
                      <p className="text-accent">{address?.phone}</p>
                   </div>
                </HudContainer>
             </section>

             {order.awbCode && (
                <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                   <div className="flex items-center gap-3 border-b border-black/5 pb-2">
                      <Activity size={14} className="text-accent" />
                      <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-bold">Logistics Telemetry</span>
                   </div>
                   
                   <HudContainer className="p-6 bg-accent/[0.03] border-accent/20 shadow-[0_0_20px_rgba(0,128,128,0.03)]">
                      <div className="space-y-6">
                        <div className="flex justify-between items-start">
                           <div className="space-y-1">
                              <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">Courier Node</span>
                              <p className="text-sm font-bold text-foreground uppercase">{order.courierName}</p>
                           </div>
                           <div className="text-right space-y-1">
                              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">Status</span>
                              <p className="text-xs font-mono text-accent uppercase font-bold tracking-widest">{order.trackingStatus}</p>
                           </div>
                        </div>

                        <div className="p-4 bg-white border border-black/5 space-y-2">
                           <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest font-bold">AWB Identifier</span>
                           <p className="text-lg font-mono text-foreground tracking-[0.2em]">{order.awbCode}</p>
                        </div>

                        <Link 
                          href={`https://shiprocket.co/tracking/${order.awbCode}`}
                          target="_blank"
                          className="block w-full text-center py-4 bg-accent text-white font-mono text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-black transition-colors"
                        >
                          Live Tracking Portal
                        </Link>
                      </div>
                   </HudContainer>
                </section>
              )}

             <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-black/5 pb-2">
                   <CreditCard size={14} className="text-zinc-400" />
                   <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-bold">Settlement Protocol</span>
                </div>
                
                <div className="p-6 border border-black/5 bg-white flex justify-between items-center shadow-sm">
                   <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{order.paymentMethod === 'PHONEPE' ? 'Online Gateway Settlement' : 'Cash On Delivery'}</span>
                   <span className={`text-[10px] font-mono uppercase font-bold tracking-widest ${order.paymentStatus === 'COMPLETED' ? 'text-accent' : 'text-zinc-300'}`}>
                      {order.paymentStatus}
                   </span>
                </div>
             </section>

             <div className="pt-12">
                <p className="text-[7px] font-mono text-zinc-300 tracking-[0.3em] leading-loose uppercase text-center">
                   VOIDLAB SYSTEM_SECURE_AUTH // ACQUISITION_PROTOCOL_V1 // {Math.random().toString(16).slice(2, 10).toUpperCase()}
                </p>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
