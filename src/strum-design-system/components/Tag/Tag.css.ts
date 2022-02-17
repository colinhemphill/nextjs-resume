import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { rounded } from '../../styles/borderRadius.css';
import { vars } from '../../themes/contract.css';
import { tagGroupStyle } from './TagGroup.css';

const tagBaseStyle = style([
  rounded,
  {
    display: 'inline-block',
    selectors: {
      [`${tagGroupStyle} &`]: {
        marginBottom: vars.spacers[2],
        marginRight: vars.spacers[2],
      },
    },
  },
]);

export const tagStyle = recipe({
  base: tagBaseStyle,
  defaultVariants: { size: 'md' },
  variants: {
    color: {
      black: { color: vars.colors.white },
      dark: { color: vars.contrastColors.dark },
      light: { color: vars.contrastColors.light },
      medium: { color: vars.contrastColors.medium },
      primary: { color: vars.contrastColors.primary },
      white: { color: vars.contrastColors.white },
    },
    size: {
      lg: { fontSize: '18px', padding: vars.spacers[3] },
      md: { fontSize: '16px', padding: vars.spacers[2] },
      sm: { fontSize: '14px', padding: vars.spacers[1] },
    },
  },
});

export type TagVariants = RecipeVariants<typeof tagStyle>;
