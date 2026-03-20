"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface VariableWeightProps {
  text: string;
  className?: string;
  initialWeight?: number;
  hoverWeight?: number;
  duration?: number;
}

const VariableWeight: React.FC<VariableWeightProps> = ({
  text,
  className = "",
  initialWeight = 200,
  hoverWeight = 900,
  duration = 0.5,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const letters = text.split("");

  return (
    <div 
      className={`inline-flex flex-wrap overflow-hidden cursor-default ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          animate={{
            fontWeight: isHovered ? hoverWeight : initialWeight,
            scale: isHovered ? 1.02 : 1,
            translateY: isHovered ? -2 : 0,
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            delay: i * 0.05,
          }}
          className="inline-block"
          style={{ 
            fontFamily: "Inter, sans-serif", 
            // Using a font that supports variable weights is key. 
            // Most modern sans-serifs (Inter, Roboto) work well.
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default VariableWeight;
