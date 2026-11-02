import { resumeConfig } from '../../../edit-me/config/resume-config';
import { AccentColor, aliasColors } from '@strum/colors';
import type { Config } from 'tailwindcss';

const colorsConfig: Pick<Config, 'theme'> = {
  theme: {
    extend: {
      colors: aliasColors({
        accent: resumeConfig.accentColor,
        neutral: resumeConfig.neutralColor,
        danger: AccentColor.Red,
      }),
    },
  },
};

export default colorsConfig;
