
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const PixelCard = ({ 
  children, 
  className,
  hoverEffect = false
}: PixelCardProps) => {
  
  const baseClasses = 'pixel-card';
  const hoverClasses = hoverEffect ? 'transition-transform hover:-translate-y-1 hover:translate-x-1' : '';

  return (
    <div className={cn(baseClasses, hoverClasses, className)}>
      {children}
    </div>
  );
};

export default PixelCard;
