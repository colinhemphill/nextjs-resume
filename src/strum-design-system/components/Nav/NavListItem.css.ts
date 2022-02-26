import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../themes/contract.css';
import { unorderedListStyle } from './UnorderedList.css';

export const navListItemStyle = style({
  selectors: {
    [`${unorderedListStyle.horizontal} &:not(:last-child)`]: {
      marginRight: vars.spacers[4],
    },
    [`${unorderedListStyle.vertical} &:not(:last-child)`]: {
      marginBottom: vars.spacers[3],
    },
  },
});

globalStyle(`${navListItemStyle} p`, {
  marginBottom: 0,
});
