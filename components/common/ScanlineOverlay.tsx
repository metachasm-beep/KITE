import React from 'react';
import { cn } from '@/lib/utils';

export const ScanlineOverlay = ({ className }: { className?: string }) => {
  return <div className={cn("scanline-overlay", className)} />;
};
