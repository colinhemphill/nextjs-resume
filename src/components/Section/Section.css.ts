import { atoms } from '@strum/react';
import { styleVariants } from '@vanilla-extract/css';

const sectionBaseStyle = atoms({
  paddingY: { xs: 6, md: 6, lg: 8 },
});

export const sectionStyle = styleVariants({
  alternate: [
    sectionBaseStyle,
    atoms({
      backgroundColor: 'neutral2',
      color: 'neutral12',
    }),
  ],
  standard: [
    sectionBaseStyle,
    atoms({
      backgroundColor: 'neutral1',
      color: 'neutral12',
    }),
  ],
});
