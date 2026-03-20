"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Cpu, Network, Activity, Database, Crosshair } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-white flex flex-col justify-center overflow-hidden pt-32 pb-20">
      {/* Background Soft Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft abstract blurs instead of scanlines */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-muted/50 blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-accent/5 blur-3xl opacity-60 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-black/5 mb-8"
        >
           <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
           <span className="text-xs font-medium text-zinc-600 tracking-wide">BaseLab Collection 01 Available</span>
        </motion.div>

        {/* Huge Title */}
        <div className="relative mb-8 w-full max-w-5xl mx-auto flex justify-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-semibold leading-[0.9] tracking-tight text-foreground"
          >
            Refined <br className="hidden md:block" />
            <span className="text-zinc-300">Essentials</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl font-medium text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Discover premium, minimalist hardware designed for modern living. We bridge the gap between architectural form and everyday utility.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link 
            href="/collections" 
            className="px-8 py-4 bg-foreground text-white rounded-full font-medium hover:bg-black transition-colors w-full sm:w-auto shadow-sm"
          >
            Explore the Shop
          </Link>
          <Link 
            href="/system" 
            className="px-8 py-4 bg-muted text-foreground rounded-full font-medium hover:bg-black/5 transition-colors w-full sm:w-auto border border-black/5"
          >
            Our Story
          </Link>
        </motion.div>

        {/* Minimal Hero Graphic / Product Hint */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="mt-20 w-full max-w-4xl max-h-[400px] h-64 md:h-96 bg-muted/30 rounded-3xl border border-black/5 flex items-center justify-center relative overflow-hidden"
        >
           {/* Abstract minimalist geometry */ }
           <div className="absolute w-[80%] h-[80%] border border-black/5 rounded-full" />
           <div className="absolute w-[60%] h-[60%] border border-black/5 rounded-full bg-white/50 backdrop-blur-sm" />
           <div className="absolute w-24 h-24 bg-white shadow-xl rounded-2xl rotate-12 flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-zinc-200 rounded-full" />
           </div>
        </motion.div>

      </div>
    </section>
  );
}
