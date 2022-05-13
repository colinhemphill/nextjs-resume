import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { containerStyle } from './Container.css';

interface Container {
  atoms?: Atoms;
}

const Container: React.FC<PropsWithChildren<Container>> = (props) => {
  const { atoms: atomicProperties, children } = props;

  const classes = composeWithAtoms(atomicProperties, containerStyle);

  return <div className={classes}>{children}</div>;
};

export default Container;
