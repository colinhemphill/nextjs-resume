import { style, styleVariants } from '@vanilla-extract/css';

export const unorderedListBaseStyle = style({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const unorderedListStyle = styleVariants({
  horizontal: [unorderedListBaseStyle, { flexDirection: 'row' }],
  vertical: [unorderedListBaseStyle, { flexDirection: 'column' }],
});
