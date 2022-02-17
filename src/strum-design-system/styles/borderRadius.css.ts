import { style } from '@vanilla-extract/css';

export const roundedBorderRadius = '6px';
export const circleBorderRadius = '100%';

export const rounded = style({
  borderRadius: roundedBorderRadius,
});

export const roundedTop = style({
  borderStartEndRadius: roundedBorderRadius,
  borderStartStartRadius: roundedBorderRadius,
});

export const roundedBottom = style({
  borderEndEndRadius: roundedBorderRadius,
  borderEndStartRadius: roundedBorderRadius,
});

export const roundedCircle = style({
  borderRadius: circleBorderRadius,
});
