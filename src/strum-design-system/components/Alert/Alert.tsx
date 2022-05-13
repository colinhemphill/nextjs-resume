import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { alertStyle, AlertVariants } from './Alert.css';

interface Alert {
  atoms?: Atoms;
  color: AlertVariants['color'];
}

const Alert: React.FC<PropsWithChildren<Alert>> = (props) => {
  const { atoms: atomicProperties, children, color } = props;

  const style = composeWithAtoms(
    atomicProperties,
    alertStyle({
      color,
    }),
  );

  return (
    <div className={style} role="alert">
      {children}
    </div>
  );
};

export default Alert;
