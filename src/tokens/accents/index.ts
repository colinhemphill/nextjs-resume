import { amber } from './amber';
import { blue } from './blue';
import { crimson } from './crimson';
import { cyan } from './cyan';
import { grass } from './grass';
import { green } from './green';
import { indigo } from './indigo';
import { lime } from './lime';
import { mint } from './mint';
import { orange } from './orange';
import { pink } from './pink';
import { plum } from './plum';
import { purple } from './purple';
import { red } from './red';
import { sky } from './sky';
import { teal } from './teal';
import { tomato } from './tomato';
import { violet } from './violet';
import { yellow } from './yellow';

export const accents = {
  amber,
  blue,
  crimson,
  cyan,
  green,
  grass,
  indigo,
  lime,
  mint,
  orange,
  pink,
  plum,
  purple,
  red,
  sky,
  teal,
  tomato,
  violet,
  yellow,
};

export type AccentColor = keyof typeof accents;
