import { vars } from '@strum/react';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('p', {
  marginBottom: vars.space[3],
  marginTop: 0,
});
