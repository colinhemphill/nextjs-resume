import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

type HtmlButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const sizes = {
  sm: 'text-sm py-1 px-4',
  md: 'text-base py-2 px-6',
  lg: 'text-lg py-3 px-8',
};

interface ButtonProps extends HtmlButtonProps {
  size?: keyof typeof sizes;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  size = 'md',
  ...rest
}) => {
  const sizeClasses = sizes[size];

  return (
    <button
      className={`rounded bg-accent-light-10 text-accent-light-contrast hover:bg-accent-light-11 ${sizeClasses}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
