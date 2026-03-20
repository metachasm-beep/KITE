"use client";

import { useState, useEffect } from "react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";
import { Tag, Plus, Loader2, Trash2, CheckCircle2, XCircle } from "lucide-react";
import { createCoupon } from "@/app/actions/coupons";
import { prisma } from "@/lib/db"; // Use the client if we're on server? No, use actions.

// I'll use a server action to fetch coupons too.
import { getCoupons } from "@/app/actions/coupons";

export default function CouponsAdmin() {
  const [coupons, setCoupons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discountType: "PERCENTAGE" as "PERCENTAGE" | "FIXED_AMOUNT",
    discountValue: "",
    usageLimit: ""
  });

  useEffect(() => {
    loadCoupons();
  }, []);

  const loadCoupons = async () => {
    try {
      const res = await getCoupons();
      setCoupons(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      await createCoupon({
        code: newCoupon.code,
        discountType: newCoupon.discountType,
        discountValue: parseFloat(newCoupon.discountValue),
        usageLimit: newCoupon.usageLimit ? parseInt(newCoupon.usageLimit) : undefined
      });
      setNewCoupon({ code: "", discountType: "PERCENTAGE", discountValue: "", usageLimit: "" });
      loadCoupons();
    } catch (e) {
      alert("CREATION_PROTOCOL_FAILURE");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="space-y-12 max-w-6xl mx-auto py-12 px-6">
      <header className="border-b border-black/5 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-heading tracking-[-0.05em] text-foreground uppercase">COUPON_MANAGER</h1>
          <p className="font-mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase mt-2">
            Protocol for yield adjustment and acquisition incentives
          </p>
        </div>
        <TechnicalLabel label="DISCOUNT_ENGINE" value="ACTIVE" className="text-accent" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Create Form */}
        <section className="col-span-1 space-y-6">
           <HudContainer className="p-8 bg-white border-black/5 space-y-8">
              <div className="flex items-center gap-2 border-b border-black/5 pb-4">
                 <Plus size={14} className="text-accent" />
                 <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-zinc-400">NEW_COUPON</span>
              </div>
              
              <form onSubmit={handleCreate} className="space-y-6">
                 <div className="space-y-2">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest block">Coupon Code</span>
                    <input 
                      required
                      type="text" 
                      value={newCoupon.code}
                      onChange={e => setNewCoupon({...newCoupon, code: e.target.value.toUpperCase()})}
                      className="w-full bg-muted border border-black/5 p-4 text-xs font-mono text-foreground focus:outline-none focus:border-accent uppercase"
                      placeholder="e.g. EARLY_BIRD"
                    />
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest block">Type</span>
                       <select 
                         className="w-full bg-muted border border-black/5 p-4 text-[10px] font-mono text-foreground focus:outline-none"
                         value={newCoupon.discountType}
                         onChange={e => setNewCoupon({...newCoupon, discountType: e.target.value as any})}
                       >
                          <option value="PERCENTAGE">PERCENTAGE (%)</option>
                          <option value="FIXED_AMOUNT">FIXED (₹)</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest block">Value</span>
                       <input 
                         required
                         type="number" 
                         value={newCoupon.discountValue}
                         onChange={e => setNewCoupon({...newCoupon, discountValue: e.target.value})}
                         className="w-full bg-muted border border-black/5 p-4 text-xs font-mono text-foreground focus:outline-none focus:border-accent"
                         placeholder="0.00"
                       />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest block">Usage Limit (Optional)</span>
                    <input 
                      type="number" 
                      value={newCoupon.usageLimit}
                      onChange={e => setNewCoupon({...newCoupon, usageLimit: e.target.value})}
                      className="w-full bg-muted border border-black/5 p-4 text-xs font-mono text-foreground focus:outline-none focus:border-accent"
                      placeholder="UNLIMITED"
                    />
                 </div>

                 <SystemButton disabled={isCreating} className="w-full py-4 bg-black text-white hover:bg-accent transition-colors">
                    {isCreating ? <Loader2 size={16} className="animate-spin mx-auto" /> : "DEPLOY_COUPON"}
                 </SystemButton>
              </form>
           </HudContainer>
        </section>

        {/* List */}
        <section className="col-span-2 space-y-6">
           {loading ? (
             <div className="flex flex-col items-center justify-center h-64 opacity-20 animate-pulse">
                <Loader2 size={32} />
                <span className="text-[9px] font-mono mt-4 uppercase">Syncing Database...</span>
             </div>
           ) : coupons.length === 0 ? (
             <div className="flex flex-col items-center justify-center h-64 border border-black/5 bg-muted rounded-sm opacity-40">
                <Tag size={32} />
                <span className="text-[10px] font-mono mt-4 uppercase">No active protocols found</span>
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coupons.map((coupon) => (
                  <HudContainer key={coupon.id} className="p-6 bg-white border-black/10 group hover:border-accent/40 transition-all">
                     <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col">
                           <span className="text-xl font-heading text-foreground tracking-tighter uppercase">{coupon.code}</span>
                           <span className="text-[9px] font-mono text-accent uppercase tracking-[0.2em]">
                             {coupon.discountType === "PERCENTAGE" ? `${coupon.discountValue}% OFF` : `₹${coupon.discountValue} OFF`}
                           </span>
                        </div>
                        {coupon.isActive ? <CheckCircle2 size={14} className="text-accent" /> : <XCircle size={14} className="text-zinc-200" />}
                     </div>
                     
                     <div className="space-y-4 pt-4 border-t border-black/5">
                        <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest text-zinc-400">
                           <span>Usage Stats</span>
                           <span>{coupon.usageCount} / {coupon.usageLimit || '∞'}</span>
                        </div>
                        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                           <div 
                             className="h-full bg-accent transition-all duration-1000" 
                             style={{ width: `${coupon.usageLimit ? (coupon.usageCount / coupon.usageLimit) * 100 : 0}%` }} 
                           />
                        </div>
                     </div>
                  </HudContainer>
                ))}
             </div>
           )}
        </section>
      </div>
    </div>
  );
}
