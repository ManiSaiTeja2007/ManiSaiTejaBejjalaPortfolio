// src/components/common/Loading/LoadingSpinner.tsx
import { memo } from 'react';
import { Loader2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  className?: string;
  label?: string;
  Icon?: LucideIcon;
}

export const LoadingSpinner = memo(({
  size = 24,
  color = 'currentColor',
  className = '',
  label = 'Loading...',
  Icon = Loader2
}: LoadingSpinnerProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Icon 
        className="animate-spin" 
        size={size} 
        color={color}
        aria-label={label}
      />
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';