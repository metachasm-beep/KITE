import React from 'react';
import { cn } from '@/lib/utils';

export const Corner = ({ className }: { className?: string }) => {
  return <div className={cn("corner", className)} />;
};
