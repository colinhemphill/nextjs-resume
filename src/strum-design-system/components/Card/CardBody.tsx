import React from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { cardBodyStyle } from './CardBody.css';

interface CardBody {
  atoms?: Atoms;
}

export const CardBody: React.FC<CardBody> = (props) => {
  const { atoms: atomicProperties, children } = props;

  const classes = composeWithAtoms(atomicProperties, cardBodyStyle);

  return <div className={classes}>{children}</div>;
};

export default CardBody;
