/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { AccentColors, Theme } from '@config-types/config';
import { resumeConfig } from '@config/resume-config';
import * as colors from '@radix-ui/colors';

type Shade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const defaultTheme = resumeConfig.imageTheme;
const configAccent = resumeConfig.accentColor;
const configNeutral = resumeConfig.neutralColor;

/**
 * Get a Radix accent color based on your resume config
 * @param shade A number from 1 to 12 representing the Radix Colors shade
 * @returns The accent color string
 */
export const getAccentColor = (shade: Shade, theme = defaultTheme): string => {
  const accent =
    colors[
      theme === Theme.Dark
        ? (`${configAccent}Dark` as AccentColors)
        : configAccent
    ];
  // @ts-expect-error -- typing is a bit of a stretch here, but this does work
  return accent[`${configAccent}${shade}`];
};

/**
 * Get a Radix neutral color based on your resume config
 * @param shade A number from 1 to 12 representing the Radix Colors shade
 * @returns The neutral color string
 */
export const getNeutralColor = (shade: Shade, theme = defaultTheme): string => {
  const neutral =
    colors[
      theme === Theme.Dark
        ? (`${configNeutral}Dark` as AccentColors)
        : configNeutral
    ];
  // @ts-expect-error -- typing is a bit of a stretch here, but this does work
  return neutral[`${configNeutral}${shade}`];
};
