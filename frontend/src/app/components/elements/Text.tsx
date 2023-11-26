import type { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
    color?: string;
  }
  
  export function Text({ size = 'md', children, asChild, className, color }: TextProps) {
    const Comp = asChild ? Slot : 'span';
    const Color = color ?? 'text-gray-100';
  
    return (
      <Comp
        className={clsx(
          'font-sans',
          {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-base': size === 'lg',
          },
          className,
          Color
        )}
      >
        {children}
      </Comp>
    )
  }