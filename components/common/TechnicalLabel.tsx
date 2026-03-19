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
      className={cn("text-telemetry uppercase flex items-center gap-2", className)} 
      {...props}
    >
      {label} {value && <span className="opacity-60">// {value}</span>}
    </span>
  );
};
