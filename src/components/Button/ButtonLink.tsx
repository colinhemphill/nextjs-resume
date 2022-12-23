import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

type HTMLAnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const sizeVariants = {
  sm: 'text-sm py-1 px-4',
  md: 'text-base py-2 px-6',
  lg: 'text-lg py-3 px-8',
};

interface ButtonLinkProps extends HTMLAnchorProps {
  size?: keyof typeof sizeVariants;
}

const ButtonLink: React.FC<PropsWithChildren<ButtonLinkProps>> = ({
  children,
  size = 'md',
  ...rest
}) => {
  const sizeClasses = sizeVariants[size];

  return (
    <a
      className={`rounded-md border-2 border-accent-light-7 bg-accent-light-1 font-medium text-accent-light-11 no-underline outline-none transition hover:border-accent-light-8 focus:border-transparent focus:bg-accent-light-10 focus:text-accent-light-contrast focus:ring-4 focus:ring-accent-light-transparent hover:focus:border-transparent dark:border-accent-dark-7 dark:bg-accent-dark-1 dark:text-accent-dark-11 dark:hover:border-accent-dark-8 focus:dark:ring-accent-dark-transparent ${sizeClasses}`}
      {...rest}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
