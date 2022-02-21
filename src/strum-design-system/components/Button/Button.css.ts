import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms } from '../../sprinkles.css';
import { rounded } from '../../styles/borderRadius.css';
import { vars } from '../../themes/contract.css';

const buttonBaseStyle = style([
  rounded,
  atoms({
    paddingX: 4,
    paddingY: 2,
  }),
  {
    border: '1px solid transparent',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: 'center',
    textDecoration: 'none',
    userSelect: 'none',
    verticalAlign: 'middle',
  },
  {
    selectors: {
      '&:disabled': {
        cursor: 'default',
        opacity: 0.7,
      },
    },
  },
]);

export const buttonStyle = recipe({
  base: buttonBaseStyle,
  defaultVariants: { color: 'primary', size: 'md' },
  variants: {
    color: {
      black: {
        backgroundColor: vars.colors.black,
        borderColor: vars.colors.black,
        color: vars.contrastColors.black,
        selectors: {
          '&:hover:not(:disabled), &:focus:not(:disabled)': {
            backgroundColor: vars.darkenedColors.black,
            borderColor: vars.darkenedColors.black,
          },
        },
      },
      dark: {
        backgroundColor: vars.colors.dark,
        borderColor: vars.colors.dark,
        color: vars.contrastColors.dark,
        selectors: {
          '&:hover:not(:disabled), &:focus:not(:disabled)': {
            backgroundColor: vars.darkenedColors.dark,
            borderColor: vars.darkenedColors.dark,
          },
        },
      },
      light: {
        backgroundColor: vars.colors.light,
        borderColor: vars.colors.light,
        color: vars.contrastColors.light,
        selectors: {
          '&:hover:not(:disabled), &:focus:not(:disabled)': {
            backgroundColor: vars.darkenedColors.light,
            borderColor: vars.darkenedColors.light,
          },
        },
      },
      medium: {
        backgroundColor: vars.colors.medium,
        borderColor: vars.colors.medium,
        color: vars.contrastColors.medium,
        selectors: {
          '&:hover:not(:disabled), &:focus:not(:disabled)': {
            backgroundColor: vars.darkenedColors.medium,
            borderColor: vars.darkenedColors.medium,
          },
        },
      },
      primary: {
        backgroundColor: vars.colors.primary,
        borderColor: vars.colors.primary,
        color: vars.contrastColors.primary,
        selectors: {
          '&:hover:not(:disabled), &:focus:not(:disabled)': {
            backgroundColor: vars.darkenedColors.primary,
            borderColor: vars.darkenedColors.primary,
          },
        },
      },
      white: {
        backgroundColor: vars.colors.white,
        borderColor: vars.colors.white,
        color: vars.contrastColors.white,
        selectors: {
          '&:hover:not(:disabled), &:focus:not(:disabled)': {
            backgroundColor: vars.darkenedColors.white,
            borderColor: vars.darkenedColors.white,
          },
        },
      },
    },
    size: {
      lg: { fontSize: '1.25rem' },
      md: {
        fontSize: '1rem',
      },
      sm: {
        fontSize: '0.875rem',
        padding: `${vars.spacers[1]} ${vars.spacers[2]}`,
      },
      xl: {
        fontSize: '1.5rem',
        fontWeight: 700,
        padding: `${vars.spacers[3]} ${vars.spacers[5]}`,
      },
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonStyle>;
