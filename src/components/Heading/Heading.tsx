import clsx from 'clsx';
import { PropsWithChildren } from 'react';

const colorVariants = {
  accent11: 'text-accent-11',
  accent12: 'text-accent-12',
  error11: 'text-red-light-12',
  error12: 'text-red-light-12',
  neutral11: 'text-neutral-11',
  neutral12: 'text-neutral-12',
};

const sizeVariants = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
  5: 'text-lg',
  6: 'text-base',
};

export interface HeadingProps {
  color?: keyof typeof colorVariants;
  level: keyof typeof sizeVariants;
  size?: keyof typeof sizeVariants;
}

export const Heading: React.FC<PropsWithChildren<HeadingProps>> = ({
  children,
  color = 'neutral12',
  level,
  size,
}) => {
  const baseClasses = 'font-bold';
  const colorClasses = colorVariants[color];
  const sizeClasses = sizeVariants[size || level];

  switch (level) {
    case 1: {
      return (
        <h1 className={clsx(baseClasses, colorClasses, sizeClasses)}>
          {children}
        </h1>
      );
    }
    case 2: {
      return (
        <h2 className={clsx(baseClasses, colorClasses, sizeClasses)}>
          {children}
        </h2>
      );
    }
    case 3: {
      return (
        <h3 className={clsx(baseClasses, colorClasses, sizeClasses)}>
          {children}
        </h3>
      );
    }
    case 4: {
      return (
        <h4 className={clsx(baseClasses, colorClasses, sizeClasses)}>
          {children}
        </h4>
      );
    }
    case 5: {
      return (
        <h5 className={clsx(baseClasses, colorClasses, sizeClasses)}>
          {children}
        </h5>
      );
    }
    case 6: {
      return (
        <h6 className={clsx(baseClasses, colorClasses, sizeClasses)}>
          {children}
        </h6>
      );
    }
  }
};
