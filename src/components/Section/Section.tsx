import classnames from 'classnames';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  color?: 'light' | 'primary' | 'white';
  pdf?: boolean;
}

const Section = (props: Props): JSX.Element => {
  const { children, color, pdf = false } = props;

  return (
    <section
      className={classnames({
        'bg-light': color === 'light',
        'bg-primary': color === 'primary',
        'bg-white': color === 'white',
        'py-sm': !pdf,
        'py-xs': pdf,
        'text-white': color === 'primary',
      })}
    >
      <div className={pdf ? 'container-fluid' : 'container'}>{children}</div>
    </section>
  );
};

export default Section;
