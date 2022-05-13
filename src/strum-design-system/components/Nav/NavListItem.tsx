import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { navListItemStyle } from './NavListItem.css';

interface NavListItem {
  active?: boolean;
  atoms?: Atoms;
}

const NavListItem: React.FC<PropsWithChildren<NavListItem>> = (props) => {
  const { atoms: atomicProperties, children } = props;

  const classes = composeWithAtoms(atomicProperties, navListItemStyle);

  return <li className={classes}>{children}</li>;
};

export default NavListItem;
