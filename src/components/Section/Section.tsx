import React, { ReactNode } from 'react';
import classnames from 'classnames';

interface Props {
  children?: ReactNode;
  color?: 'light' | 'primary' | 'white';
}

const Section = (props: Props): JSX.Element => {
  const { children, color } = props;

  return (
    <section
      className={classnames('py-sm', {
        'bg-light': color === 'light',
        'bg-primary': color === 'primary',
        'bg-white': color === 'white',
        'text-white': color === 'primary',
      })}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
