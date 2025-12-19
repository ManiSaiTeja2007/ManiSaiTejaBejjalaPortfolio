// src/components/common/Loading/LoadingSkeleton.tsx
import { memo } from 'react';

interface SkeletonProps {
  type?: 'card' | 'text' | 'circle' | 'rect';
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number;
}

export const LoadingSkeleton = memo(({ 
  type = 'rect', 
  width = '100%', 
  height = 20, 
  className = '',
  count = 1 
}: SkeletonProps) => {
  const skeletons = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className={`skeleton ${type} ${className}`}
      style={{ width, height }}
      aria-label="Loading..."
    />
  ));

  return <>{skeletons}</>;
});

LoadingSkeleton.displayName = 'LoadingSkeleton';