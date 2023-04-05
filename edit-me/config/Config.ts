export enum AccentColors {
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
}

export enum AccentColorsBright {
  Sky = 'sky',
  Mint = 'mint',
  Lime = 'lime',
  Yellow = 'yellow',
  Amber = 'amber',
}

export enum NeutralColors {
  Gray = 'gray',
  Mauve = 'mauve',
  Slate = 'slate',
  Sage = 'sage',
  Olive = 'olive',
  Sand = 'sand',
}

export interface ResumeConfig {
  accentColor: AccentColors | AccentColorsBright;
  neutralColor: NeutralColors;
  ogImageTheme: 'dark' | 'light';
}
