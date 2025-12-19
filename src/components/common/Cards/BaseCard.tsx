// src/components/common/Cards/BaseCard.tsx
import { forwardRef, type HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cva } from 'class-variance-authority';

const cardVariants = cva(
  'bg-card rounded-xl shadow-lg overflow-hidden transition-all duration-300',
  {
    variants: {
      elevation: {
        none: 'shadow-none',
        low: 'shadow-sm',
        medium: 'shadow-md',
        high: 'shadow-lg',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      hoverable: {
        true: 'hover:shadow-xl cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      elevation: 'medium',
      padding: 'md',
      hoverable: false,
    },
  }
);

interface BaseCardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: 'none' | 'low' | 'medium' | 'high';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  animateOnHover?: boolean;
  children: React.ReactNode;
}

const BaseCard = forwardRef<HTMLDivElement, BaseCardProps>(
  ({ 
    className, 
    elevation, 
    padding, 
    hoverable, 
    animateOnHover = true,
    children, 
    ...props 
  }, ref) => {
    const cardContent = (
      <div
        ref={ref}
        className={cardVariants({ elevation, padding, hoverable, className })}
        {...props}
      >
        {children}
      </div>
    );

    return animateOnHover && hoverable ? (
      <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
        {cardContent}
      </motion.div>
    ) : (
      cardContent
    );
  }
);

BaseCard.displayName = 'BaseCard';

export { BaseCard };