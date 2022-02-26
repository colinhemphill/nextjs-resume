import { style } from '@vanilla-extract/css';
import { atoms } from '../../sprinkles.css';
import { mxAuto } from '../../styles/margin.css';
import { breakpointMediaQueries } from '../../utils/breakpointMediaQueries';

export const containerFluidStyle = style([
  mxAuto,
  { maxWidth: '100%' },
  atoms({
    paddingX: 4,
  }),
]);

export const containerStyle = style([
  containerFluidStyle,
  {
    '@media': {
      [breakpointMediaQueries.sm]: {
        maxWidth: '540px',
      },
      [breakpointMediaQueries.md]: {
        maxWidth: '720px',
      },
      [breakpointMediaQueries.lg]: {
        maxWidth: '960px',
      },
      [breakpointMediaQueries.xl]: {
        maxWidth: '1140px',
      },
      [breakpointMediaQueries.xxl]: {
        maxWidth: '1320px',
      },
    },
  },
]);
