import { createVar, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../themes/contract.css';
import spacers from '../../themes/timbre/spacers';
import { breakpointMediaQueries } from '../../utils/breakpointMediaQueries';
import { columnVariants } from '../../utils/layout';
import { rowBase } from '../Layout/Row.css';

export const autoGridColumnsVar = createVar();
export const autoGridEqualHeightVar = createVar();

export const autoGridStyle = recipe({
  base: rowBase,
  variants: {
    height: {
      equal: {
        vars: {
          [autoGridEqualHeightVar]: '100%',
        },
      },
    },
    horizontalAlign: {
      around: { justifyContent: 'space-around' },
      between: { justifyContent: 'space-between' },
      center: { justifyContent: 'center' },
      evenly: { justifyContent: 'space-evenly' },
      left: { justifyContent: 'flex-start' },
      right: { justifyContent: 'flex-end' },
    },
    verticalAlign: {
      bottom: { alignItems: 'flex-end' },
      center: { alignItems: 'center' },
      top: { alignItems: 'flex-start' },
    },
  },
});

export const autoGridXGuttersStyle = styleVariants(spacers, (gutterSize) => [
  {
    vars: { [vars.gutters.x]: gutterSize },
  },
]);

export const autoGridYGuttersStyle = styleVariants(spacers, (gutterSize) => [
  {
    vars: { [vars.gutters.y]: gutterSize },
  },
]);

export const autoGridXSColumnsStyle = styleVariants(
  columnVariants,
  (column) => [
    {
      '@media': {
        [breakpointMediaQueries.xs]: {
          vars: { [autoGridColumnsVar]: column },
        },
      },
    },
  ],
);

export const autoGridSMColumnsStyle = styleVariants(
  columnVariants,
  (column) => [
    {
      '@media': {
        [breakpointMediaQueries.sm]: {
          vars: { [autoGridColumnsVar]: column },
        },
      },
    },
  ],
);

export const autoGridMDColumnsStyle = styleVariants(
  columnVariants,
  (column) => [
    {
      '@media': {
        [breakpointMediaQueries.md]: {
          vars: { [autoGridColumnsVar]: column },
        },
      },
    },
  ],
);

export const autoGridLGColumnsStyle = styleVariants(
  columnVariants,
  (column) => [
    {
      '@media': {
        [breakpointMediaQueries.lg]: {
          vars: { [autoGridColumnsVar]: column },
        },
      },
    },
  ],
);

export const autoGridXLColumnsStyle = styleVariants(
  columnVariants,
  (column) => [
    {
      '@media': {
        [breakpointMediaQueries.xl]: {
          vars: { [autoGridColumnsVar]: column },
        },
      },
    },
  ],
);

export const autoGridXXLColumnsStyle = styleVariants(
  columnVariants,
  (column) => [
    {
      '@media': {
        [breakpointMediaQueries.xxl]: {
          vars: { [autoGridColumnsVar]: column },
        },
      },
    },
  ],
);

export type AutoGridVariants = RecipeVariants<typeof autoGridStyle>;
