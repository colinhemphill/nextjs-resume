import * as radixColors from '@radix-ui/colors';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import resumeConfig from './edit-me/config/resumeConfig';
import { ThemeSetting } from './edit-me/types/Config';
import { contrastColor } from './src/helpers/colorContrast';

// @ts-ignore
import { createPlugin } from 'windy-radix-palette';

const colors = createPlugin({
  colors: {
    [resumeConfig.accentColor]: radixColors[resumeConfig.accentColor],
    [`${resumeConfig.accentColor}Dark`]:
      radixColors[`${resumeConfig.accentColor}Dark`],
    amber: radixColors.amber,
    amberDark: radixColors.amberDark,
    [resumeConfig.neutralColor]: radixColors[resumeConfig.neutralColor],
    [`${resumeConfig.neutralColor}Dark`]:
      radixColors[`${resumeConfig.neutralColor}Dark`],
    red: radixColors.red,
    redDark: radixColors.redDark,
  },
});

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: resumeConfig.appTheme === ThemeSetting.System ? 'media' : 'class',
  plugins: [
    colors.plugin,
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
  theme: {
    extend: {
      // add semantic names for configured color choices
      colors: {
        accent: colors.alias(resumeConfig.accentColor),
        accentContrast: contrastColor,
        danger: colors.alias('red'),
        neutral: colors.alias(resumeConfig.neutralColor),
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
