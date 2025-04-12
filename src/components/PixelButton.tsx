
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const PixelButton = ({ 
  children, 
  className, 
  onClick,
  variant = 'primary'
}: PixelButtonProps) => {
  
  const baseClasses = 'pixel-btn cursor-pointer inline-block';
  
  const variantClasses = {
    primary: 'bg-pixel-blue text-black',
    secondary: 'bg-black text-pixel-blue border-2 border-pixel-blue',
  };

  return (
    <button 
      onClick={onClick} 
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
    </button>
  );
};

export default PixelButton;
