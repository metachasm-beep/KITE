"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 200,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = '0px',
  textAlign = 'left',
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  // useInView from framer-motion
  const isInView = useInView(ref, { once: true, amount: threshold, margin: rootMargin as any });

  useEffect(() => {
    if (isInView) {
      setInView(true);
    }
  }, [isInView]);

  const defaultVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: direction === 'top' ? -50 : 50 },
    visible: { filter: 'blur(0px)', opacity: 1, y: 0 },
  };

  const handleAnimationComplete = () => {
    animatedCount.current += 1;
    if (animatedCount.current === elements.length && onAnimationComplete) {
      onAnimationComplete();
    }
  };

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`} style={{ textAlign }}>
      {elements.map((el, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={defaultVariants}
          transition={{
            duration: 1.2,
            delay: index * (delay / 1000),
            ease: [0.16, 1, 0.3, 1],
          }}
          onAnimationComplete={handleAnimationComplete}
          className="inline-block"
        >
          {el === ' ' ? '\u00A0' : el}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
