import type { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  color?: string
}

export function Heading({ size = 'md', children, asChild, className, color }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2';
  const Color = color ? color : 'text-gray-100'

  return (
    <Comp
      className={clsx(
        'font-bold font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
					'text-3xl': size === 'xl',
          'text-4xl': size === '2xl',
          'text-5xl': size === '3xl',
          'text-6xl': size === '4xl',
        },
        Color,
        className
      )}
    >
      {children}
    </Comp>
  )
}