import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { atoms } from '../../sprinkles.css';
import { navListItemStyle } from './NavListItem.css';

const navLinkBaseStyle = style([
  atoms({ paddingX: 3, paddingY: 2 }),
  {
    display: 'block',
    fontWeight: 400,
    selectors: {
      [`${navListItemStyle} &`]: {
        color: 'inherit',
        textDecoration: 'none',
      },
      [`${navListItemStyle} &:hover`]: {
        textDecoration: 'underline',
      },
    },
  },
]);

export const navLinkStyle = recipe({
  base: navLinkBaseStyle,
  variants: {
    state: {
      active: {},
    },
  },
});
