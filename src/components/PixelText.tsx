
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'normal' | 'heading' | 'subheading';
  animate?: 'blink' | 'float' | 'pulse' | 'none';
}

const PixelText = ({ 
  children, 
  className, 
  variant = 'normal',
  animate = 'none'
}: PixelTextProps) => {
  
  const baseClasses = 'text-pixel-blue';
  
  const variantClasses = {
    normal: 'font-pixel-mono text-lg',
    heading: 'font-pixel text-3xl md:text-4xl uppercase tracking-wider',
    subheading: 'font-pixel text-xl md:text-2xl uppercase',
  };

  const animationClasses = {
    blink: 'animate-pixel-blink',
    float: 'animate-pixel-float',
    pulse: 'animate-pixel-pulse',
    none: '',
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], animationClasses[animate], className)}>
      {children}
    </div>
  );
};

export default PixelText;
