import { style } from '@vanilla-extract/css';

export const height100 = style({ height: '100%' });

export const width100 = style({ width: '100%' });

export const heightWidth100 = style([height100, width100]);
