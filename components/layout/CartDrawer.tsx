"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, CreditCard, ShieldCheck, Zap } from 'lucide-react';
import { useCart } from '@/lib/contexts/CartContext';
import { useTheme } from '@/lib/contexts/ThemeContext';
import { useRouter } from 'next/navigation';

export const CartDrawer = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, totalAmount } = useCart();
  const { isCyberpunk } = useTheme();
  const router = useRouter();

  const handleCheckout = (url: string) => {
    toggleCart(); // close first
    router.push(url); // then navigate
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className={`fixed inset-0 z-[100] ${isCyberpunk ? "bg-black/80 backdrop-blur-md" : "bg-black/60 backdrop-blur-sm"}`}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed top-0 right-0 h-full w-full sm:w-[480px] shadow-2xl z-[101] flex flex-col transition-colors duration-500 ${
              isCyberpunk ? "bg-[#080808] border-l border-[#00f5d4]/20" : "bg-white"
            }`}
          >
            {/* Header */}
            <div className={`p-6 border-b flex items-center justify-between ${isCyberpunk ? "border-[#00f5d4]/20 bg-[#080808]/80 backdrop-blur-md" : "border-black/5 bg-white/80 backdrop-blur-md"}`}>
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className={isCyberpunk ? "text-[#00f5d4]" : "text-foreground"} />
                <h2 className={`text-lg font-semibold tracking-tight ${isCyberpunk ? "text-[#e8f4f8] font-mono uppercase tracking-widest" : "text-foreground"}`}>
                  {isCyberpunk ? "CART.EXE" : "Your Cart"}
                </h2>
              </div>
              <button 
                onClick={toggleCart}
                className={`p-2 rounded-full transition-colors group ${isCyberpunk ? "hover:bg-[#00f5d4]/10" : "hover:bg-black/5"}`}
              >
                <X size={20} className={`transition-colors ${isCyberpunk ? "text-[#00f5d4]/60 group-hover:text-[#00f5d4]" : "text-zinc-500 group-hover:text-foreground"}`} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-60">
                  <ShoppingBag size={48} className={isCyberpunk ? "text-[#00f5d4]/30" : "text-zinc-300"} />
                  <p className={`text-sm font-medium ${isCyberpunk ? "text-[#00f5d4]/60 font-mono uppercase tracking-wider" : "text-zinc-500"}`}>
                    {isCyberpunk ? "CART_EMPTY // NO_UNITS_QUEUED" : "Your cart is empty"}
                  </p>
                  <button 
                    onClick={toggleCart}
                    className={`px-8 py-3 text-sm font-medium transition-colors ${isCyberpunk ? "border border-[#00f5d4]/40 text-[#00f5d4] hover:bg-[#00f5d4]/10 font-mono tracking-widest uppercase" : "bg-muted text-foreground hover:bg-black/5 rounded-full"}`}
                  >
                    {isCyberpunk ? "CONTINUE_BROWSING" : "Continue Shopping"}
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className={`p-4 flex gap-5 group rounded-2xl transition-colors border ${isCyberpunk ? "border-[#00f5d4]/15 bg-[#0d1117] hover:border-[#00f5d4]/30" : "border-black/5 hover:bg-muted/50"}`}>
                    <div className={`w-20 aspect-square rounded-xl border relative overflow-hidden flex items-center justify-center p-2 ${isCyberpunk ? "border-[#00f5d4]/20 bg-[#080808]" : "bg-muted border-black/5"}`}>
                       {item.media.src ? (
                         <img src={item.media.src} alt={item.title} className={`w-full h-full object-contain ${isCyberpunk ? "" : "mix-blend-multiply"}`} />
                       ) : (
                         <div className={`w-full h-full border flex items-center justify-center ${isCyberpunk ? "border-[#00f5d4]/10" : "border-black/5 opacity-50"}`}>
                            <div className={`w-2 h-2 rounded-full ${isCyberpunk ? "bg-[#00f5d4]/30" : "bg-zinc-200"}`} />
                         </div>
                       )}
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className={`text-sm font-semibold ${isCyberpunk ? "text-[#e8f4f8] font-mono" : "text-foreground"}`}>{item.title}</h3>
                          <p className={`text-xs mt-1 ${isCyberpunk ? "text-[#00f5d4]/50 font-mono" : "text-zinc-500"}`}>{item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className={`transition-colors p-1 ${isCyberpunk ? "text-[#00f5d4]/30 hover:text-red-400" : "text-zinc-400 hover:text-red-500"}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="flex justify-between items-end mt-4">
                        <div className={`flex items-center rounded-full p-1 border ${isCyberpunk ? "bg-[#080808] border-[#00f5d4]/20" : "bg-muted border-black/5"}`}>
                           <button 
                             onClick={() => updateQuantity(item.id, item.quantity - 1)}
                             className={`p-1 rounded-full transition-colors ${isCyberpunk ? "text-[#00f5d4]/50 hover:text-[#00f5d4]" : "text-zinc-500 hover:text-foreground hover:bg-white shadow-sm"}`}
                           >
                             <Minus size={14} />
                           </button>
                           <span className={`px-3 text-xs font-medium min-w-[30px] text-center ${isCyberpunk ? "text-[#00f5d4] font-mono" : "text-foreground"}`}>{item.quantity}</span>
                           <button 
                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
                             className={`p-1 rounded-full transition-colors ${isCyberpunk ? "text-[#00f5d4]/50 hover:text-[#00f5d4]" : "text-zinc-500 hover:text-foreground hover:bg-white shadow-sm"}`}
                           >
                             <Plus size={14} />
                           </button>
                        </div>
                        <span className={`text-sm font-semibold ${isCyberpunk ? "text-[#00f5d4] font-mono" : "text-foreground"}`}>
                          ₹{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className={`p-6 border-t space-y-4 ${isCyberpunk ? "border-[#00f5d4]/20 bg-[#080808]" : "border-black/5 bg-white"}`}>
                <div className="flex justify-between items-end">
                  <span className={`text-sm font-medium ${isCyberpunk ? "text-[#00f5d4]/50 font-mono uppercase tracking-wider" : "text-zinc-500"}`}>
                    {isCyberpunk ? "TOTAL_COST" : "Subtotal"}
                  </span>
                  <span className={`text-2xl font-semibold tracking-tight ${isCyberpunk ? "text-[#00f5d4] cyber-glow font-mono" : "text-foreground"}`}>
                    ₹{totalAmount.toLocaleString()}
                  </span>
                </div>
                
                {/* Checkout CTA — uses a button + router.push so the cart reliably closes first */}
                <button 
                  onClick={() => handleCheckout('/checkout')}
                  className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all ${
                    isCyberpunk
                      ? "border border-[#00f5d4] text-[#00f5d4] hover:bg-[#00f5d4]/10 font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(0,245,212,0.3)] hover:shadow-[0_0_20px_rgba(0,245,212,0.5)]"
                      : "bg-foreground hover:bg-black text-white rounded-full shadow-sm"
                  }`}
                >
                  {isCyberpunk ? "INITIATE_CHECKOUT" : "Checkout"}
                  <ArrowRight size={16} />
                </button>
                
                {/* Express Pay */}
                <button
                  onClick={() => handleCheckout('/checkout?method=PHONEPE')}
                  className={`w-full py-3 flex items-center justify-center gap-2 text-sm font-medium transition-colors ${
                    isCyberpunk
                      ? "border border-[#00f5d4]/30 text-[#00f5d4]/70 hover:border-[#00f5d4]/60 hover:text-[#00f5d4] font-mono tracking-wider uppercase"
                      : "bg-accent/10 hover:bg-accent/20 text-accent rounded-full"
                  }`}
                >
                  {isCyberpunk ? <Zap size={16} /> : <CreditCard size={16} />}
                  {isCyberpunk ? "FAST_SETTLEMENT.EXE" : "Express Checkout"}
                </button>
                
                <div className="flex justify-center pt-1">
                  <span className={`text-xs flex items-center gap-1.5 ${isCyberpunk ? "text-[#00f5d4]/30 font-mono uppercase tracking-wider" : "text-zinc-400"}`}>
                    <ShieldCheck size={12} />
                    {isCyberpunk ? "AES-256 ENCRYPTED" : "Secure encrypted checkout"}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
