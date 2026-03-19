import React from 'react';
import { cn } from '@/lib/utils';

interface HudContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showScanline?: boolean;
}

export const HudContainer = ({ 
  children, 
  className, 
  showScanline = false,
  ...props 
}: HudContainerProps) => {
  return (
    <div className={cn("hud-container", className)} {...props}>
      <div className="corner" />
      {showScanline && <div className="scanline-overlay" />}
      {children}
    </div>
  );
};
