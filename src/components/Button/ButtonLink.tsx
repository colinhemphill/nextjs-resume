import { VariantProps } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from './Button';

export type ButtonLinkProps = LinkProps &
  VariantProps<typeof buttonVariants> & { className?: string };

export default function ButtonLink({
  children,
  className,
  size,
  ...linkProps
}: PropsWithChildren<ButtonLinkProps>) {
  return (
    <Link
      className={twMerge(buttonVariants({ size }), className)}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
