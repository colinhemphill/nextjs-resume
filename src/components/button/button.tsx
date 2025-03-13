import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from 'src/helpers/utilities';

const buttonVariants = cva(
  'inline-flex max-w-full items-center justify-center gap-2 rounded-md font-medium text-wrap whitespace-nowrap transition focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      color: {
        neutral: '',
        accent: '',
        danger: '',
      },
      size: {
        sm: 'px-3 py-1 text-sm [&_svg]:size-3',
        md: 'px-4 py-2 text-base [&_svg]:size-4',
        lg: 'px-8 py-3 text-lg [&_svg]:size-5',
        xl: 'px-12 py-4 text-xl [&_svg]:size-6',
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
        class: 'bg-danger-6 text-neutral-12 ring-danger-11 hocus:bg-danger-7',
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
          'border-danger-7 bg-danger-1 text-danger-11 ring-danger-8 hocus:border-danger-8',
      },
    ],
    defaultVariants: {
      color: 'accent',
      size: 'md',
      variant: 'solid',
    },
  },
);

export type ButtonProperties = ButtonHTMLAttributes<HTMLButtonElement> &
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
        className={cn(buttonVariants({ color, size, variant }), className)}
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
