"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, CreditCard } from 'lucide-react';
import { useCart } from '@/lib/contexts/CartContext';
import { HudContainer } from '../common/HudContainer';
import { TechnicalLabel } from '../common/TechnicalLabel';
import { SystemButton } from '../common/SystemButton';

export const CartDrawer = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, totalAmount } = useCart();

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-background border-l border-black/10 z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-black/10 flex items-center justify-between bg-muted">
              <div className="flex items-center gap-4">
                <ShoppingBag size={20} className="text-accent" />
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground uppercase">Shopping Cart</h2>
                  <TechnicalLabel label="STATUS" value="READY" className="text-zinc-400" />
                </div>
              </div>
              <button 
                onClick={toggleCart}
                className="p-2 hover:bg-black/5 border border-transparent hover:border-black/10 transition-all group"
              >
                <X size={20} className="text-zinc-400 group-hover:text-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40">
                  <ShoppingBag size={48} className="text-zinc-200" />
                  <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Your cart is empty</p>
                  <SystemButton onClick={toggleCart} className="px-8 py-3 text-[10px]">
                    Continue Shopping
                  </SystemButton>
                </div>
              ) : (
                items.map((item) => (
                  <HudContainer key={item.id} className="p-4 flex gap-6 group hover:border-accent/20 transition-colors bg-white">
                    <div className="w-24 aspect-square bg-muted border border-black/5 relative overflow-hidden flex items-center justify-center p-2">
                       {item.media.src ? (
                         <img src={item.media.src} alt={item.title} className="w-full h-full object-contain" />
                       ) : (
                         <div className="w-full h-full border border-black/5 opacity-50 flex items-center justify-center">
                            <div className="w-2 h-2 bg-zinc-200 rounded-full" />
                         </div>
                       )}
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-foreground tracking-tight uppercase">{item.title}</h3>
                          <p className="text-zinc-500 text-[10px] mt-1">Price: {item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-zinc-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center border border-black/10 bg-white">
                           <button 
                             onClick={() => updateQuantity(item.id, item.quantity - 1)}
                             className="p-1 hover:bg-black/5 transition-colors text-zinc-400 hover:text-foreground"
                           >
                             <Minus size={14} />
                           </button>
                           <span className="px-3 text-xs font-mono text-foreground min-w-[30px] text-center">{item.quantity}</span>
                           <button 
                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
                             className="p-1 hover:bg-black/5 transition-colors text-zinc-400 hover:text-foreground"
                           >
                             <Plus size={14} />
                           </button>
                        </div>
                        <span className="text-sm font-bold text-accent font-mono">
                          ₹{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </HudContainer>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-black/10 space-y-6 bg-muted">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Total Price</span>
                    <span className="text-3xl font-mono text-foreground tracking-tighter">
                      ₹{totalAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-px bg-accent/10 w-full" />
                </div>
                
                <SystemButton href="/checkout" onClick={toggleCart} className="w-full py-6 flex items-center justify-center gap-3">
                  CHECKOUT
                  <ArrowRight size={16} />
                </SystemButton>
                
                <SystemButton 
                  href="/checkout?method=PHONEPE" 
                  onClick={toggleCart}
                  className="w-full py-4 border-accent/20 bg-accent/5 hover:bg-accent/10 text-accent flex items-center justify-center gap-3 text-[10px]"
                >
                  FAST SETTLEMENT
                  <CreditCard size={14} />
                </SystemButton>
                
                <div className="flex justify-center">
                  <TechnicalLabel label="SECURE_TRANSMISSION" value="ENABLED" className="text-[7px] text-zinc-800" />
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
