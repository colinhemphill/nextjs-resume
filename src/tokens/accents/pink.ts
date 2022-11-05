import * as radixColors from '@radix-ui/colors';
import { hsl } from 'polished';
import { baseColors } from '../color';

const custom9 = hsl(322, 0.65, 0.5);

export const pink = {
  dark: {
    accent1: radixColors.pinkDark.pink1,
    accent2: radixColors.pinkDark.pink2,
    accent3: radixColors.pinkDark.pink3,
    accent4: radixColors.pinkDark.pink4,
    accent5: radixColors.pinkDark.pink5,
    accent6: radixColors.pinkDark.pink6,
    accent7: radixColors.pinkDark.pink7,
    accent8: radixColors.pinkDark.pink8,
    // accent9: radixColors.pinkDark.pink9,
    accent9: custom9,
    accent10: radixColors.pinkDark.pink10,
    accent11: radixColors.pinkDark.pink11,
    accent12: radixColors.pinkDark.pink12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.pinkDarkA.pinkA6,
  },
  light: {
    accent1: radixColors.pink.pink1,
    accent2: radixColors.pink.pink2,
    accent3: radixColors.pink.pink3,
    accent4: radixColors.pink.pink4,
    accent5: radixColors.pink.pink5,
    accent6: radixColors.pink.pink6,
    accent7: radixColors.pink.pink7,
    accent8: radixColors.pink.pink8,
    // accent9: radixColors.pink.pink9,
    accent9: custom9,
    accent10: radixColors.pink.pink10,
    accent11: radixColors.pink.pink11,
    accent12: radixColors.pink.pink12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.pinkDarkA.pinkA6,
  },
};
