import { PropsWithChildren } from 'react';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  level: Level;
  size?: Level;
}

const sizes = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
  5: 'text-lg',
  6: 'text-base',
};

const Heading: React.FC<PropsWithChildren<HeadingProps>> = ({
  children,
  level,
  size,
}) => {
  const baseClasses = 'font-bold';
  const sizeClasses = sizes[size || level];

  switch (level) {
    case 1: {
      return <h1 className={`${baseClasses} ${sizeClasses}`}>{children}</h1>;
    }
    case 2: {
      return <h2 className={`${baseClasses} ${sizeClasses}`}>{children}</h2>;
    }
    case 3: {
      return <h3 className={`${baseClasses} ${sizeClasses}`}>{children}</h3>;
    }
    case 4: {
      return <h4 className={`${baseClasses} ${sizeClasses}`}>{children}</h4>;
    }
    case 5: {
      return <h5 className={`${baseClasses} ${sizeClasses}`}>{children}</h5>;
    }
    case 6: {
      return <h6 className={`${baseClasses} ${sizeClasses}`}>{children}</h6>;
    }
  }
};

export default Heading;
