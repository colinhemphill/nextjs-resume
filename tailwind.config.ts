import * as radixColors from '@radix-ui/colors';
import plugin from 'tailwindcss/plugin';
import { createPlugin } from 'windy-radix-palette';
import { resumeConfig } from './edit-me/config/resume-config';
import { ThemeSetting } from './edit-me/types/config';

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
    // eslint-disable-next-line @typescript-eslint/unbound-method
    plugin(function ({ addBase, addUtilities, addVariant, theme }) {
      addVariant('hocus', ['&:hover', '&:focus']);

      addBase({
        'a:focus-within, button:focus-within': {
          'outline-color': theme('colors.accent.11'),
        },
      });
      addBase({
        'p a': {
          'text-decoration-line': 'underline',
          'text-decoration-color': theme('colors.accent.9'),
          'text-decoration-thickness': '2px',
          'text-underline-offset': '2px',
          'transition-duration': theme('transitionDuration.300'),
          'transition-property': theme('transitionProperty.colors'),
          'transition-timing-function': theme(
            'transitionTimingFunction.DEFAULT',
          ),
          '&:hover, &:focus': {
            'text-decoration-color': 'currentColor',
          },
        },
      });
      addBase({
        code: {
          'background-color': theme('colors.neutral.6'),
          color: theme('colors.neutral.12'),
          'border-radius': theme('borderRadius.DEFAULT'),
          'padding-left': theme('spacing.1'),
          'padding-right': theme('spacing.1'),
          'font-weight': theme('fontWeight.medium'),
        },
      });
      addUtilities({
        '.text-link': {
          'text-decoration-line': 'underline',
          'text-decoration-color': theme('colors.accent.9'),
          'text-decoration-thickness': '2px',
          'text-underline-offset': '2px',
          'transition-duration': theme('transitionDuration.300'),
          'transition-property': theme('transitionProperty.colors'),
          'transition-timing-function': theme(
            'transitionTimingFunction.DEFAULT',
          ),
          '&:hover, &:focus': {
            'text-decoration-color': 'currentColor',
          },
        },
      });
    }),
  ],
  theme: {
    extend: {
      // add semantic names for configured color choices
      colors: {
        accent: colors.alias(resumeConfig.accentColor),
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
};
