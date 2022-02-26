import { globalStyle } from '@vanilla-extract/css';
import { vars } from '../strum-design-system/themes/contract.css';

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
