"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
  sentence: string;
  focusRadius?: number;
  unfocusedAlpha?: number;
  className?: string;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence,
  focusRadius = 150,
  unfocusedAlpha = 0.2,
  className = "",
  textAlign = "left",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const words = useMemo(() => sentence.split(" "), [sentence]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none ${className}`}
      style={{ textAlign, position: "relative", display: "inline-block" }}
    >
      <div className="flex flex-wrap items-center">
        {words.map((word, i) => {
          const wordRef = useRef<HTMLSpanElement>(null);
          const [isWordFocused, setIsWordFocused] = useState(false);

          useEffect(() => {
            if (!wordRef.current || !isHovered) {
              setIsWordFocused(false);
              return;
            }
            const rect = wordRef.current.getBoundingClientRect();
            const containerRect = containerRef.current!.getBoundingClientRect();
            const wordX = rect.left - containerRect.left + rect.width / 2;
            const wordY = rect.top - containerRect.top + rect.height / 2;
            
            const dist = Math.sqrt(
              Math.pow(mousePos.x - wordX, 2) + Math.pow(mousePos.y - wordY, 2)
            );
            
            setIsWordFocused(dist < focusRadius);
          }, [mousePos, isHovered, focusRadius]);

          return (
            <motion.span
              ref={wordRef}
              key={i}
              className="inline-block px-1 py-1"
              animate={{
                filter: isWordFocused ? "blur(0px)" : "blur(4px)",
                opacity: isWordFocused ? 1 : unfocusedAlpha,
                scale: isWordFocused ? 1.05 : 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default TrueFocus;
