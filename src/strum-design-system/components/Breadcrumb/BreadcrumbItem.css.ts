import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../themes/contract.css';

export const breadcrumbItemStyle = style({ marginBottom: vars.spacers[3] });

globalStyle(`${breadcrumbItemStyle} + ${breadcrumbItemStyle}`, {
  paddingLeft: vars.spacers[3],
});

globalStyle(`${breadcrumbItemStyle} + ${breadcrumbItemStyle}:before`, {
  content: '/',
  float: 'left',
  opacity: 0.25,
  paddingRight: vars.spacers[3],
});

globalStyle(`${breadcrumbItemStyle} a`, {
  fontWeight: 400,
});
