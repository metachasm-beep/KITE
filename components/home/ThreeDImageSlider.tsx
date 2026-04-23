"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/ThreeDCard";
import { ChevronLeft, ChevronRight, Terminal } from "lucide-react";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  { id: "01", title: "Figure One", price: 1499, image: "/images/wmremove-transformed.png", category: "COLLECTION_01" },
  { id: "02", title: "Neurostat", price: 2499, image: "/images/wmremove-transformed.png", category: "COLLECTION_01" },
  { id: "03", title: "Core Unit", price: 1899, image: "/images/wmremove-transformed.png", category: "COLLECTION_02" },
  { id: "04", title: "Fragment", price: 999, image: "/images/wmremove-transformed.png", category: "COLLECTION_02" },
];

export function ThreeDImageSlider() {
  const { isCyberpunk } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <h3 className={`text-2xl font-michroma font-bold ${isCyberpunk ? "text-accent cyber-glow" : "text-foreground"}`}>
            {isCyberpunk ? "// FEATURED_ARTIFACTS" : "Featured Artifacts"}
          </h3>
          <p className={`text-[9px] font-mono uppercase tracking-[0.4em] ${isCyberpunk ? "text-accent/40" : "text-stone-500"}`}>
            {isCyberpunk ? "VERSION // 2026.03.R4" : "Series // 2026.03"}
          </p>
        </div>
        <div className="flex gap-6">
          <button 
            onClick={prev}
            className={`p-4 transition-all duration-500 mechanical-bracket
              ${isCyberpunk 
                ? "bg-accent/5 border-accent/20 text-accent hover:bg-accent/20" 
                : "bg-white border-black/5 text-foreground hover:bg-stone-50"}`}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next}
            className={`p-4 transition-all duration-500 mechanical-bracket
              ${isCyberpunk 
                ? "bg-accent/5 border-accent/20 text-accent hover:bg-accent/20" 
                : "bg-white border-black/5 text-foreground hover:bg-stone-50"}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative h-[500px] flex items-center justify-center perspective-1000">
        <AnimatePresence mode="popLayout">
          {products.map((product, index) => {
            const isCenter = index === currentIndex;
            const isLeft = index === (currentIndex - 1 + products.length) % products.length;
            const isRight = index === (currentIndex + 1) % products.length;

            if (!isCenter && !isLeft && !isRight) return null;

            let positionClass = "z-20 scale-100 opacity-100";
            let xOffset = "0%";
            let rotateY = 0;
            let blur = "blur-0";

            if (isLeft) {
              positionClass = "z-10 scale-75 opacity-40";
              xOffset = "-60%";
              rotateY = 35;
              blur = "blur-sm";
            }
            if (isRight) {
              positionClass = "z-10 scale-75 opacity-40";
              xOffset = "60%";
              rotateY = -35;
              blur = "blur-sm";
            }

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: isRight ? "100%" : isLeft ? "-100%" : "0%" }}
                animate={{ 
                  opacity: isCenter ? 1 : 0.3, 
                  x: xOffset,
                  scale: isCenter ? 1 : 0.7,
                  rotateY: rotateY,
                  zIndex: isCenter ? 30 : 10
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 1, ease: "easeOutExpo" }}
                className={`absolute w-full max-w-sm ${positionClass} ${blur}`}
              >
                <CardContainer className="py-0">
                  <CardBody className={`border transition-all duration-700 p-8 mechanical-bracket
                    ${isCyberpunk 
                      ? "bg-background/80 backdrop-blur-xl border-accent/10 shadow-[0_0_40px_rgba(0,245,212,0.05)]" 
                      : "bg-white border-black/5 shadow-2xl rounded-[40px]"}`}>
                    
                    <CardItem translateZ="100" className={`w-full aspect-[4/5] relative flex items-center justify-center mb-8 overflow-hidden transition-all duration-700
                      ${isCyberpunk ? "bg-accent/5 border border-accent/10" : "bg-stone-100/50 rounded-3xl"}`}>
                       <img 
                         src={product.image} 
                         alt={product.title} 
                         className={`w-4/5 h-4/5 object-contain transition-all duration-700 ${isCyberpunk ? "brightness-125 saturate-0 group-hover:saturate-100" : "mix-blend-multiply"}`}
                       />
                       <div className={`absolute top-6 left-6 text-[10px] font-mono tracking-widest uppercase
                         ${isCyberpunk ? "text-accent/30" : "text-stone-400"}`}>
                         {product.category}
                       </div>
                       {isCyberpunk && <div className="absolute inset-0 scanline opacity-20" />}
                    </CardItem>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <CardItem translateZ="50" className="space-y-1">
                          <h4 className={`text-2xl font-bold tracking-tight ${isCyberpunk ? "text-accent font-michroma uppercase" : "text-foreground font-heading"}`}>
                            {product.title}
                          </h4>
                          <p className={`text-sm font-medium tracking-widest ${isCyberpunk ? "text-accent/40 font-mono" : "text-stone-500 font-jost"}`}>
                            {isCyberpunk ? `CRED_VALUE // ${product.price.toLocaleString()}` : `₹${product.price.toLocaleString()}`}
                          </p>
                        </CardItem>
                        <CardItem translateZ="80">
                           <button className={`w-12 h-12 flex items-center justify-center transition-all duration-500 mechanical-bracket
                             ${isCyberpunk ? "bg-accent text-black hover:scale-110" : "bg-foreground text-white hover:bg-black rounded-full"}`}>
                             <ChevronRight size={20} />
                           </button>
                        </CardItem>
                      </div>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
