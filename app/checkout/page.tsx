"use client";

import { useState } from "react";
import { useCart } from "@/lib/contexts/CartContext";
import { createOrder } from "@/app/actions/orders";
import { useRouter } from "next/navigation";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";
import { Package, MapPin, CreditCard, ChevronRight, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Step = "SUMMARY" | "SHIPPING" | "PAYMENT" | "COMPLETE";

export default function CheckoutPage() {
  const { items, totalAmount, clearCart } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<Step>("SUMMARY");
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const [address, setAddress] = useState({
    line1: "",
    line2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "IN",
  });

  const handleCheckout = async () => {
    setLoading(true);
    const res = await createOrder({
      items: items.map(i => ({
        artifactId: i.slug,
        title: i.title,
        quantity: i.quantity,
        price: parseFloat(i.price.replace(/[^0-9.]/g, '')),
      })),
      totalAmount,
      shippingAddress: address,
    });

    if (res.success) {
      setOrderId(res.orderId || "");
      clearCart();
      setStep("COMPLETE");
    } else {
      alert("ACQUISITION_PROTOCOL_FAILURE: " + res.error);
      setLoading(false);
    }
  };

  if (items.length === 0 && step !== "COMPLETE") {
     return (
       <main className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center space-y-8">
          <Package size={48} className="text-zinc-900" />
          <TechnicalLabel label="ERROR" value="CART_EMPTY" className="text-red-900" />
          <SystemButton href="/collections" className="px-12 py-4">RETURN_TO_ARCHIVE</SystemButton>
       </main>
     );
  }

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-48 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Step Indicator HUD */}
        <div className="flex items-center justify-between mb-24 max-w-3xl mx-auto relative">
           <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10" />
           {[
             { id: "SUMMARY", label: "01_SUMMARY", icon: Package },
             { id: "SHIPPING", label: "02_LOGISTICS", icon: MapPin },
             { id: "PAYMENT", label: "03_SETTLEMENT", icon: CreditCard },
             { id: "COMPLETE", label: "04_EXECUTE", icon: CheckCircle2 },
           ].map((s, i) => (
             <div key={s.id} className="flex flex-col items-center gap-3">
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500
                  ${step === s.id ? 'bg-accent border-accent text-black scale-110 shadow-[0_0_15px_#00F2FF]' : 
                   (i < ["SUMMARY", "SHIPPING", "PAYMENT", "COMPLETE"].indexOf(step) ? 'bg-zinc-800 border-zinc-700 text-zinc-400' : 'bg-black border-white/10 text-zinc-800')}`}>
                   { <s.icon size={14} /> }
                </div>
                <TechnicalLabel label={s.label} className={step === s.id ? 'text-accent' : 'text-zinc-800'} />
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === "SUMMARY" && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8">
                   <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                      <TechnicalLabel label="ALLOCATION_REVIEW" className="text-zinc-500" />
                   </div>
                   <div className="space-y-4">
                      {items.map(item => (
                        <HudContainer key={item.id} className="p-4 flex gap-6 bg-white/[0.01]">
                           <div className="w-16 h-16 border border-white/5 bg-black p-2 flex items-center justify-center">
                              {item.media.src ? <img src={item.media.src} alt={item.title} className="w-full h-full object-contain opacity-60" /> : <div className="w-2 h-2 bg-zinc-800 rounded-full" />}
                           </div>
                           <div className="flex-1 flex justify-between items-center">
                              <div className="space-y-1">
                                 <h3 className="text-sm font-bold text-white uppercase">{item.title}</h3>
                                 <TechnicalLabel label="UNIT_PRICE" value={item.price} className="text-zinc-700 text-[9px]" />
                              </div>
                              <div className="text-right space-y-1">
                                 <TechnicalLabel label="QTY" value={item.quantity.toString()} className="text-zinc-700 text-[9px] justify-end" />
                                 <span className="text-sm font-mono text-white">₹{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toLocaleString()}</span>
                              </div>
                           </div>
                        </HudContainer>
                      ))}
                   </div>
                   <SystemButton onClick={() => setStep("SHIPPING")} className="w-full py-6">PROCEED_TO_LOGISTICS</SystemButton>
                </motion.div>
              )}

              {step === "SHIPPING" && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8">
                   <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                      <TechnicalLabel label="LOGISTICS_DESTINATION" className="text-zinc-500" />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
                      <div className="md:col-span-2 space-y-2">
                         <TechnicalLabel label="SECURE_LINE_1" className="text-[9px] text-zinc-600" />
                         <input required type="text" className="w-full bg-white/[0.02] border border-white/5 p-4 text-xs text-white focus:outline-none focus:border-accent transition-colors" value={address.line1} onChange={e => setAddress({...address, line1: e.target.value})} placeholder="UNIT_NUMBER / STREET_NAME" />
                      </div>
                      <div className="space-y-2">
                         <TechnicalLabel label="CITY" className="text-[9px] text-zinc-600" />
                         <input required type="text" className="w-full bg-white/[0.02] border border-white/5 p-4 text-xs text-white focus:outline-none focus:border-accent transition-colors" value={address.city} onChange={e => setAddress({...address, city: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                         <TechnicalLabel label="STATE" className="text-[9px] text-zinc-600" />
                         <input required type="text" className="w-full bg-white/[0.02] border border-white/5 p-4 text-xs text-white focus:outline-none focus:border-accent transition-colors" value={address.state} onChange={e => setAddress({...address, state: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                         <TechnicalLabel label="POSTAL_CODE" className="text-[9px] text-zinc-600" />
                         <input required type="text" className="w-full bg-white/[0.02] border border-white/5 p-4 text-xs text-white focus:outline-none focus:border-accent transition-colors" value={address.postalCode} onChange={e => setAddress({...address, postalCode: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                         <TechnicalLabel label="COUNTRY" className="text-[9px] text-zinc-600" />
                         <input disabled type="text" className="w-full bg-white/[0.02] border border-white/5 p-4 text-xs text-zinc-600 uppercase" value={address.country} />
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <button onClick={() => setStep("SUMMARY")} className="px-8 py-4 border border-white/5 text-zinc-600 font-mono text-[10px] hover:text-white transition-colors uppercase font-bold">BACK</button>
                      <SystemButton onClick={() => setStep("PAYMENT")} className="flex-1 py-6">CONFIRM_LOGISTICS</SystemButton>
                   </div>
                </motion.div>
              )}

              {step === "PAYMENT" && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8">
                   <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                      <TechnicalLabel label="SETTLEMENT_METHOD" className="text-zinc-500" />
                   </div>
                   <HudContainer className="p-8 bg-black border-accent/20 flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-6">
                         <div className="w-12 h-12 border border-accent/40 flex items-center justify-center rounded-full">
                            <CreditCard size={20} className="text-accent" />
                         </div>
                         <div className="space-y-1">
                            <h3 className="text-lg font-bold text-white uppercase tracking-tight">CASH_UPON_LOCALIZATION</h3>
                            <TechnicalLabel label="AVAILABLE_SERVICE" className="text-accent" />
                         </div>
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center">
                         <div className="w-3 h-3 bg-accent rounded-full" />
                      </div>
                   </HudContainer>
                   <div className="p-6 border border-white/5 bg-white/[0.01]">
                      <p className="text-[11px] font-mono text-zinc-500 leading-relaxed uppercase">
                         SETTLEMENT WILL BE EXECUTED MANUALLY UPON PHYSICAL UNIT LOCALIZATION AT DESTINATION. NO DIGITAL CURRENCY TRANSFER REQUIRED AT THIS STAGE.
                      </p>
                   </div>
                   <div className="flex gap-4">
                      <button onClick={() => setStep("SHIPPING")} className="px-8 py-4 border border-white/5 text-zinc-600 font-mono text-[10px] hover:text-white transition-colors uppercase font-bold">BACK</button>
                      <SystemButton disabled={loading} onClick={handleCheckout} className="flex-1 py-6">
                        {loading ? <Loader2 className="animate-spin mx-auto" /> : "EXECUTE_ACQUISITION_PROTOCOL"}
                      </SystemButton>
                   </div>
                </motion.div>
              )}

              {step === "COMPLETE" && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center p-12 text-center space-y-10">
                   <div className="w-24 h-24 rounded-full border-2 border-accent flex items-center justify-center shadow-[0_0_30px_#00F2FF]">
                      <CheckCircle2 size={48} className="text-accent" />
                   </div>
                   <div className="space-y-4">
                      <TechnicalLabel label="PROTOCOL_SUCCESS" className="text-accent justify-center" />
                      <h2 className="text-[48px] font-heading leading-none tracking-tighter text-white uppercase">ACQUISITION_LOCK</h2>
                      <div className="space-y-1">
                         <TechnicalLabel label="ORDER_REFERENCE" value={orderId?.toUpperCase() || ""} className="text-zinc-500 justify-center" />
                      </div>
                   </div>
                   <p className="max-w-md text-zinc-500 font-mono text-xs leading-relaxed uppercase">
                      YOUR DESIGN STUDY HAS BEEN INITIALIZED IN THE SECURE BATCH. TELEMETRY UPDATES WILL BE TRANSMITTED AS THE UNIT MOVES THROUGH CORE LOGISTICS.
                   </p>
                   <div className="flex gap-6">
                      <SystemButton href="/account" className="px-12 py-4">GO_TO_COMMAND_CENTER</SystemButton>
                      <SystemButton href="/" variant="outline" className="px-12 py-4 border-zinc-800 text-zinc-500 hover:text-white">RETURN_TO_BASE</SystemButton>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Summary Area */}
          <aside className="space-y-12">
             <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <TechnicalLabel label="SETTLEMENT_SUMMARY" className="text-zinc-500" />
                </div>
                
                <HudContainer className="p-8 space-y-8 bg-black">
                   <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                         <span>UNIT_COST_TOTAL</span>
                         <span className="text-white">₹{totalAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                         <span>PROTOCOL_FEE (TAX)</span>
                         <span className="text-white">₹0.00</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                         <span>LOGISTICS_LEVY</span>
                         <span className="text-accent">FREE_SYNC</span>
                      </div>
                   </div>

                   <div className="h-px bg-white/5 w-full" />

                   <div className="flex justify-between items-end">
                      <TechnicalLabel label="TOTAL_YIELD" className="text-zinc-500" />
                      <span className="text-3xl font-mono text-white tracking-tighter">
                         ₹{totalAmount.toLocaleString()}
                      </span>
                   </div>
                </HudContainer>
             </div>

             <div className="p-6 bg-white/[0.01] border border-white/5">
                <TechnicalLabel label="SECURITY_STATUS" value="ENCRYPTED" className="text-zinc-700 text-[8px] mb-4" />
                <p className="text-[9px] font-mono text-zinc-800 leading-relaxed uppercase">
                   ALL TRANSACTIONS ARE MONITORED VIA SPECULATIVE SECURITY PROTOCOL 0x77-UNIT01. YOUR IDENTITY IS PROTECTED BY THE ARCHIVE.
                </p>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
