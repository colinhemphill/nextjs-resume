import { styleVariants } from '@vanilla-extract/css';
import { atoms } from '../../strum-design-system/sprinkles.css';

const sectionBaseStyle = atoms({
  paddingY: { xs: 6, md: 6, lg: 8 },
});

export const sectionStyle = styleVariants({
  alternate: [
    sectionBaseStyle,
    atoms({
      backgroundColor: { darkMode: 'medium', lightMode: 'light' },
      color: { darkMode: 'white', lightMode: 'dark' },
    }),
  ],
  standard: [
    sectionBaseStyle,
    atoms({
      backgroundColor: { darkMode: 'dark', lightMode: 'white' },
      color: { darkMode: 'white', lightMode: 'dark' },
    }),
  ],
});
