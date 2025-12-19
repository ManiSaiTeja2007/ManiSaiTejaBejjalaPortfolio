// src/components/common/Buttons/PrimaryButton.tsx (UPDATED)
import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { buttonVariants } from './button-variants';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export interface ButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

const Spinner = () => (
  <Loader2 className="h-4 w-4 animate-spin" />
);

const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, icon: Icon, iconPosition = 'left', children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && <Spinner />}
        {!loading && Icon && iconPosition === 'left' && (
          <Icon className="mr-2 h-4 w-4" />
        )}
        {children}
        {!loading && Icon && iconPosition === 'right' && (
          <Icon className="ml-2 h-4 w-4" />
        )}
      </button>
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';

// Export ONLY the component
export default PrimaryButton;