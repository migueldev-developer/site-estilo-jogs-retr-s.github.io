
import React from 'react';
import PixelText from './PixelText';
import { cn } from '@/lib/utils';

interface PixelSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  id?: string;
}

const PixelSection = ({ 
  children, 
  className,
  title,
  id
}: PixelSectionProps) => {
  
  return (
    <section id={id} className={cn('py-16', className)}>
      <div className="pixel-container">
        {title && (
          <PixelText variant="heading" className="mb-8">{title}</PixelText>
        )}
        {children}
      </div>
    </section>
  );
};

export default PixelSection;
