import React from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import { autoGridCellStyle } from './AutoGridCell.css';

interface AutoGridCell {
  atoms?: Atoms;
}

const AutoGridCell: React.FC<AutoGridCell> = (props) => {
  const { atoms: atomicProperties, children } = props;

  const classes = composeWithAtoms(atomicProperties, autoGridCellStyle);

  return <div className={classes}>{children}</div>;
};

export default AutoGridCell;
