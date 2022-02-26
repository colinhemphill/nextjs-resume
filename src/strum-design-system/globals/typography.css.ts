import { globalStyle } from '@vanilla-extract/css';
import { roundedBorderRadius } from '../styles/borderRadius.css';
import { vars } from '../themes/contract.css';

export const systemFonts = `
  system-ui, -apple-system,
  "Segoe UI", Roboto, "Helvetica Neue",
  Arial, "Noto Sans", "Liberation Sans",
  sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol", "Noto Color Emoji"
`;

export const monospaceFonts = `
  SFMono-Regular, Menlo,
  Monaco, Consolas,
  "Liberation Mono", "Courier New",
  monospace
`;

globalStyle('html, body, p', {
  fontFamily: `Source Sans Pro, ${systemFonts}`,
  lineHeight: 1.5,
});

globalStyle('a', {
  color: 'inherit',
  fontWeight: 700,
});

globalStyle('a', {
  textDecorationColor: vars.colors.primary,
  textDecorationLine: 'underline',
  textDecorationThickness: '2px',
});

globalStyle('a:hover', { textDecorationColor: 'inherit' });

globalStyle('p', {
  marginBottom: vars.spacers[4],
  marginTop: 0,
});

globalStyle('small', {
  fontSize: '0.875rem',
});

globalStyle('label', {
  display: 'block',
  marginBottom: vars.spacers[2],
});

globalStyle('pre, code', {
  fontFamily: monospaceFonts,
});

globalStyle('pre', {
  marginBottom: vars.spacers[4],
  marginTop: vars.spacers[4],
});

globalStyle('code', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: vars.colors.black,
      color: vars.colors.white,
    },
  },
  backgroundColor: vars.colors.light,
  borderRadius: roundedBorderRadius,
  color: vars.colors.black,
  padding: `${vars.spacers[1]} ${vars.spacers[2]}`,
});

globalStyle('pre code', {
  background: 'transparent',
  color: 'inherit',
  padding: 0,
});

globalStyle('::selection', {
  backgroundColor: vars.colors.primary,
  color: 'white',
});
