const colors = require('./src/tokens');
const resumeConfig = require('./edit-me/config/resumeConfig');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors.accents,
      ...colors.neutrals,
      accent: colors.accents[resumeConfig.accentColor],
      neutral: colors.neutrals[resumeConfig.neutralColor],
    },
    extend: {
      container: { center: true, padding: '2rem' },
      fontFamily: {
        sans: ['var(--font-albert)'],
      },
    },
  },
  plugins: [],
};
