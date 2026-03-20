import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SystemButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

import { motion } from 'framer-motion';

export const SystemButton = ({ 
  children, 
  href, 
  className, 
  variant = 'primary',
  ...props 
}: SystemButtonProps) => {
  const baseClasses = variant === 'secondary' ? "baselab-button-secondary group" : "baselab-button group";
  
  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 10
  };

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={springTransition}
        className="inline-block"
      >
        <Link href={href} className={cn(baseClasses, className)}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={springTransition}
      className={cn(baseClasses, className)} 
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
