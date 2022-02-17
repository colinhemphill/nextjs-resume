import React from 'react';
import { Atoms } from '../../sprinkles.css';
import { composeWithAtoms } from '../../utils/compose';
import {
  autoGridLGColumnsStyle,
  autoGridMDColumnsStyle,
  autoGridSMColumnsStyle,
  autoGridStyle,
  AutoGridVariants,
  autoGridXLColumnsStyle,
  autoGridXSColumnsStyle,
  autoGridXXLColumnsStyle,
} from './AutoGrid.css';

interface AutoGrid {
  atoms?: Atoms;
  columns?: ColumnsBreakpoints;
  equalHeight?: boolean;
  horizontalAlign?: AutoGridVariants['horizontalAlign'];
  verticalAlign?: AutoGridVariants['verticalAlign'];
}

const AutoGrid: React.FC<AutoGrid> = (props) => {
  const {
    atoms: atomicProperties,
    children,
    columns,
    equalHeight = false,
    horizontalAlign,
    verticalAlign,
  } = props;

  const classes = composeWithAtoms(
    atomicProperties,
    autoGridStyle({
      height: equalHeight ? 'equal' : null,
      horizontalAlign,
      verticalAlign,
    }),
    autoGridXSColumnsStyle[columns?.xs],
    autoGridSMColumnsStyle[columns?.sm],
    autoGridMDColumnsStyle[columns?.md],
    autoGridLGColumnsStyle[columns?.lg],
    autoGridXLColumnsStyle[columns?.xl],
    autoGridXXLColumnsStyle[columns?.xxl],
  );

  return <div className={classes}>{children}</div>;
};

export default AutoGrid;
