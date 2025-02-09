import { AccentColor, ColorMode, NeutralColor } from '@strum/colors';
import { ResumeConfig, ThemeSetting } from '../types/config';

export const resumeConfig: ResumeConfig = {
  accentColor: AccentColor.Blue,
  neutralColor: NeutralColor.Slate,
  appTheme: ThemeSetting.System,
  imageTheme: ColorMode.Light,
  pdfTheme: ColorMode.Light,
};
