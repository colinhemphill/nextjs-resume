import React, { PropsWithChildren } from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import {
  columnStyle,
  lgColumnsStyle,
  mdColumnsStyle,
  smColumnsStyle,
  xlColumnsStyle,
  xsColumnsStyle,
  xxlColumnsStyle,
} from './Column.css';

interface Column {
  atoms?: Atoms;
  width?: ColumnsBreakpoints;
}

const Column: React.FC<PropsWithChildren<Column>> = (props) => {
  const { atoms: atomicProperties, children, width } = props;

  const classes = composeWithAtoms(
    atomicProperties,
    columnStyle,
    xsColumnsStyle[width?.xs],
    smColumnsStyle[width?.sm],
    mdColumnsStyle[width?.md],
    lgColumnsStyle[width?.lg],
    xlColumnsStyle[width?.xl],
    xxlColumnsStyle[width?.xxl],
  );

  return <div className={classes}>{children}</div>;
};

export default Column;
