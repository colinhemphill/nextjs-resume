import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { breadcrumbStyle } from './Breadcrumb.css';

interface Breadcrumb {
  atoms?: Atoms;
}

const Breadcrumb: React.FC<PropsWithChildren<Breadcrumb>> = (props) => {
  const { atoms: atomicProperties, children } = props;

  const classes = composeWithAtoms(atomicProperties, breadcrumbStyle);

  return (
    <nav aria-label="breadcrumb">
      <ol className={classes}>{children}</ol>
    </nav>
  );
};

export default Breadcrumb;
