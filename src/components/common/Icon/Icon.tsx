// src/components/common/Icon/Icon.tsx
import { Icon as IconifyIcon } from '@iconify/react';
import { memo, useMemo } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const iconVariants = cva(
  'inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        default: '',
        rounded: 'rounded-lg',
        square: 'rounded-none',
        circle: 'rounded-full',
      },
      size: {
        xs: 'w-4 h-4',
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-10 h-10',
        xl: 'w-12 h-12',
      },
      color: {
        default: 'text-slate-700 dark:text-slate-300',
        primary: 'text-primary-600 dark:text-primary-400',
        secondary: 'text-secondary-600 dark:text-secondary-400',
        current: 'text-current',
        white: 'text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      color: 'default',
    },
  }
);

// Pre-computed icon mapping
const ICON_MAP = new Map([
  ['react', 'simple-icons:react'],
  ['typescript', 'simple-icons:typescript'],
  ['javascript', 'simple-icons:javascript'],
  ['html5', 'simple-icons:html5'],
  ['css3', 'simple-icons:css3'],
  ['tailwindcss', 'simple-icons:tailwindcss'],
  ['nextjs', 'simple-icons:nextdotjs'],
  ['nodejs', 'simple-icons:nodedotjs'],
  ['express', 'simple-icons:express'],
  ['python', 'simple-icons:python'],
  ['mongodb', 'simple-icons:mongodb'],
  ['firebase', 'simple-icons:firebase'],
  ['git', 'simple-icons:git'],
  ['github', 'simple-icons:github'],
  ['docker', 'simple-icons:docker'],
  ['aws', 'simple-icons:amazonaws'],
  ['arduino', 'simple-icons:arduino'],
  ['c', 'simple-icons:c'],
  ['cpp', 'simple-icons:cplusplus'],
  ['java', 'simple-icons:java'],
]);

const iconCache = new Map<string, string>();

const normalizeTechName = (techName: string): string => {
  return techName.toLowerCase().replace(/[^a-z0-9]/g, '');
};

interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  color?: 'default' | 'primary' | 'secondary' | 'current' | 'white';
  variant?: 'default' | 'rounded' | 'square' | 'circle';
}

export const TechIcon = memo(({ 
  name, 
  size = 'md', 
  className = '', 
  color = 'default',
  variant = 'default'
}: IconProps) => {
  const iconName = useMemo(() => {
    const normalized = normalizeTechName(name);
    
    if (iconCache.has(normalized)) {
      return iconCache.get(normalized)!;
    }
    
    const foundIcon = ICON_MAP.get(normalized) || 'simple-icons:code';
    iconCache.set(normalized, foundIcon);
    
    return foundIcon;
  }, [name]);
  
  const iconSize = typeof size === 'number' ? size : 
    size === 'xs' ? 16 :
    size === 'sm' ? 20 :
    size === 'md' ? 24 :
    size === 'lg' ? 32 : 40;

  const sizeClass = typeof size === 'string' ? size : undefined;

  return (
    <div className={cn(iconVariants({ variant, size: sizeClass, color, className }))}>
      <IconifyIcon 
        icon={iconName} 
        width={iconSize}
        height={iconSize}
        className="current-color"
      />
    </div>
  );
});

TechIcon.displayName = 'TechIcon';