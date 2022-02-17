import { StyleRule } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../themes/contract.css';

export const rowBase: StyleRule = {
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: calc.multiply(vars.gutters.x, -0.5),
  marginRight: calc.multiply(vars.gutters.x, -0.5),
  marginTop: calc.multiply(vars.gutters.y, -1),
};

export const rowStyle = recipe({
  base: rowBase,
  variants: {
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

export type RowVariants = RecipeVariants<typeof rowStyle>;
