import { resumeConfig } from '@config/resume-config';
import { Shade } from '@strum/colors';
import { rgb } from '@strum/colors/base';

const defaultTheme = resumeConfig.imageTheme;
const configAccent = resumeConfig.accentColor;
const configNeutral = resumeConfig.neutralColor;

/**
 * Get a Strum accent color based on your resume config
 * @param shade A number from 1 to 12 representing the Strum Colors shade
 * @returns The accent color string
 */
export const getAccentColor = (shade: Shade, theme = defaultTheme): string => {
  const accent = rgb[configAccent][theme];
  return accent[shade];
};

/**
 * Get a Strum neutral color based on your resume config
 * @param shade A number from 1 to 12 representing the Strum Colors shade
 * @returns The neutral color string
 */
export const getNeutralColor = (shade: Shade, theme = defaultTheme): string => {
  const neutral = rgb[configNeutral][theme];
  return neutral[shade];
};
