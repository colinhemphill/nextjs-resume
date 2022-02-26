import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { columnStyle } from '../Layout/Column.css';
import { autoGridColumnsVar, autoGridEqualHeightVar } from './AutoGrid.css';

export const autoGridCellStyle = style([
  columnStyle,
  {
    flex: '0 0 auto',
    width: calc('100%').divide(autoGridColumnsVar).toString(),
  },
]);

globalStyle(`${autoGridCellStyle} > *`, {
  height: autoGridEqualHeightVar,
});
