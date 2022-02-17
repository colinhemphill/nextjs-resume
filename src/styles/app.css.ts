import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { vars } from '../strum-design-system/themes/contract.css';

globalFontFace('Inter', {
  fontDisplay: 'optional',
  fontWeight: '100 900',
  src: `url('/fonts/Inter-roman-var.woff2') format('woff2')`,
});

globalStyle('html, body', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: vars.colors.black,
      color: vars.colors.white,
    },
  },
  backgroundColor: vars.colors.white,
  color: vars.colors.dark,
});
