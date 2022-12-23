import { PropsWithChildren } from 'react';

const colorVariants = {
  accent11: 'text-accent-light-11 dark:text-accent-dark-11',
  accent12: 'text-accent-light-12 dark:text-accent-dark-12',
  error11: 'text-red-light-12 dark:text-red-dark-11',
  error12: 'text-red-light-12 dark:text-red-dark-12',
  neutral11: 'text-neutral-light-11 dark:text-neutral-dark-11',
  neutral12: 'text-neutral-light-12 dark:text-neutral-dark-12',
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
        <h1 className={`${baseClasses} ${colorClasses} ${sizeClasses}`}>
          {children}
        </h1>
      );
    }
    case 2: {
      return (
        <h2 className={`${baseClasses} ${colorClasses} ${sizeClasses}`}>
          {children}
        </h2>
      );
    }
    case 3: {
      return (
        <h3 className={`${baseClasses} ${colorClasses} ${sizeClasses}`}>
          {children}
        </h3>
      );
    }
    case 4: {
      return (
        <h4 className={`${baseClasses} ${colorClasses} ${sizeClasses}`}>
          {children}
        </h4>
      );
    }
    case 5: {
      return (
        <h5 className={`${baseClasses} ${colorClasses} ${sizeClasses}`}>
          {children}
        </h5>
      );
    }
    case 6: {
      return (
        <h6 className={`${baseClasses} ${colorClasses} ${sizeClasses}`}>
          {children}
        </h6>
      );
    }
  }
};
