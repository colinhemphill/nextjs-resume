import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/contract.css';
import { breakpointMediaQueries } from '../../utils/breakpointMediaQueries';
import { columnVariants } from '../../utils/layout';

export const columnStyle = style({
  flex: '1 0',
  flexShrink: 0,
  marginTop: vars.gutters.y,
  maxWidth: '100%',
  paddingLeft: calc.multiply(vars.gutters.x, 0.5),
  paddingRight: calc.multiply(vars.gutters.x, 0.5),
  width: '100%',
});

const width = (column: typeof columnVariants[string]): string => {
  return column === 'auto'
    ? 'auto'
    : calc(Number(column) / 12)
        .multiply('100%')
        .toString();
};

export const xsColumnsStyle = styleVariants(columnVariants, (column) => [
  {
    '@media': {
      [breakpointMediaQueries.xs]: {
        flex: '0 0 auto',
        width: width(column),
      },
    },
  },
]);

export const smColumnsStyle = styleVariants(columnVariants, (column) => [
  {
    '@media': {
      [breakpointMediaQueries.sm]: {
        flex: '0 0 auto',
        width: width(column),
      },
    },
  },
]);

export const mdColumnsStyle = styleVariants(columnVariants, (column) => [
  {
    '@media': {
      [breakpointMediaQueries.md]: {
        flex: '0 0 auto',
        width: width(column),
      },
    },
  },
]);

export const lgColumnsStyle = styleVariants(columnVariants, (column) => [
  {
    '@media': {
      [breakpointMediaQueries.lg]: {
        flex: '0 0 auto',
        width: width(column),
      },
    },
  },
]);

export const xlColumnsStyle = styleVariants(columnVariants, (column) => [
  {
    '@media': {
      [breakpointMediaQueries.xl]: {
        flex: '0 0 auto',
        width: width(column),
      },
    },
  },
]);

export const xxlColumnsStyle = styleVariants(columnVariants, (column) => [
  {
    '@media': {
      [breakpointMediaQueries.xxl]: {
        flex: '0 0 auto',
        width: width(column),
      },
    },
  },
]);
