import React from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { cardFooterStyle } from './CardFooter.css';

interface CardFooter {
  atoms?: Atoms;
}

export const CardFooter: React.FC<CardFooter> = (props) => {
  const { atoms: atomicProperties, children } = props;

  const classes = composeWithAtoms(atomicProperties, cardFooterStyle);

  return <div className={classes}>{children}</div>;
};

export default CardFooter;
