import * as radixColors from '@radix-ui/colors';
import { hsl } from 'polished';
import { baseColors } from '../color';

const custom9 = hsl(358, 0.65, 0.48);

export const red = {
  dark: {
    accent1: radixColors.redDark.red1,
    accent2: radixColors.redDark.red2,
    accent3: radixColors.redDark.red3,
    accent4: radixColors.redDark.red4,
    accent5: radixColors.redDark.red5,
    accent6: radixColors.redDark.red6,
    accent7: radixColors.redDark.red7,
    accent8: radixColors.redDark.red8,
    // accent9: radixColors.redDark.red9,
    accent9: custom9,
    accent10: radixColors.redDark.red10,
    accent11: radixColors.redDark.red11,
    accent12: radixColors.redDark.red12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.redDarkA.redA6,
  },
  light: {
    accent1: radixColors.red.red1,
    accent2: radixColors.red.red2,
    accent3: radixColors.red.red3,
    accent4: radixColors.red.red4,
    accent5: radixColors.red.red5,
    accent6: radixColors.red.red6,
    accent7: radixColors.red.red7,
    accent8: radixColors.red.red8,
    // accent9: radixColors.red.red9,
    accent9: custom9,
    accent10: radixColors.red.red10,
    accent11: radixColors.red.red11,
    accent12: radixColors.red.red12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.redDarkA.redA6,
  },
};
