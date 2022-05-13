import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { breadcrumbItemStyle } from './BreadcrumbItem.css';

interface BreadcrumbItem {
  atoms?: Atoms;
  current?: boolean;
}

const BreadcrumbItem: React.FC<PropsWithChildren<BreadcrumbItem>> = (props) => {
  const { atoms: atomicProperties, children, current = false } = props;

  const classes = composeWithAtoms(atomicProperties, breadcrumbItemStyle);

  return (
    <li aria-current={current ? 'page' : undefined} className={classes}>
      {children}
    </li>
  );
};

export default BreadcrumbItem;
