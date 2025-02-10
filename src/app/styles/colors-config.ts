import { aliasColors } from '@strum/colors';
import type { Config } from 'tailwindcss';
import { resumeConfig } from '../../../edit-me/config/resume-config';

const colorsConfig: Pick<Config, 'theme'> = {
  theme: {
    extend: {
      colors: aliasColors({
        accent: resumeConfig.accentColor,
        neutral: resumeConfig.neutralColor,
      }),
    },
  },
};

export default colorsConfig;
