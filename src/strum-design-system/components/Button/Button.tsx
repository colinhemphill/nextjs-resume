import React, { ButtonHTMLAttributes } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { buttonStyle, ButtonVariants } from './Button.css';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  atoms?: Atoms;
  color?: ButtonVariants['color'];
  size?: ButtonVariants['size'];
}

const Button: React.FC<Button> = (props) => {
  const { atoms: atomicProperties, children, color, size, ...rest } = props;

  const classes = composeWithAtoms(
    atomicProperties,
    buttonStyle({
      color,
      size,
    }),
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
