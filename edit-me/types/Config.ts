export enum AccentColorsBasic {
  Tomato = 'tomato',
  Red = 'red',
  Crimson = 'crimson',
  Pink = 'pink',
  Plum = 'plum',
  Purple = 'purple',
  Violet = 'violet',
  Indigo = 'indigo',
  Blue = 'blue',
  Cyan = 'cyan',
  Teal = 'teal',
  Green = 'green',
  Grass = 'grass',
  Orange = 'orange',
  Brown = 'brown',
  Ruby = 'ruby',
  Iris = 'iris',
  Jade = 'jade',
}

export enum AccentColorsBright {
  Sky = 'sky',
  Mint = 'mint',
  Lime = 'lime',
  Yellow = 'yellow',
  Amber = 'amber',
}

export const AccentColors = { ...AccentColorsBasic, ...AccentColorsBright };

export enum NeutralColors {
  Gray = 'gray',
  Mauve = 'mauve',
  Slate = 'slate',
  Sage = 'sage',
  Olive = 'olive',
  Sand = 'sand',
}

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export enum ThemeSetting {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

export interface ResumeConfig {
  accentColor: AccentColorsBasic | AccentColorsBright;
  neutralColor: NeutralColors;
  imageTheme: Theme;
  pdfTheme: Theme;
  appTheme: ThemeSetting;
}
