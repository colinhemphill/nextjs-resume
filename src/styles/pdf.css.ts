import { style } from '@vanilla-extract/css';
import { vars } from '../strum-design-system/themes/contract.css';

export const pdfLayoutStyle = style({
  display: 'grid',
  width: '100vw',
  height: '100vh',
  gridTemplateAreas: `
    'sidebar main'
    'footer footer'
  `,
  gridTemplateColumns: '33% 1fr',
  gridTemplateRows: '1fr 0',
});

export const pdfSidebarStyle = style({
  backgroundColor: vars.colors.light,
  gridArea: 'sidebar',
});

export const pdfMainStyle = style({
  gridArea: 'main',
});

export const pdfFooterStyle = style({
  gridArea: 'footer',
});
