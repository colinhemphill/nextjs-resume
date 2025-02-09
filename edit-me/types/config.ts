import {
  AccentBrightColor,
  AccentColor,
  ColorMode,
  NeutralColor,
} from '@strum/colors';

export enum ThemeSetting {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

export interface ResumeConfig {
  accentColor: AccentColor | AccentBrightColor;
  neutralColor: NeutralColor;
  imageTheme: ColorMode;
  pdfTheme: ColorMode;
  appTheme: ThemeSetting;
}
