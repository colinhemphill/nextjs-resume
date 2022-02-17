import { ComplexStyleRule, style } from '@vanilla-extract/css';

const hiddenStyles: ComplexStyleRule = {
  border: 0,
  clip: 'rect(0,0,0,0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
};

export const visuallyHidden = style(hiddenStyles);

export const visuallyHiddenFocusable = style({
  selectors: {
    '&:not(:focus):not(:focus-within)': hiddenStyles,
  },
});
