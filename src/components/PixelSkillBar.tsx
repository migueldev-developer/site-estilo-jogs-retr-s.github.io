
import { cn } from '@/lib/utils';

interface PixelSkillBarProps {
  name: string;
  level: number; // 0-100
  className?: string;
}

const PixelSkillBar = ({ 
  name, 
  level, 
  className 
}: PixelSkillBarProps) => {
  
  // Ensure level is between 0-100
  const normalizedLevel = Math.max(0, Math.min(100, level));
  
  // Convert level to segments (5 segments total)
  const segments = 10;
  const filledSegments = Math.round((normalizedLevel / 100) * segments);

  return (
    <div className={cn('mb-4', className)}>
      <div className="flex justify-between mb-1">
        <span className="font-pixel text-xs text-pixel-blue">{name}</span>
        <span className="font-pixel-mono text-pixel-blue-light">{normalizedLevel}%</span>
      </div>
      <div className="flex space-x-1">
        {[...Array(segments)].map((_, i) => (
          <div 
            key={i}
            className={cn(
              'h-4 flex-1 border border-pixel-blue',
              i < filledSegments ? 'bg-pixel-blue' : 'bg-transparent'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelSkillBar;
