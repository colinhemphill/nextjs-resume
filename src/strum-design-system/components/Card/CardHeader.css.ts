import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/contract.css';

export const cardHeaderStyle = style({
  borderBottom: '1px solid rgba(0, 0, 0, .125)',
  padding: vars.spacers[4],
  textAlign: 'center',
});
