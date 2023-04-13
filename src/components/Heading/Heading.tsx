import { VariantProps, cva } from 'class-variance-authority';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const headingVariants = cva('font-bold', {
  variants: {
    color: {
      danger: 'text-danger-11',
      neutral: 'text-neutral-12',
      neutralSubtle: 'text-neutral-11',
      primary: 'text-primary-11',
    },
    size: {
      1: 'text-4xl md:text-5xl',
      2: 'text-2xl md:text-3xl',
      3: 'text-xl md:text-2xl',
      4: 'text-lg md:text-xl',
      5: 'text-base md:text-lg',
      6: 'text-sm md:text-base',
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
});

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> &
  VariantProps<typeof headingVariants> & {
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };

export function Heading({
  children,
  className,
  color,
  level,
  size,
}: PropsWithChildren<HeadingProps>) {
  const classes = twMerge(
    headingVariants({ color, size: size || level }),
    className,
  );

  switch (level) {
    case 1: {
      return <h1 className={classes}>{children}</h1>;
    }
    case 2: {
      return <h2 className={classes}>{children}</h2>;
    }
    case 3: {
      return <h3 className={classes}>{children}</h3>;
    }
    case 4: {
      return <h4 className={classes}>{children}</h4>;
    }
    case 5: {
      return <h5 className={classes}>{children}</h5>;
    }
    case 6: {
      return <h6 className={classes}>{children}</h6>;
    }
  }
}
