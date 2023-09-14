import * as colors from '@radix-ui/colors';
import { Theme } from '../../edit-me/types/Config';
import resumeConfig from '../../edit-me/config/resumeConfig';

const defaultTheme = resumeConfig.imageTheme;
const configAccent = resumeConfig.accentColor;
const configNeutral = resumeConfig.neutralColor;

/**
 * Get a Radix accent color based on your resume config
 * @param shade A number from 1 to 12 representing the Radix Colors shade
 * @returns The accent color string
 */
export const getAccentColor = (shade: number, theme = defaultTheme) => {
  const accent =
    // @ts-ignore
    colors[theme === Theme.Dark ? `${configAccent}Dark` : configAccent];
  return accent[`${configAccent}${shade}`];
};

/**
 * Get a Radix neutral color based on your resume config
 * @param shade A number from 1 to 12 representing the Radix Colors shade
 * @returns The neutral color string
 */
export const getNeutralColor = (shade: number, theme = defaultTheme) => {
  const neutral =
    //@ts-ignore
    colors[theme === Theme.Dark ? `${configNeutral}Dark` : configNeutral];
  return neutral[`${configNeutral}${shade}`];
};
