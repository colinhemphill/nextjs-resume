import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

type HtmlButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const sizeVariants = {
  sm: 'text-sm py-1 px-4',
  md: 'text-base py-2 px-6',
  lg: 'text-lg py-3 px-8',
};

interface ButtonProps extends HtmlButtonProps {
  size?: keyof typeof sizeVariants;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  size = 'md',
  ...rest
}) => {
  const sizeClasses = sizeVariants[size];

  return (
    <button
      className={`rounded-md border-2 border-accent-light-7 bg-accent-light-1 font-medium text-accent-light-11 outline-none transition hover:border-accent-light-8 focus:border-transparent focus:bg-accent-light-10 focus:text-accent-light-contrast focus:ring-4 focus:ring-accent-light-transparent hover:focus:border-transparent dark:border-accent-dark-7 dark:bg-accent-dark-1 dark:text-accent-dark-11 dark:hover:border-accent-dark-8 focus:dark:ring-accent-dark-transparent ${sizeClasses}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
