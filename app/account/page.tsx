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
    <main className="min-h-screen bg-white text-foreground pt-32 pb-40 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Profile Header */}
        <header className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden relative bg-muted shadow-sm border border-black/5 flex-shrink-0">
              {user.image ? (
                <Image src={user.image} alt="Profile" fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-muted/50">
                  <User size={40} className="text-zinc-400" strokeWidth={1.5} />
                </div>
              )}
            </div>
            
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-zinc-500 font-medium text-sm tracking-wide">BaseLab Member</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {user.name || "Customer"}
              </h1>
              <p className="text-zinc-500 text-base">{user.email}</p>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end gap-1.5 border-t border-black/5 pt-4 min-w-[150px]">
             <span className="text-zinc-400 font-medium text-xs uppercase tracking-widest">Account Status</span>
             <span className="text-accent font-semibold text-sm">Active & Verified</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content Area */}
          <section className="lg:col-span-2 space-y-12">
            
            {/* Transaction Log */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                <Package size={18} className="text-zinc-400" strokeWidth={1.5} />
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">Order History</h2>
              </div>

              <div className="space-y-4">
                {accountData.orders.length > 0 ? (
                  accountData.orders.map((order) => (
                    <Link key={order.id} href={`/account/orders/${order.id}`} className="block group">
                      <div className="p-6 rounded-3xl bg-muted/20 border border-black/5 hover:bg-muted/40 hover:border-black/10 transition-all duration-300 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-6 md:gap-10">
                              <div className="space-y-1.5">
                                <span className="text-zinc-400 font-medium text-xs uppercase tracking-wider block">Order No.</span>
                                <span className="text-base font-semibold text-foreground tracking-tight">{order.id.slice(-8).toUpperCase()}</span>
                              </div>
                              <div className="space-y-1.5">
                                <span className="text-zinc-400 font-medium text-xs uppercase tracking-wider block">Date</span>
                                <span className="text-sm font-medium text-zinc-600">{new Date(order.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                              </div>
                              <div className="space-y-1.5 hidden sm:block">
                                <span className="text-zinc-400 font-medium text-xs uppercase tracking-wider block">Items</span>
                                <span className="text-sm font-medium text-zinc-600">{order.itemCount} Unit{order.itemCount > 1 ? 's' : ''}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-6 md:gap-8 border-t md:border-t-0 border-black/5 pt-4 md:pt-0">
                               <div className="text-left md:text-right space-y-1.5">
                                  <span className="text-zinc-400 font-medium text-xs uppercase tracking-wider block">Status</span>
                                  <span className={`text-sm font-semibold 
                                    ${order.status === 'SHIPPED' || order.status === 'DELIVERED' ? 'text-accent' : 'text-zinc-600'}`}>
                                    {order.status}
                                  </span>
                               </div>
                               <div className="hidden md:block h-10 w-px bg-black/5" />
                               <div className="text-right">
                                  <span className="text-xl font-semibold text-foreground tracking-tight">₹{order.totalAmount.toLocaleString()}</span>
                               </div>
                               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-black/5 group-hover:bg-foreground group-hover:text-white transition-colors duration-300 shadow-sm hidden md:flex">
                                 <ChevronRight size={16} />
                               </div>
                            </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="p-16 border border-dashed border-black/10 bg-muted/20 flex flex-col items-center justify-center rounded-3xl">
                    <Package size={32} className="text-zinc-300 mb-4" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-zinc-500">You haven't placed any orders yet.</span>
                    <Link href="/collections" className="mt-6 px-8 py-3 bg-foreground text-white rounded-full font-medium text-sm hover:bg-black transition-colors shadow-sm">
                       Explore Catalog
                    </Link>
                  </div>
                )}
              </div>
            </div>
            
          </section>

          {/* Sidebar Area */}
          <aside className="space-y-8">
             <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                  <Activity size={18} className="text-zinc-400" strokeWidth={1.5} />
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">Newsletter & Updates</h2>
                </div>
                
                <div className="p-8 bg-muted/20 rounded-3xl border border-black/5 shadow-sm space-y-6">
                   <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-zinc-600">Email Subscription</span>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full px-3 py-1">Active</span>
                   </div>
                   <p className="text-sm text-zinc-500 leading-relaxed">
                      You are currently subscribed to receive product updates, early access to new collections, and BaseLab news.
                   </p>
                   <button className="text-sm font-medium text-zinc-400 hover:text-foreground transition-colors underline-offset-4 hover:underline">
                      Manage Preferences
                   </button>
                </div>
             </div>

             <div className="space-y-4 pt-6">
                <Link href="/support" className="flex items-center justify-center w-full py-4 bg-muted text-foreground rounded-full font-medium text-base hover:bg-black/5 transition-colors">
                  Contact Support
                </Link>
                <p className="text-xs text-zinc-400 text-center px-4 leading-relaxed">
                   Need help with an order? Our support team is available Monday through Friday.
                </p>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
