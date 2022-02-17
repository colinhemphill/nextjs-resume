import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/contract.css';

export const cardFooterStyle = style({
  borderTop: '1px solid rgba(0, 0, 0, .15)',
  borderWidth: '1px',
  padding: vars.spacers[2],
  textAlign: 'center',
});
