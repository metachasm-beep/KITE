import React from 'react';
import { cn } from '@/lib/utils';

interface TechnicalLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  value?: string;
}

export const TechnicalLabel = ({ 
  label, 
  value, 
  className, 
  ...props 
}: TechnicalLabelProps) => {
  return (
    <span 
      className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground/80 tracking-wide", className)} 
      {...props}
    >
      {label} {value && <span className="opacity-60 text-accent ml-1">{value}</span>}
    </span>
  );
};
