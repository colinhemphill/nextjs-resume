import React from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { cardHeaderStyle } from './CardHeader.css';

interface CardHeader {
  atoms?: Atoms;
}

export const CardHeader: React.FC<CardHeader> = (props) => {
  const { atoms: atomicProperties, children } = props;

  const classes = composeWithAtoms(atomicProperties, cardHeaderStyle);

  return <div className={classes}>{children}</div>;
};

export default CardHeader;
