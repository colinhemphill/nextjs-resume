import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../themes/contract.css';

export const cardBodyStyle = style({
  flex: '1 1 auto',
  padding: vars.spacers[4],
});

globalStyle(`${cardBodyStyle} p:last-child`, {
  marginBottom: 0,
});
