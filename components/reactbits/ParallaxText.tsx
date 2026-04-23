"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxTextProps {
  children: string;
  className?: string;
  direction?: "left" | "right";
  baseVelocity?: number;
}

export default function ParallaxText({ 
  children, 
  className, 
  direction = "left",
  baseVelocity = 5 
}: ParallaxTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === "left" ? [0, -200] : [-200, 0]
  );

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap flex py-4">
      <motion.div style={{ x }} className={cn("flex whitespace-nowrap", className)}>
        <span className="mr-8">{children}</span>
        <span className="mr-8">{children}</span>
        <span className="mr-8">{children}</span>
        <span className="mr-8">{children}</span>
      </motion.div>
    </div>
  );
}
