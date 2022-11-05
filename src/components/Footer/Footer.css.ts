import { atoms, vars } from '@strum/react';
import { style } from '@vanilla-extract/css';

export const footerStyle = atoms({
  color: 'white',
  paddingY: 8,
  textAlign: 'center',
});

export const footerLinkStyle = style({
  color: vars.colors.white,
  textDecoration: 'underline',
  ':hover': {
    color: vars.colors.white,
  },
});
