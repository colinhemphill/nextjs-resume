import { vars } from '@strum/react';
import { style } from '@vanilla-extract/css';

export const articleStyle = style({
  selectors: {
    '&:not(:last-child)': { marginBottom: vars.space[6] },
  },
});
