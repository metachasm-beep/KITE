"use client";

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Note: GSAP SplitText is a Club GSAP plugin (paid). 
// Since we are using an open-source repo, we should check if they have a workaround 
// or if we should use a simpler approach. 
// In this case, I will implement a simplified version of SplitText using plain spans 
// if the GSAP one is not available or if the user doesn't have a license.
// However, the ReactBits source used 'gsap/SplitText'.

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;

      const letters = ref.current.querySelectorAll('.char');
      
      gsap.fromTo(
        letters,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: ref.current,
            start: `top 80%`,
            once: true,
          },
          onComplete: onLetterAnimationComplete,
        }
      );
    },
    { dependencies: [text, fontsLoaded], scope: ref }
  );

  const Tag = (tag || 'p') as React.ElementType;

  return (
    <Tag 
      ref={ref} 
      style={{ textAlign, wordWrap: 'break-word' }} 
      className={`inline-block whitespace-normal ${className}`}
    >
      {text.split('').map((char, i) => (
        <span 
          key={i} 
          className="char inline-block" 
          style={{ willChange: 'transform, opacity' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
