import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { cardStyle } from './Card.css';

interface Card {
  atoms?: Atoms;
}

const Card: React.FC<PropsWithChildren<Card>> = (props) => {
  const { atoms: atomicProperties, children } = props;

  const classes = composeWithAtoms(atomicProperties, cardStyle);

  return <div className={classes}>{children}</div>;
};

export default Card;
