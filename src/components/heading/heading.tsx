import { cva, type VariantProps } from 'class-variance-authority';
import {
  ReactNode,
  type DetailedHTMLProps,
  type HTMLAttributes,
  type PropsWithChildren,
} from 'react';
import { cn } from 'src/helpers/utilities';

export const headingVariants = cva('font-sans font-bold text-balance', {
  variants: {
    color: {
      current: 'text-current',
      neutral: 'text-neutral-12',
      muted: 'text-neutral-11',
      accent: 'text-accent-11',
      danger: 'text-danger-11',
    },
    size: {
      1: 'text-4xl md:text-5xl',
      2: 'text-3xl md:text-4xl',
      3: 'text-2xl md:text-3xl',
      4: 'text-xl md:text-2xl',
      5: 'text-lg md:text-xl',
      6: 'text-base md:text-lg',
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
});

export type HeadingProperties = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> &
  VariantProps<typeof headingVariants> & {
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };

function Heading({
  children,
  className,
  color,
  level,
  size,
}: PropsWithChildren<HeadingProperties>): ReactNode {
  const classes = cn(
    headingVariants({ color, size: size ?? level }),
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

export { Heading };
