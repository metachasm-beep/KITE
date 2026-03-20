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
    <main className="min-h-screen bg-white text-foreground pt-32 pb-40 px-6">
      <div className="container mx-auto max-w-4xl">
        
        <Link 
          href="/account"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-foreground transition-colors mb-12"
        >
          <MoveLeft size={16} />
          Back to Dashboard
        </Link>

        <header className="mb-16 pb-12 border-b border-black/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4">
             <div className="flex items-center gap-3">
                <Package size={18} className="text-zinc-400" strokeWidth={1.5} />
                <span className="text-sm font-medium text-zinc-500 tracking-wide uppercase">Order #{order.id.slice(-8).toUpperCase()}</span>
             </div>
             
             <div className="flex items-center gap-4">
               <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                  Order Details
               </h1>
               <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase 
                 ${order.status === 'SHIPPED' || order.status === 'DELIVERED' ? 'bg-accent/10 text-accent' : 'bg-zinc-100 text-zinc-600'}`}>
                 {order.status}
               </span>
             </div>
             
             <p className="text-base text-zinc-500 font-medium pt-2">Placed on {new Date(order.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          
          <div className="md:text-right pt-6 md:pt-0">
             <span className="text-sm font-medium text-zinc-500 block mb-1 md:text-right">Order Total</span>
             <span className="text-4xl font-semibold text-foreground tracking-tight">₹{order.totalAmount.toLocaleString()}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Content: Items & Timeline */}
          <div className="lg:col-span-7 space-y-12">
            
            <section className="space-y-6">
               <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                  <Package size={18} className="text-zinc-400" strokeWidth={1.5} />
                  <span className="text-xl font-semibold tracking-tight text-foreground">Items Ordered</span>
               </div>
               
               <div className="space-y-4">
                  {order.items.map((item: any) => (
                    <div key={item.id} className="p-4 flex gap-5 bg-muted/20 border border-black/5 rounded-3xl shadow-sm items-center">
                       <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3 border border-black/5 shadow-sm">
                          {/* Placeholder for item image if we add it to the order items later */}
                          <div className="w-3 h-3 bg-zinc-300 rounded-full" />
                       </div>
                       <div className="flex-1 flex justify-between items-start">
                          <div className="space-y-1">
                             <h4 className="text-base font-semibold text-foreground tracking-tight">{item.title}</h4>
                             <p className="text-sm font-medium text-zinc-500">Qty: {item.quantity}</p>
                          </div>
                          <span className="text-base font-semibold text-foreground">₹{item.price.toLocaleString()}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </section>

            <section className="space-y-6">
               <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                  <Clock size={18} className="text-zinc-400" strokeWidth={1.5} />
                  <span className="text-xl font-semibold tracking-tight text-foreground">Order Timeline</span>
               </div>
               
               <div className="space-y-8 pl-5 border-l-2 border-black/5 ml-2 mt-4 relative">
                  {order.timeline.map((event: any, i: number) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[27px] top-1 w-3 h-3 bg-foreground rounded-full ring-4 ring-white" />
                      <div className="space-y-1.5">
                         <span className="text-sm font-semibold text-foreground">{event.status}</span>
                         <p className="text-sm text-zinc-500 font-medium">{event.note || "Update recorded"}</p>
                         <span className="text-xs font-medium text-zinc-400 block pt-1">{new Date(event.timestamp).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}</span>
                      </div>
                    </div>
                  ))}
               </div>
            </section>
            
          </div>

          {/* Sidebar: Details */}
          <div className="lg:col-span-5 space-y-8">
             <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                   <MapPin size={18} className="text-zinc-400" strokeWidth={1.5} />
                   <span className="text-xl font-semibold tracking-tight text-foreground">Shipping Details</span>
                </div>
                
                <div className="p-8 bg-muted/20 rounded-3xl border border-black/5 shadow-sm">
                   <div className="space-y-1.5 text-sm font-medium text-zinc-600 leading-relaxed">
                      <p className="text-base font-semibold text-foreground mb-3">{order.user.name}</p>
                      <p>{address?.line1}</p>
                      {address?.line2 && <p>{address?.line2}</p>}
                      <p>{address?.city}, {address?.state} {address?.postalCode}</p>
                      <p>{address?.country}</p>
                      <p className="text-foreground pt-3">{address?.phone}</p>
                   </div>
                </div>
             </section>

             {order.awbCode && (
                <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                   <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                      <Activity size={18} className="text-zinc-400" strokeWidth={1.5} />
                      <span className="text-xl font-semibold tracking-tight text-foreground">Tracking Information</span>
                   </div>
                   
                   <div className="p-8 bg-muted/20 rounded-3xl border border-black/5 shadow-sm space-y-6">
                      <div className="flex justify-between items-start">
                         <div className="space-y-1">
                            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest block">Carrier</span>
                            <p className="text-base font-semibold text-foreground">{order.courierName}</p>
                         </div>
                         <div className="text-right space-y-1">
                            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest block">Status</span>
                            <p className="text-sm font-semibold text-foreground tracking-wide">{order.trackingStatus}</p>
                         </div>
                      </div>

                      <div className="p-4 bg-white rounded-2xl border border-black/5 space-y-1.5 shadow-sm">
                         <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest block">Tracking Number</span>
                         <p className="text-lg font-semibold text-foreground tracking-wide">{order.awbCode}</p>
                      </div>

                      <Link 
                        href={`https://shiprocket.co/tracking/${order.awbCode}`}
                        target="_blank"
                        className="flex items-center justify-center w-full py-4 bg-foreground text-white rounded-full font-medium text-sm hover:bg-black transition-colors shadow-sm"
                      >
                        Track Package
                      </Link>
                   </div>
                </section>
              )}

             <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                   <CreditCard size={18} className="text-zinc-400" strokeWidth={1.5} />
                   <span className="text-xl font-semibold tracking-tight text-foreground">Payment Summary</span>
                </div>
                
                <div className="p-6 rounded-2xl border border-black/5 bg-muted/20 flex justify-between items-center shadow-sm">
                   <span className="text-sm font-medium text-zinc-600">{order.paymentMethod === 'PHONEPE' ? 'Online Payment' : 'Cash on Delivery'}</span>
                   <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${order.paymentStatus === 'COMPLETED' ? 'bg-accent/10 text-accent' : 'bg-zinc-200 text-zinc-500'}`}>
                      {order.paymentStatus}
                   </span>
                </div>
             </section>
          </div>
        </div>
      </div>
    </main>
  );
}
