import * as radixColors from '@radix-ui/colors';
import { hsl } from 'polished';
import { baseColors } from '../color';

const custom9 = hsl(336, 0.8, 0.48);

export const crimson = {
  dark: {
    accent1: radixColors.crimsonDark.crimson1,
    accent2: radixColors.crimsonDark.crimson2,
    accent3: radixColors.crimsonDark.crimson3,
    accent4: radixColors.crimsonDark.crimson4,
    accent5: radixColors.crimsonDark.crimson5,
    accent6: radixColors.crimsonDark.crimson6,
    accent7: radixColors.crimsonDark.crimson7,
    accent8: radixColors.crimsonDark.crimson8,
    // accent9: radixColors.crimsonDark.crimson9,
    accent9: custom9,
    accent10: radixColors.crimsonDark.crimson10,
    accent11: radixColors.crimsonDark.crimson11,
    accent12: radixColors.crimsonDark.crimson12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.crimsonDarkA.crimsonA6,
  },
  light: {
    accent1: radixColors.crimson.crimson1,
    accent2: radixColors.crimson.crimson2,
    accent3: radixColors.crimson.crimson3,
    accent4: radixColors.crimson.crimson4,
    accent5: radixColors.crimson.crimson5,
    accent6: radixColors.crimson.crimson6,
    accent7: radixColors.crimson.crimson7,
    accent8: radixColors.crimson.crimson8,
    // accent9: radixColors.crimson.crimson9,
    accent9: custom9,
    accent10: radixColors.crimson.crimson10,
    accent11: radixColors.crimson.crimson11,
    accent12: radixColors.crimson.crimson12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.crimsonDarkA.crimsonA6,
  },
};
