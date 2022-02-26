import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../themes/contract.css';
import { breakpointMediaQueries } from '../../utils/breakpointMediaQueries';

const headingBaseStyle = style({
  fontWeight: 700,
  lineHeight: 1.3,
  marginBottom: vars.spacers[2],
  marginTop: 0,
});

export const headingStyleVariants = styleVariants({
  1: [
    headingBaseStyle,
    {
      '@media': {
        [breakpointMediaQueries.xl]: {
          fontSize: '2.5rem',
        },
      },
      fontSize: 'calc(1.375rem + 1.5vw)',
    },
  ],
  2: [
    headingBaseStyle,
    {
      '@media': {
        [breakpointMediaQueries.xl]: {
          fontSize: '2rem',
        },
      },
      fontSize: 'calc(1.325rem + .9vw)',
    },
  ],
  3: [
    headingBaseStyle,
    {
      '@media': {
        [breakpointMediaQueries.xl]: {
          fontSize: '1.75rem',
        },
      },
      fontSize: 'calc(1.3rem + .6vw)',
    },
  ],
  4: [
    headingBaseStyle,
    {
      '@media': {
        [breakpointMediaQueries.xl]: {
          fontSize: '1.5rem',
        },
      },
      fontSize: 'calc(1.275rem + .3vw)',
    },
  ],
  5: [headingBaseStyle, { fontSize: '1.25rem' }],
  6: [headingBaseStyle, { fontSize: '1rem' }],
});
