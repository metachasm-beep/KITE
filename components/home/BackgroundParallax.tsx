"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface BackgroundParallaxProps {
  children: React.ReactNode;
}

export function BackgroundParallax({ children }: BackgroundParallaxProps) {
  const ref = useRef(null);
  const { isCyberpunk } = useTheme();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Background layers movement
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
      {/* Parallax Layer 1 */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <div className={`w-[150%] h-[150%] opacity-20 transition-colors duration-1000
          ${isCyberpunk ? "cyber-grid bg-accent/[0.02]" : "bg-stone-100"}`} 
          style={{ 
            backgroundImage: !isCyberpunk ? 'radial-gradient(circle, #000 1px, transparent 1px)' : undefined, 
            backgroundSize: '80px 80px' 
          }}
        />
      </motion.div>

      {/* Parallax Layer 2 */}
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <div className={`w-[120%] h-[120%] transition-colors duration-1000
          ${isCyberpunk 
            ? "border-[40px] border-accent/[0.03] rounded-full blur-3xl" 
            : "border-[100px] border-stone-200/[0.1] rounded-full blur-[100px]"}`} 
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
