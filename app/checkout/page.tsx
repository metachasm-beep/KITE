"use client";

import { useState, Suspense } from "react";
import { useCart } from "@/lib/contexts/CartContext";
import { createOrder } from "@/app/actions/orders";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";
import { Package, MapPin, CreditCard, ChevronRight, Loader2, CheckCircle2, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Step = "SUMMARY" | "SHIPPING" | "PAYMENT" | "COMPLETE";

function CheckoutPageContent() {
  const { items, totalAmount, clearCart } = useCart();
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState<Step>("SUMMARY");
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"CASH" | "PHONEPE">("PHONEPE");

  useEffect(() => {
    const method = searchParams.get("method");
    if (method === "PHONEPE") {
      setPaymentMethod("PHONEPE");
    } else if (method === "CASH") {
      setPaymentMethod("CASH");
    }
  }, [searchParams]);

  const [address, setAddress] = useState({
    line1: "",
    line2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "IN",
    phone: "",
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
      paymentMethod,
      shippingAddress: address,
    });

    if (res.success) {
      if (res.redirectUrl) {
        window.location.href = res.redirectUrl;
        return;
      }
      setOrderId(res.orderId || "");
      clearCart();
      setStep("COMPLETE");
    } else {
      if (res.error === "AUTH_REQUIRED") {
        router.push("/api/auth/signin");
      } else {
        alert("TRANSACTION_INTERRUPTED: " + res.error);
      }
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center space-y-8">
         <Loader2 className="animate-spin text-accent" size={32} />
         <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest animate-pulse">Establishing Session...</p>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center space-y-12">
         <div className="w-16 h-16 border border-black/5 flex items-center justify-center bg-muted rounded-full">
            <Lock size={20} className="text-zinc-300" />
         </div>
         <div className="space-y-4">
            <h2 className="text-3xl font-heading text-foreground uppercase tracking-tight">Access Protocol Required</h2>
            <p className="text-zinc-400 font-mono text-xs max-w-sm mx-auto uppercase leading-relaxed">
               You must be authenticated with the Design Studio network to complete this acquisition.
            </p>
         </div>
         <SystemButton href="/api/auth/signin" className="px-12 py-4">Authenticate via Google</SystemButton>
      </main>
    );
  }

  if (items.length === 0 && step !== "COMPLETE") {
     return (
       <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center space-y-8">
          <Package size={48} className="text-zinc-100" />
          <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest font-bold">Your cart is empty</p>
          <SystemButton href="/collections" className="px-12 py-4">Return to Shop</SystemButton>
       </main>
     );
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-48 px-6">
      <div className="container mx-auto max-w-5xl text-foreground">
        
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-24 max-w-3xl mx-auto relative">
           <div className="absolute top-1/2 left-0 w-full h-px bg-black/5 -z-10" />
           {[
             { id: "SUMMARY", label: "01_Summary", icon: Package },
             { id: "SHIPPING", label: "02_Shipping", icon: MapPin },
             { id: "PAYMENT", label: "03_Payment", icon: CreditCard },
             { id: "COMPLETE", label: "04_Complete", icon: CheckCircle2 },
           ].map((s, i) => (
             <div key={s.id} className="flex flex-col items-center gap-3">
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500
                  ${step === s.id ? 'bg-accent border-accent text-white scale-110 shadow-[0_0_15px_rgba(0,128,128,0.2)]' : 
                   (i < ["SUMMARY", "SHIPPING", "PAYMENT", "COMPLETE"].indexOf(step) ? 'bg-zinc-100 border-zinc-200 text-zinc-400' : 'bg-white border-black/10 text-zinc-200')}`}>
                   { <s.icon size={14} /> }
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-widest ${step === s.id ? 'text-accent font-bold' : 'text-zinc-300'}`}>{s.label}</span>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === "SUMMARY" && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8">
                   <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                      <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-bold">Review Your Items</span>
                   </div>
                   <div className="space-y-4">
                      {items.map(item => (
                        <HudContainer key={item.id} className="p-4 flex gap-6 bg-white border-black/5">
                           <div className="w-16 h-16 border border-black/5 bg-muted p-2 flex items-center justify-center">
                              {item.media.src ? <img src={item.media.src} alt={item.title} className="w-full h-full object-contain" /> : <div className="w-2 h-2 bg-zinc-200 rounded-full" />}
                           </div>
                           <div className="flex-1 flex justify-between items-center">
                              <div className="space-y-1">
                                 <h3 className="text-sm font-bold text-foreground uppercase">{item.title}</h3>
                                 <p className="text-zinc-400 text-[10px] uppercase font-mono tracking-tighter">Price: {item.price}</p>
                              </div>
                              <div className="text-right space-y-1">
                                 <p className="text-zinc-400 text-[10px] uppercase font-mono tracking-tighter">Qty: {item.quantity}</p>
                                 <span className="text-sm font-mono text-foreground font-bold">₹{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toLocaleString()}</span>
                              </div>
                           </div>
                        </HudContainer>
                      ))}
                   </div>
                   <SystemButton onClick={() => setStep("SHIPPING")} className="w-full py-6">Next: Shipping Details</SystemButton>
                </motion.div>
              )}

              {step === "SHIPPING" && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8">
                   <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                      <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-bold">Shipping Destination</span>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
                      <div className="md:col-span-2 space-y-2">
                         <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">Street Address</span>
                         <input required type="text" className="w-full bg-muted border border-black/5 p-4 text-xs text-foreground focus:outline-none focus:border-accent transition-colors" value={address.line1} onChange={e => setAddress({...address, line1: e.target.value})} placeholder="Unit / Street Name" />
                      </div>
                      <div className="space-y-2">
                         <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">City</span>
                         <input required type="text" className="w-full bg-muted border border-black/5 p-4 text-xs text-foreground focus:outline-none focus:border-accent transition-colors" value={address.city} onChange={e => setAddress({...address, city: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                         <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">State</span>
                         <input required type="text" className="w-full bg-muted border border-black/5 p-4 text-xs text-foreground focus:outline-none focus:border-accent transition-colors" value={address.state} onChange={e => setAddress({...address, state: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                         <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">Postal Code</span>
                         <input required type="text" className="w-full bg-muted border border-black/5 p-4 text-xs text-foreground focus:outline-none focus:border-accent transition-colors" value={address.postalCode} onChange={e => setAddress({...address, postalCode: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                         <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">Contact Phone</span>
                         <input required type="tel" className="w-full bg-muted border border-black/5 p-4 text-xs text-foreground focus:outline-none focus:border-accent transition-colors" value={address.phone} onChange={e => setAddress({...address, phone: e.target.value})} placeholder="+91 00000 00000" />
                      </div>
                      <div className="space-y-2">
                         <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">Country</span>
                         <input disabled type="text" className="w-full bg-muted border border-black/5 p-4 text-xs text-zinc-400 uppercase" value={address.country} />
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <button onClick={() => setStep("SUMMARY")} className="px-8 py-4 border border-black/5 text-zinc-400 font-mono text-[10px] hover:text-foreground transition-colors uppercase font-bold">Back</button>
                      <SystemButton onClick={() => setStep("PAYMENT")} className="flex-1 py-6">Next: Payment Method</SystemButton>
                   </div>
                </motion.div>
              )}

              {step === "PAYMENT" && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8">
                   <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                      <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-bold">Select Payment Method</span>
                   </div>
                   <div className="space-y-4">
                       <HudContainer 
                         onClick={() => setPaymentMethod("PHONEPE")}
                         className={`p-8 bg-white border-black/5 flex items-center justify-between group cursor-pointer transition-all
                           ${paymentMethod === "PHONEPE" ? 'border-accent bg-accent/[0.02] shadow-[0_0_20px_rgba(0,128,128,0.05)]' : 'opacity-60 hover:opacity-100'}`}
                       >
                          <div className="flex items-center gap-6">
                             <div className="w-12 h-12 border border-accent/20 flex items-center justify-center rounded-full bg-accent/5">
                                <CreditCard size={20} className="text-accent" />
                             </div>
                             <div className="space-y-1">
                                <h3 className="text-lg font-bold text-foreground uppercase tracking-tight">ONLINE PAYMENT</h3>
                                <p className="text-accent font-mono text-[10px] uppercase tracking-widest">Pay Securely via PhonePe</p>
                             </div>
                          </div>
                          <div className="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center">
                             {paymentMethod === "PHONEPE" && <div className="w-3 h-3 bg-accent rounded-full" />}
                          </div>
                       </HudContainer>

                       <HudContainer 
                         onClick={() => setPaymentMethod("CASH")}
                         className={`p-8 bg-white border-black/5 flex items-center justify-between group cursor-pointer transition-all
                           ${paymentMethod === "CASH" ? 'border-black/20 bg-black/[0.01]' : 'opacity-60 hover:opacity-100'}`}
                       >
                          <div className="flex items-center gap-6">
                             <div className="w-12 h-12 border border-black/10 flex items-center justify-center rounded-full bg-muted">
                                <Package size={20} className="text-zinc-400" />
                             </div>
                             <div className="space-y-1">
                                <h3 className="text-lg font-bold text-zinc-500 uppercase tracking-tight">CASH ON DELIVERY</h3>
                                <p className="text-zinc-300 font-mono text-[10px] uppercase tracking-widest">Local Settlement Protocol</p>
                             </div>
                          </div>
                          <div className="w-6 h-6 rounded-full border-2 border-black/10 flex items-center justify-center">
                             {paymentMethod === "CASH" && <div className="w-3 h-3 bg-zinc-300 rounded-full" />}
                          </div>
                       </HudContainer>
                    </div>

                    <div className="p-6 border border-black/5 bg-muted">
                       <p className="text-[11px] font-mono text-zinc-400 leading-relaxed uppercase">
                          {paymentMethod === "PHONEPE" 
                            ? "YOU WILL BE REDIRECTED TO A SECURE PAYMENT GATEWAY TO COMPLETE THE TRANSACTION. YOUR ORDER WILL BE CONFIRMED INSTANTLY."
                            : "SETTLEMENT WILL BE COMPLETED MANUALLY WHEN THE PACKAGE IS DELIVERED. NO ADVANCE DIGITAL PAYMENT IS REQUIRED."}
                       </p>
                    </div>
                   <div className="flex gap-4">
                      <button onClick={() => setStep("SHIPPING")} className="px-8 py-4 border border-black/5 text-zinc-400 font-mono text-[10px] hover:text-foreground transition-colors uppercase font-bold">Back</button>
                      <SystemButton disabled={loading} onClick={handleCheckout} className="flex-1 py-6 bg-accent text-white hover:bg-black">
                        {loading ? <Loader2 className="animate-spin mx-auto" /> : "COMPLETE PURCHASE"}
                      </SystemButton>
                   </div>
                </motion.div>
              )}

              {step === "COMPLETE" && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center p-12 text-center space-y-10">
                   <div className="w-24 h-24 rounded-full border-2 border-accent flex items-center justify-center shadow-[0_0_30px_rgba(0,128,128,0.1)]">
                      <CheckCircle2 size={48} className="text-accent" />
                   </div>
                   <div className="space-y-4">
                      <span className="text-accent font-mono text-xs uppercase font-bold tracking-[0.4em] block">Operation Successful</span>
                      <h2 className="text-[48px] font-heading leading-none tracking-tighter text-foreground uppercase">Order Confirmed</h2>
                      <div className="space-y-1">
                         <span className="text-zinc-500 font-mono text-[11px] uppercase tracking-widest block">Reference ID: {orderId?.toUpperCase() || "PENDING"}</span>
                      </div>
                   </div>
                   <p className="max-w-md text-zinc-400 font-mono text-xs leading-relaxed uppercase">
                      Your unique design piece has been reserved. You will receive telemetry updates as your item moves through our fulfillment protocol.
                   </p>
                   <div className="flex gap-6">
                      <SystemButton href="/account" className="px-12 py-4">View Orders</SystemButton>
                      <SystemButton href="/" variant="outline" className="px-12 py-4 border-black/10 text-zinc-400 hover:text-foreground">Home Base</SystemButton>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Summary Area */}
          <aside className="space-y-12">
             <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                  <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-bold">Price Summary</span>
                </div>
                
                <HudContainer className="p-8 space-y-8 bg-white border-black/5">
                   <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                         <span>Subtotal</span>
                         <span className="text-foreground">₹{totalAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                         <span>Shipping</span>
                         <span className="text-accent">Free</span>
                      </div>
                   </div>

                   <div className="h-px bg-black/5 w-full" />

                   <div className="flex justify-between items-end">
                      <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest">Total</span>
                      <span className="text-3xl font-mono text-foreground tracking-tighter">
                         ₹{totalAmount.toLocaleString()}
                      </span>
                   </div>
                </HudContainer>
             </div>

             <div className="p-6 bg-muted border border-black/5">
                <span className="text-zinc-400 text-[8px] uppercase font-bold tracking-widest block mb-4">Secure Checkout</span>
                <p className="text-[9px] font-mono text-zinc-500 leading-relaxed uppercase">
                   Your transaction is protected by industry standard encryption. We do not store your payment details on our servers.
                </p>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center space-y-8">
           <Loader2 className="animate-spin text-accent" size={48} />
           <p className="animate-pulse text-zinc-400 font-mono text-xs uppercase tracking-widest">Loading Gateway...</p>
        </div>
      }
    >
      <CheckoutPageContent />
    </Suspense>
  );
}
