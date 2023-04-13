import * as colors from '@radix-ui/colors';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import windyRadixPlugin from 'windy-radix-palette';
import { toRadixVars } from 'windy-radix-palette/vars';
import { ThemeSetting } from './edit-me/types/Config';
import resumeConfig from './edit-me/config/resumeConfig';
import { contrastColor } from './src/helpers/colorContrast';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: resumeConfig.appTheme === ThemeSetting.System ? 'media' : 'class',
  plugins: [
    windyRadixPlugin({
      // only generate CSS vars for configured color choices
      colors: {
        [resumeConfig.accentColor]: colors[resumeConfig.accentColor],
        [`${resumeConfig.accentColor}Dark`]:
          colors[`${resumeConfig.accentColor}Dark`],
        amber: colors.amber,
        amberDark: colors.amberDark,
        [resumeConfig.neutralColor]: colors[resumeConfig.neutralColor],
        [`${resumeConfig.neutralColor}Dark`]:
          colors[`${resumeConfig.neutralColor}Dark`],
        red: colors.red,
        redDark: colors.redDark,
      },
    }),
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
  theme: {
    extend: {
      // add semantic names for configured color choices
      colors: {
        accent: toRadixVars(resumeConfig.accentColor),
        accentContrast: contrastColor,
        danger: toRadixVars('red'),
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
