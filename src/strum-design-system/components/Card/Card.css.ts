import { style } from '@vanilla-extract/css';
import { atoms } from '../../sprinkles.css';
import { rounded, roundedTop } from '../../styles/borderRadius.css';
import { vars } from '../../themes/contract.css';

export const cardStyle = style([
  rounded,
  {
    backgroundClip: 'border-box',
    border: '1px solid rgba(0, 0, 0, .15)',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    position: 'relative',
    wordWrap: 'break-word',
  },
  atoms({
    backgroundColor: { darkMode: 'dark', lightMode: 'white' },
  }),
]);

export const cardImgTopStyle = style([roundedTop]);

export const cardTitleStyle = style({
  lineHeight: 1.3,
  marginBottom: vars.spacers[2],
});

export const cardSubtitleStyle = style({
  display: 'block',
  fontSize: '1rem',
  lineHeight: 1.3,
  marginBottom: vars.spacers[2],
});
