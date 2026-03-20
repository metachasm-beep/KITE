import React from 'react';
import { cn } from '@/lib/utils';

interface HudContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showScanline?: boolean; // Kept for backwards compatibility but ignored visually
}

export const HudContainer = ({ 
  children, 
  className, 
  showScanline = false,
  ...props 
}: HudContainerProps) => {
  return (
    <div className={cn("baselab-card", className)} {...props}>
      {children}
    </div>
  );
};
