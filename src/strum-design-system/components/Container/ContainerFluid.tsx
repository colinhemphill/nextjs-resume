import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { containerFluidStyle } from './Container.css';

interface ContainerFluid {
  atoms?: Atoms;
}

const ContainerFluid: React.FC<PropsWithChildren<ContainerFluid>> = (props) => {
  const { atoms: atomicProperties, children } = props;

  const classes = composeWithAtoms(atomicProperties, containerFluidStyle);

  return <div className={classes}>{children}</div>;
};

export default ContainerFluid;
