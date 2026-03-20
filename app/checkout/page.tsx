"use client";

import { useState, Suspense } from "react";
import { useCart } from "@/lib/contexts/CartContext";
import { createOrder } from "@/app/actions/orders";
import { validateCoupon } from "@/app/actions/coupons";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";
import { Package, MapPin, CreditCard, ChevronRight, Loader2, CheckCircle2, Lock, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<any>(null);
  const [couponError, setCouponError] = useState("");
  const [isApplying, setIsApplying] = useState(false);

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

  const handleApplyCoupon = async () => {
    if (!couponCode) return;
    setIsApplying(true);
    setCouponError("");
    const res = await validateCoupon(couponCode);
    if (res.success) {
      setAppliedCoupon(res.coupon);
    } else {
      setCouponError(res.error || "INVALID_COUPON");
    }
    setIsApplying(false);
  };

  const handleCheckout = async () => {
    setLoading(true);
    const res = await createOrder({
      items: items.map(i => ({
        artifactId: i.slug,
        title: i.title,
        quantity: i.quantity,
        price: parseFloat(i.price.replace(/[^0-9.]/g, '')),
      })),
      totalAmount: discountedTotal, // Send the amount the user expects to pay
      paymentMethod,
      shippingAddress: address,
      couponCode: appliedCoupon?.code,
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

  const discountedTotal = appliedCoupon 
    ? (appliedCoupon.discountType === "PERCENTAGE" 
        ? totalAmount - (totalAmount * appliedCoupon.discountValue / 100)
        : Math.max(0, totalAmount - appliedCoupon.discountValue))
    : totalAmount;

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center space-y-6">
         <Loader2 className="animate-spin text-foreground" size={40} strokeWidth={1.5} />
         <p className="text-zinc-500 text-sm font-medium">Authenticating...</p>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center space-y-8">
         <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mb-4">
            <Lock size={28} className="text-zinc-400" strokeWidth={1.5} />
         </div>
         <div className="space-y-4 max-w-md">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">Sign In Required</h2>
            <p className="text-zinc-500 text-base leading-relaxed">
               Please sign in to your account to complete checkout and manage your orders.
            </p>
         </div>
         <SystemButton href="/api/auth/signin" className="px-10 py-4 bg-foreground text-white rounded-full font-medium hover:bg-black mt-4">
           Sign In Options
         </SystemButton>
      </main>
    );
  }

  if (items.length === 0 && step !== "COMPLETE") {
     return (
       <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center space-y-8">
          <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mb-4">
             <Package size={32} className="text-zinc-400" strokeWidth={1.5} />
          </div>
          <p className="text-zinc-500 text-lg font-medium">Your cart is empty.</p>
          <SystemButton href="/collections" className="px-10 py-4 bg-muted text-foreground rounded-full font-medium hover:bg-black/5 mt-4">
            Continue Shopping
          </SystemButton>
       </main>
     );
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-40 px-6">
      <div className="container mx-auto max-w-5xl text-foreground">
        
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-16 max-w-2xl mx-auto relative">
           <div className="absolute top-1/2 left-0 w-full h-px bg-black/5 -z-10" />
           {[
             { id: "SUMMARY", label: "Summary", icon: Package },
             { id: "SHIPPING", label: "Shipping", icon: MapPin },
             { id: "PAYMENT", label: "Payment", icon: CreditCard },
             { id: "COMPLETE", label: "Complete", icon: CheckCircle2 },
           ].map((s, i) => (
             <div key={s.id} className="flex flex-col items-center gap-3 bg-white px-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${step === s.id ? 'bg-foreground text-white scale-110 shadow-md' : 
                   (i < ["SUMMARY", "SHIPPING", "PAYMENT", "COMPLETE"].indexOf(step) ? 'bg-zinc-100 text-zinc-500' : 'bg-white border border-black/10 text-zinc-300')}`}>
                   { <s.icon size={18} strokeWidth={step === s.id ? 2 : 1.5} /> }
                </div>
                <span className={`text-xs font-medium tracking-wide ${step === s.id ? 'text-foreground' : 'text-zinc-400'}`}>{s.label}</span>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === "SUMMARY" && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-8">
                   <div className="pb-4 border-b border-black/5">
                      <h2 className="text-2xl font-semibold tracking-tight">Review Order</h2>
                   </div>
                   <div className="space-y-4">
                      {items.map(item => (
                        <div key={item.id} className="p-4 flex gap-5 bg-muted/20 rounded-2xl border border-black/5 items-center">
                           <div className="w-20 h-20 bg-white rounded-xl p-2 flex items-center justify-center border border-black/5 shadow-sm">
                              {item.media.src ? <img src={item.media.src} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" /> : <div className="w-2 h-2 bg-zinc-200 rounded-full" />}
                           </div>
                           <div className="flex-1 flex justify-between items-start">
                              <div className="space-y-1">
                                 <h3 className="text-base font-semibold text-foreground tracking-tight">{item.title}</h3>
                                 <p className="text-zinc-500 text-sm font-medium">{item.price}</p>
                              </div>
                              <div className="text-right space-y-1">
                                 <p className="text-zinc-500 text-sm font-medium">Qty: {item.quantity}</p>
                                 <span className="text-base font-semibold text-foreground">₹{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toLocaleString()}</span>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                   <button onClick={() => setStep("SHIPPING")} className="w-full py-4 bg-foreground text-white rounded-full font-medium text-base hover:bg-black transition-colors shadow-sm">
                     Continue to Shipping
                   </button>
                </motion.div>
              )}

              {step === "SHIPPING" && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-8">
                   <div className="pb-4 border-b border-black/5">
                      <h2 className="text-2xl font-semibold tracking-tight">Shipping Address</h2>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="md:col-span-2 space-y-2">
                         <label className="text-sm font-medium text-zinc-600">Street Address</label>
                         <input required type="text" className="w-full bg-white border border-black/10 rounded-xl p-3.5 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all shadow-sm" value={address.line1} onChange={e => setAddress({...address, line1: e.target.value})} placeholder="123 Main St, Apt 4B" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-zinc-600">City</label>
                         <input required type="text" className="w-full bg-white border border-black/10 rounded-xl p-3.5 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all shadow-sm" value={address.city} onChange={e => setAddress({...address, city: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-zinc-600">State / Province</label>
                         <input required type="text" className="w-full bg-white border border-black/10 rounded-xl p-3.5 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all shadow-sm" value={address.state} onChange={e => setAddress({...address, state: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-zinc-600">Postal Code</label>
                         <input required type="text" className="w-full bg-white border border-black/10 rounded-xl p-3.5 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all shadow-sm" value={address.postalCode} onChange={e => setAddress({...address, postalCode: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-zinc-600">Phone Number</label>
                         <input required type="tel" className="w-full bg-white border border-black/10 rounded-xl p-3.5 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all shadow-sm" value={address.phone} onChange={e => setAddress({...address, phone: e.target.value})} placeholder="+91 00000 00000" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-zinc-600">Country</label>
                         <input disabled type="text" className="w-full bg-muted/50 border border-black/5 rounded-xl p-3.5 text-base text-zinc-500 cursor-not-allowed" value={address.country} />
                      </div>
                   </div>
                   <div className="flex gap-4 pt-4">
                      <button onClick={() => setStep("SUMMARY")} className="px-8 py-4 bg-muted text-foreground rounded-full font-medium hover:bg-black/5 transition-colors">Back</button>
                      <button onClick={() => setStep("PAYMENT")} className="flex-1 py-4 bg-foreground text-white rounded-full font-medium text-base hover:bg-black transition-colors shadow-sm">Continue to Payment</button>
                   </div>
                </motion.div>
              )}

              {step === "PAYMENT" && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-8">
                   <div className="pb-4 border-b border-black/5">
                      <h2 className="text-2xl font-semibold tracking-tight">Payment Method</h2>
                   </div>
                   <div className="space-y-4">
                       <div 
                         onClick={() => setPaymentMethod("PHONEPE")}
                         className={`p-6 bg-white rounded-2xl border flex items-center justify-between cursor-pointer transition-all shadow-sm
                           ${paymentMethod === "PHONEPE" ? 'border-foreground ring-1 ring-foreground' : 'border-black/10 hover:border-black/20'}`}
                       >
                          <div className="flex items-center gap-5">
                             <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                                <CreditCard size={20} className="text-foreground" strokeWidth={1.5} />
                             </div>
                             <div className="space-y-0.5">
                                <h3 className="text-base font-semibold text-foreground tracking-tight">Online Payment</h3>
                                <p className="text-zinc-500 text-sm font-medium">Pay securely via Credit Card, UPI, or Netbanking</p>
                             </div>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                            ${paymentMethod === "PHONEPE" ? 'border-foreground' : 'border-black/10'}`}>
                             {paymentMethod === "PHONEPE" && <div className="w-3 h-3 bg-foreground rounded-full" />}
                          </div>
                       </div>

                       <div 
                         onClick={() => setPaymentMethod("CASH")}
                         className={`p-6 bg-white rounded-2xl border flex items-center justify-between cursor-pointer transition-all shadow-sm
                           ${paymentMethod === "CASH" ? 'border-foreground ring-1 ring-foreground' : 'border-black/10 hover:border-black/20'}`}
                       >
                          <div className="flex items-center gap-5">
                             <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                                <Package size={20} className="text-zinc-500" strokeWidth={1.5} />
                             </div>
                             <div className="space-y-0.5">
                                <h3 className="text-base font-semibold text-foreground tracking-tight">Cash on Delivery</h3>
                                <p className="text-zinc-500 text-sm font-medium">Pay when your package arrives</p>
                             </div>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                            ${paymentMethod === "CASH" ? 'border-foreground' : 'border-black/10'}`}>
                             {paymentMethod === "CASH" && <div className="w-3 h-3 bg-foreground rounded-full" />}
                          </div>
                       </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-muted/30 border border-black/5">
                       <p className="text-sm font-medium text-zinc-600 leading-relaxed">
                          {paymentMethod === "PHONEPE" 
                            ? "You will be securely redirected to our payment gateway to complete your transaction. Your order will be confirmed immediately."
                            : "Payment will be collected at the time of delivery. Please ensure physical presence at the shipping address."}
                       </p>
                    </div>
                   <div className="flex gap-4 pt-4">
                      <button onClick={() => setStep("SHIPPING")} className="px-8 py-4 bg-muted text-foreground rounded-full font-medium hover:bg-black/5 transition-colors">Back</button>
                      <button disabled={loading} onClick={handleCheckout} className="flex-1 py-4 bg-foreground text-white rounded-full font-medium text-base hover:bg-black transition-colors shadow-sm disabled:opacity-50 flex justify-center items-center">
                        {loading ? <Loader2 className="animate-spin" size={20} /> : "Complete Purchase"}
                      </button>
                   </div>
                </motion.div>
              )}

              {step === "COMPLETE" && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center space-y-8">
                   <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center shadow-sm border border-green-100 mb-2">
                      <CheckCircle2 size={40} className="text-green-600" strokeWidth={1.5} />
                   </div>
                   <div className="space-y-3">
                      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">Order Confirmed</h2>
                      <p className="text-zinc-500 font-medium text-lg">Thank you for your purchase.</p>
                   </div>
                   <div className="bg-muted/30 py-3 px-6 rounded-full border border-black/5">
                      <span className="text-zinc-600 font-medium text-sm">Order Reference: <span className="text-foreground tracking-wide ml-1 font-semibold">{orderId?.toUpperCase() || "PENDING"}</span></span>
                   </div>
                   <p className="max-w-md text-zinc-500 font-medium text-base leading-relaxed mt-4">
                      We've received your order and are currently processing it. You will receive an email confirmation shortly with tracking details once shipped.
                   </p>
                   <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-8">
                      <Link href="/account" className="px-10 py-4 bg-foreground text-white rounded-full font-medium hover:bg-black transition-colors shadow-sm w-full sm:w-auto">View Order History</Link>
                      <Link href="/collections" className="px-10 py-4 bg-muted text-foreground rounded-full font-medium hover:bg-black/5 transition-colors w-full sm:w-auto">Continue Shopping</Link>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Summary Area */}
          {step !== "COMPLETE" && (
            <aside className="space-y-8 lg:sticky lg:top-32 h-fit">
               <div className="p-8 rounded-3xl bg-muted/20 border border-black/5 space-y-8 shadow-sm">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground pb-4 border-b border-black/5">Order Summary</h3>
                  
                  <div className="space-y-4">
                     <div className="flex justify-between items-center text-sm font-medium text-zinc-500">
                        <span>Subtotal</span>
                        <span className="text-foreground font-semibold">₹{totalAmount.toLocaleString()}</span>
                     </div>
                     {appliedCoupon && (
                       <div className="flex justify-between items-center text-sm font-medium text-green-600 bg-green-50 p-2 -mx-2 rounded-lg">
                          <span>Discount ({appliedCoupon.code})</span>
                          <span>-₹{(totalAmount - discountedTotal).toLocaleString()}</span>
                       </div>
                     )}
                     <div className="flex justify-between items-center text-sm font-medium text-zinc-500">
                        <span>Shipping</span>
                        <span className="text-foreground">Free Standard</span>
                     </div>
                  </div>

                  <div className="h-px bg-black/5 w-full" />

                  <div className="flex justify-between items-end">
                     <span className="text-base font-medium text-zinc-600">Total</span>
                     <span className="text-3xl font-semibold text-foreground tracking-tight">
                        ₹{discountedTotal.toLocaleString()}
                     </span>
                  </div>
               </div>

               <div className="space-y-3 px-2">
                  <label className="text-sm font-medium text-zinc-600 flex items-center gap-2">
                    <Tag size={14} /> Gift Card or Discount Code
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                     <input 
                       type="text" 
                       value={couponCode}
                       onChange={(e) => setCouponCode(e.target.value)}
                       placeholder="Enter code"
                       className="flex-1 bg-white border border-black/10 rounded-xl p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 uppercase shadow-sm"
                     />
                     <button 
                       onClick={handleApplyCoupon}
                       disabled={isApplying || !couponCode}
                       className="px-6 py-3 bg-muted text-foreground rounded-xl font-medium text-sm hover:bg-black/5 transition-colors disabled:opacity-50"
                     >
                        {isApplying ? <Loader2 size={16} className="animate-spin" /> : "Apply"}
                     </button>
                  </div>
                  {couponError && <p className="text-sm font-medium text-red-500 mt-2">{couponError}</p>}
                  {appliedCoupon && <p className="text-sm font-medium text-green-600 mt-2">Coupon Applied: {appliedCoupon.code}</p>}
               </div>

               <div className="flex items-center gap-3 justify-center text-zinc-400 pt-6">
                 <Lock size={14} />
                 <span className="text-xs font-medium">Secure Encrypted Checkout</span>
               </div>
            </aside>
          )}
        </div>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center space-y-6">
           <Loader2 className="animate-spin text-foreground" size={40} strokeWidth={1.5} />
           <p className="text-zinc-500 text-sm font-medium">Loading Secure Checkout...</p>
        </div>
      }
    >
      <CheckoutPageContent />
    </Suspense>
  );
}
