import typographyPlugin from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import windyRadixPlugin from 'windy-radix-palette';
import { toRadixVars } from 'windy-radix-palette/vars';
import windyRadixTypographyPlugin from 'windy-radix-typography';
import resumeConfig from './edit-me/config/resumeConfig';
import { contrastColor } from './src/helpers/colorContrast';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [windyRadixPlugin, typographyPlugin, windyRadixTypographyPlugin],
  theme: {
    extend: {
      colors: {
        accent: toRadixVars(resumeConfig.accentColor),
        accentContrast: contrastColor,
        neutral: toRadixVars(resumeConfig.neutralColor),
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)'],
        sans: ['var(--font-albert)'],
      },
    },
  },
} satisfies Config;
