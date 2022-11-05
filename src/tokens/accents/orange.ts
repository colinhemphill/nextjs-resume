import * as radixColors from '@radix-ui/colors';
import { hsl } from 'polished';
import { baseColors } from '../color';

const custom9 = hsl(24, 0.97, 0.4);

export const orange = {
  dark: {
    accent1: radixColors.orangeDark.orange1,
    accent2: radixColors.orangeDark.orange2,
    accent3: radixColors.orangeDark.orange3,
    accent4: radixColors.orangeDark.orange4,
    accent5: radixColors.orangeDark.orange5,
    accent6: radixColors.orangeDark.orange6,
    accent7: radixColors.orangeDark.orange7,
    accent8: radixColors.orangeDark.orange8,
    // accent9: radixColors.orangeDark.orange9,
    accent9: custom9,
    accent10: radixColors.orangeDark.orange10,
    accent11: radixColors.orangeDark.orange11,
    accent12: radixColors.orangeDark.orange12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.orangeDarkA.orangeA6,
  },
  light: {
    accent1: radixColors.orange.orange1,
    accent2: radixColors.orange.orange2,
    accent3: radixColors.orange.orange3,
    accent4: radixColors.orange.orange4,
    accent5: radixColors.orange.orange5,
    accent6: radixColors.orange.orange6,
    accent7: radixColors.orange.orange7,
    accent8: radixColors.orange.orange8,
    // accent9: radixColors.orange.orange9,
    accent9: custom9,
    accent10: radixColors.orange.orange10,
    accent11: radixColors.orange.orange11,
    accent12: radixColors.orange.orange12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.orangeDarkA.orangeA6,
  },
};
