import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { unorderedListStyle } from './UnorderedList.css';

interface UnorderedList {
  atoms?: Atoms;
  direction?: 'horizontal' | 'vertical';
}

const UnorderedList: React.FC<PropsWithChildren<UnorderedList>> = (props) => {
  const { atoms: atomicProperties, children, direction = 'horizontal' } = props;

  const classes = composeWithAtoms(
    atomicProperties,
    unorderedListStyle[direction],
  );

  return <ul className={classes}>{children}</ul>;
};

export default UnorderedList;
