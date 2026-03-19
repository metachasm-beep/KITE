import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SystemButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const SystemButton = ({ 
  children, 
  href, 
  className, 
  variant = 'primary',
  ...props 
}: SystemButtonProps) => {
  const baseClasses = "btn-hud group";
  
  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(baseClasses, className)} {...props}>
      {children}
    </button>
  );
};
