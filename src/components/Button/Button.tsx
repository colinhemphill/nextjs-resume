import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const buttonVariants = cva(
  'flex items-center justify-center gap-2 rounded-md border-2 border-accent-7 bg-accent-1 font-medium text-accent-11 no-underline outline-none transition hover:border-accent-8 focus:border-transparent focus:bg-accent-9 focus:text-accentContrast focus:ring-4 focus:ring-accent-6 hover:focus:border-transparent',
  {
    variants: {
      size: {
        sm: 'text-sm py-1 px-4',
        md: 'text-base py-2 px-6',
        lg: 'text-lg py-3 px-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  children,
  className,
  size,
  ...buttonProps
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={twMerge(buttonVariants({ size }), className)}
      type="button"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
