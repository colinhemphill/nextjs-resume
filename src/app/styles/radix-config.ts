import type { Config } from 'tailwindcss';
import { resumeConfig } from '../../../edit-me/config/resume-config';
import { AccentColors } from '../../../edit-me/types/config';
import getColorScale from './get-color-scale';

const radixConfig: Pick<Config, 'theme'> = {
  theme: {
    extend: {
      colors: {
        ...getColorScale('neutral', resumeConfig.neutralColor),
        ...getColorScale('accent', resumeConfig.accentColor),
        ...getColorScale('success', AccentColors.Green),
        ...getColorScale('warning', AccentColors.Yellow),
        ...getColorScale('error', AccentColors.Red),
      },
    },
  },
};

export default radixConfig;
