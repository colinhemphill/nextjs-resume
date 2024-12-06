import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 font-semibold',
  {
    variants: {
      color: {
        neutral: '',
        accent: '',
        danger: '',
      },
      size: {
        sm: 'h-9 px-3 text-sm [&_svg]:size-4',
        md: 'h-10 px-4 py-2 text-base [&_svg]:size-5',
        lg: 'h-11 px-8 text-lg [&_svg]:size-6',
        xl: 'h-14 px-12 text-xl [&_svg]:size-6',
        icon: 'h-10 w-10 [&_svg]:size-5',
      },
      variant: {
        solid: '',
        outline: 'border',
      },
    },
    compoundVariants: [
      // SOLIDS
      {
        color: 'neutral',
        variant: 'solid',
        class:
          'bg-neutral-6 text-neutral-12 ring-neutral-11 hocus:bg-neutral-7',
      },
      {
        color: 'accent',
        variant: 'solid',
        class: 'bg-accent-6 text-neutral-12 ring-accent-11 hocus:bg-accent-7',
      },
      {
        color: 'danger',
        variant: 'solid',
        class: 'bg-error-6 text-neutral-12 ring-error-11 hocus:bg-error-7',
      },
      // OUTLINES
      {
        color: 'neutral',
        variant: 'outline',
        class:
          'border-neutral-7 bg-neutral-1 text-neutral-11 ring-neutral-8 hocus:border-neutral-8',
      },
      {
        color: 'accent',
        variant: 'outline',
        class:
          'border-accent-7 bg-accent-1 text-accent-11 ring-accent-8 hocus:border-accent-8',
      },
      {
        color: 'danger',
        variant: 'outline',
        class:
          'border-error-7 bg-error-1 text-error-11 ring-error-8 hocus:border-error-8',
      },
    ],
    defaultVariants: {
      color: 'accent',
      size: 'md',
      variant: 'solid',
    },
  },
);

type ButtonProperties = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = forwardRef<HTMLButtonElement, ButtonProperties>(
  (
    {
      asChild = false,
      children,
      className,
      color,
      size,
      variant,
      ...properties
    },
    reference,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={twMerge(buttonVariants({ color, size, variant }), className)}
        ref={reference}
        {...properties}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants, type ButtonProperties as ButtonProps };
