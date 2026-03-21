"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/ThreeDCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-1">
          <h3 className="text-2xl font-heading text-foreground">Featured Artifacts</h3>
          <p className="text-sm text-stone-500 font-jost uppercase tracking-widest">Series // 2026.03</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={prev}
            className="p-3 rounded-full border border-black/5 bg-white shadow-sm hover:bg-stone-50 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next}
            className="p-3 rounded-full border border-black/5 bg-white shadow-sm hover:bg-stone-50 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative h-[600px] flex items-center justify-center perspective-1000">
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
              rotateY = 45;
              blur = "blur-sm";
            }
            if (isRight) {
              positionClass = "z-10 scale-75 opacity-40";
              xOffset = "60%";
              rotateY = -45;
              blur = "blur-sm";
            }

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: isRight ? "100%" : isLeft ? "-100%" : "0%" }}
                animate={{ 
                  opacity: isCenter ? 1 : 0.4, 
                  x: xOffset,
                  scale: isCenter ? 1 : 0.75,
                  rotateY: rotateY,
                  zIndex: isCenter ? 30 : 10
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute w-full max-w-sm ${positionClass} ${blur}`}
              >
                <CardContainer className="py-0">
                  <CardBody className="bg-white border border-black/5 rounded-[40px] p-8 shadow-[0_32px_64px_rgba(0,0,0,0.06)]">
                    <CardItem translateZ="100" className="w-full aspect-[4/5] relative rounded-3xl bg-stone-100/50 flex items-center justify-center mb-8 overflow-hidden">
                       <img 
                         src={product.image} 
                         alt={product.title} 
                         className="w-4/5 h-4/5 object-contain mix-blend-multiply"
                       />
                       <div className="absolute top-6 left-6 text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                         {product.category}
                       </div>
                    </CardItem>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <CardItem translateZ="50" className="space-y-1">
                          <h4 className="text-xl font-bold tracking-tight text-foreground">{product.title}</h4>
                          <p className="text-sm font-medium text-stone-500 font-jost">₹{product.price.toLocaleString()}</p>
                        </CardItem>
                        <CardItem translateZ="80">
                           <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-white">
                             <ChevronRight size={18} />
                           </div>
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
