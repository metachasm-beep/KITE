"use client";

import Link from "next/link";
import { MoveLeft, ShoppingBag, Trash2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function CartPage() {
  // Mock cart items for UI demonstration
  const cartItems = [
    { id: "1", title: "UNIT_01 // VOID FIGURE", price: "₹1,999", qty: 1, series: "SERIES_01" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-48 px-6 overflow-hidden relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Header HUD */}
        <header className="mb-20 space-y-8">
          <div className="flex items-center gap-4">
            <ShoppingBag size={18} className="text-accent" />
            <span className="text-[10px] font-mono font-bold text-zinc-600 tracking-[0.4em] uppercase">SYSTEM_BUFFER // CART_INDEX</span>
          </div>
          
          <h1 className="text-[48px] md:text-[84px] font-heading leading-none tracking-[-0.1em] text-white uppercase">
            ACTIVE <br />
            <span className="text-zinc-800 text-scanline">ALLOCATION</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Item List */}
          <div className="lg:col-span-2 space-y-8">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="hud-container flex flex-col md:flex-row items-center gap-10 group bg-white/[0.01]">
                  <div className="corner" />
                  
                  {/* Thumbnail Placeholder */}
                  <div className="w-32 h-32 bg-[#020202] border border-white/5 flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     <div className="w-8 h-8 border border-accent/20 rotate-45" />
                  </div>

                  <div className="flex-1 space-y-2 text-center md:text-left">
                    <span className="text-[9px] font-mono text-accent tracking-[0.3em] uppercase">{item.series}</span>
                    <h3 className="text-[20px] font-bold text-white tracking-widest uppercase">{item.title}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
                       <div className="flex items-center gap-3">
                         <span className="text-[9px] font-mono text-zinc-600 uppercase">QTY</span>
                         <span className="text-[12px] font-mono text-white px-3 py-1 border border-white/10">{item.qty}</span>
                       </div>
                       <div className="w-px h-4 bg-white/10" />
                       <span className="text-[13px] font-mono text-white">{item.price}</span>
                    </div>
                  </div>

                  <button className="text-zinc-700 hover:text-red-500 transition-colors p-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            ) : (
              <div className="py-32 text-center border border-dashed border-white/5">
                 <span className="text-[11px] font-mono text-zinc-700 tracking-[0.5em] uppercase">BUFFER_EMPTY</span>
              </div>
            )}

            <Link href="/collections" className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] text-zinc-500 hover:text-white transition-colors uppercase pt-10">
              <MoveLeft size={14} />
              <span>RESUME_BROWSING</span>
            </Link>
          </div>

          {/* Checkout Telemetry summary */}
          <aside className="space-y-8">
             <div className="hud-container bg-[#080808]">
                <div className="corner" />
                <div className="space-y-8 p-4">
                   <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                      <span className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase leading-none">ORDER_SUMMARY</span>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="flex justify-between items-center text-[11px] font-mono text-zinc-500 uppercase">
                         <span>SUBTOTAL</span>
                         <span className="text-white">₹1,999</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-zinc-500 uppercase">
                         <span>LOGISTICS_EST</span>
                         <span className="text-white">₹150</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-zinc-500 uppercase">
                         <span>TAX_COORDINATES</span>
                         <span className="text-white">₹360</span>
                      </div>
                      
                      <div className="pt-8 border-t border-white/10 flex justify-between items-end">
                         <span className="text-[12px] font-bold text-white uppercase tracking-widest">TOTAL_ALLOCATION</span>
                         <span className="text-[22px] font-mono text-accent leading-none">₹2,509</span>
                      </div>
                   </div>

                   <button className="btn-hud w-full py-5 text-[12px]">
                     INIT_CHECKOUT_DECRYPTION
                   </button>
                   
                   <div className="flex items-center justify-center gap-2 opacity-30 pt-4">
                      <ShieldCheck size={14} className="text-zinc-600" />
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">SECURE_GATEWAY_v1.2</span>
                   </div>
                </div>
             </div>
          </aside>

        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 opacity-[0.02] pointer-events-none -z-0" 
           style={{ backgroundImage: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 10px)' }} />
    </main>
  );
}
