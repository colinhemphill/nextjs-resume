import { createTheme } from '@vanilla-extract/css';
import { vars } from '../contract.css';
import {
  generateContrastColors,
  generateDarkenedColors,
  generateLightenedColors,
} from '../themeUtils';
import colors from './colors';
import gutters from './gutters';
import spacers from './spacers';

const timbre = createTheme(vars, {
  colors,
  contrastColors: { ...generateContrastColors(colors), primary: colors.white },
  darkenedColors: generateDarkenedColors(colors),
  gutters,
  lightenedColors: generateLightenedColors(colors),
  spacers,
});

export default timbre;
