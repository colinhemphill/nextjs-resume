import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../themes/contract.css';
import { breakpointMediaQueries } from '../../utils/breakpointMediaQueries';

const displayBaseStyle = style({
  fontWeight: 700,
  lineHeight: 1.3,
  marginBottom: vars.spacers[2],
  marginTop: 0,
});

export const displayStyleVariants = styleVariants({
  1: [
    displayBaseStyle,
    {
      '@media': {
        [breakpointMediaQueries.xl]: {
          fontSize: '5rem',
        },
      },
      fontSize: 'calc(1.625rem + 4.5vw)',
    },
  ],
  2: [
    displayBaseStyle,
    {
      '@media': {
        [breakpointMediaQueries.xl]: {
          fontSize: '4.5rem',
        },
      },
      fontSize: 'calc(1.575rem + 3.9vw)',
    },
  ],
  3: [
    displayBaseStyle,
    {
      '@media': {
        [breakpointMediaQueries.xl]: {
          fontSize: '4rem',
        },
      },
      fontSize: 'calc(1.525rem + 3.3vw)',
    },
  ],
  4: [
    displayBaseStyle,
    {
      '@media': {
        [breakpointMediaQueries.xl]: {
          fontSize: '3.5rem',
        },
      },
      fontSize: 'calc(1.475rem + 2.7vw)',
    },
  ],
  5: [
    displayBaseStyle,
    {
      '@media': {
        [breakpointMediaQueries.xl]: {
          fontSize: '3rem',
        },
      },
      fontSize: 'calc(1.425rem + 2.1vw)',
    },
  ],
  6: [
    displayBaseStyle,
    {
      '@media': {
        [breakpointMediaQueries.xl]: {
          fontSize: '2.5rem',
        },
      },
      fontSize: 'calc(1.375rem + 1.5vw)',
    },
  ],
});
