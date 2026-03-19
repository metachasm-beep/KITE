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
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-[#050505] border-l border-white/10 z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/10 flex items-center justify-between bg-black">
              <div className="flex items-center gap-4">
                <ShoppingBag size={20} className="text-accent" />
                <div className="space-y-1">
                  <h2 className="text-2xl font-heading tracking-tight text-white uppercase">UNIT_CART</h2>
                  <TechnicalLabel label="STATUS" value="SYNCHRONIZED" className="text-zinc-500" />
                </div>
              </div>
              <button 
                onClick={toggleCart}
                className="p-2 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
              >
                <X size={20} className="text-zinc-500 group-hover:text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40">
                  <ShoppingBag size={48} className="text-zinc-800" />
                  <TechnicalLabel label="CART_EMPTY" className="text-zinc-700" />
                  <SystemButton onClick={toggleCart} className="px-8 py-3 text-[10px]">
                    RESUME_ACQUISITION
                  </SystemButton>
                </div>
              ) : (
                items.map((item) => (
                  <HudContainer key={item.id} className="p-4 flex gap-6 group hover:border-accent/20 transition-colors">
                    <div className="w-24 aspect-square bg-black border border-white/5 relative overflow-hidden flex items-center justify-center p-2">
                       {item.media.src ? (
                         <img src={item.media.src} alt={item.title} className="w-full h-full object-contain opacity-80" />
                       ) : (
                         <div className="w-full h-full border border-white/5 opacity-50 flex items-center justify-center">
                            <div className="w-2 h-2 bg-zinc-800 rounded-full" />
                         </div>
                       )}
                       <TechnicalLabel label={item.slug.slice(0, 4)} className="absolute bottom-1 right-1 text-[6px] text-zinc-800" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-white tracking-tight uppercase">{item.title}</h3>
                          <TechnicalLabel label="UNIT_PRICE" value={item.price} className="text-zinc-500 text-[9px] mt-1" />
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-zinc-700 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center border border-white/10 bg-black">
                           <button 
                             onClick={() => updateQuantity(item.id, item.quantity - 1)}
                             className="p-1 hover:bg-white/5 transition-colors text-zinc-500 hover:text-white"
                           >
                             <Minus size={14} />
                           </button>
                           <span className="px-3 text-xs font-mono text-white min-w-[30px] text-center">{item.quantity}</span>
                           <button 
                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
                             className="p-1 hover:bg-white/5 transition-colors text-zinc-500 hover:text-white"
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
              <div className="p-8 border-t border-white/10 space-y-6 bg-black">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <TechnicalLabel label="TOTAL_ALLOCATION" className="text-zinc-500" />
                    <span className="text-3xl font-mono text-white tracking-tighter">
                      ₹{totalAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-px bg-accent/10 w-full" />
                </div>
                
                <SystemButton href="/checkout" onClick={toggleCart} className="w-full py-6 flex items-center justify-center gap-3">
                  INIT_CHECKOUT_PROTOCOL
                  <ArrowRight size={16} />
                </SystemButton>
                
                <SystemButton 
                  href="/checkout?method=PHONEPE" 
                  onClick={toggleCart}
                  className="w-full py-4 border-accent/20 bg-accent/5 hover:bg-accent/10 text-accent flex items-center justify-center gap-3 text-[10px]"
                >
                  FAST_SETTLEMENT (PHONEPE)
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
