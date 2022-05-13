import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { rowStyle, RowVariants } from './Row.css';

interface Row {
  atoms?: Atoms;
  horizontalAlign?: RowVariants['horizontalAlign'];
  verticalAlign?: RowVariants['verticalAlign'];
}

const Row: React.FC<PropsWithChildren<Row>> = (props) => {
  const {
    atoms: atomicProperties,
    children,
    horizontalAlign,
    verticalAlign,
  } = props;

  const classes = composeWithAtoms(
    atomicProperties,
    rowStyle({
      horizontalAlign,
      verticalAlign,
    }),
  );

  return <div className={classes}>{children}</div>;
};

export default Row;
