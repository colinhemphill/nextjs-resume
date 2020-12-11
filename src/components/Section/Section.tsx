import React, { ReactNode } from 'react';
import classnames from 'classnames';

interface Props {
  children?: ReactNode;
  color?: 'light' | 'primary' | 'white';
  fluid?: boolean;
}

const Section = (props: Props): JSX.Element => {
  const { children, color, fluid = false } = props;

  return (
    <section
      className={classnames('py-sm', {
        'bg-light': color === 'light',
        'bg-primary': color === 'primary',
        'bg-white': color === 'white',
        'text-white': color === 'primary',
      })}
    >
      <div className={fluid ? 'container-fluid' : 'container'}>{children}</div>
    </section>
  );
};

export default Section;
