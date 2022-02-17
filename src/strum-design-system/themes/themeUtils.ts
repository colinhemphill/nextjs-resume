import { darken, lighten } from 'polished';
import { getContrastingColor } from '../utils/contrast';
import { vars } from './contract.css';

export const generateContrastColors = (colors) => ({
  black: getContrastingColor(colors.black),
  dark: getContrastingColor(colors.dark),
  green: getContrastingColor(colors.green),
  light: getContrastingColor(colors.light),
  medium: getContrastingColor(colors.medium),
  primary: getContrastingColor(colors.primary),
  red: getContrastingColor(colors.red),
  white: getContrastingColor(colors.white),
  yellow: getContrastingColor(colors.yellow),
});

export const generateDarkenedColors = (colors) => ({
  black: darken(0.1, colors.black),
  dark: darken(0.1, colors.dark),
  green: darken(0.1, colors.green),
  light: darken(0.1, colors.light),
  medium: darken(0.1, colors.medium),
  primary: darken(0.1, colors.primary),
  red: darken(0.1, colors.red),
  white: darken(0.1, colors.white),
  yellow: darken(0.1, colors.yellow),
});

export const generateLightenedColors = (colors) => ({
  black: lighten(0.2, colors.black),
  dark: lighten(0.2, colors.dark),
  green: lighten(0.2, colors.green),
  light: lighten(0.2, colors.light),
  medium: lighten(0.2, colors.medium),
  primary: lighten(0.2, colors.primary),
  red: lighten(0.2, colors.red),
  white: lighten(0.2, colors.white),
  yellow: lighten(0.2, colors.yellow),
});

export const mapContrastColors = (
  contrastColors: typeof vars['contrastColors'],
) => ({
  blackContrast: contrastColors.black,
  darkContrast: contrastColors.dark,
  greenContrast: contrastColors.green,
  lightContrast: contrastColors.light,
  mediumContrast: contrastColors.medium,
  primaryContrast: contrastColors.primary,
  redContrast: contrastColors.red,
  whiteContrast: contrastColors.white,
  yellowContrast: contrastColors.yellow,
});
