import * as radixColors from '@radix-ui/colors';
import { hsl } from 'polished';
import { baseColors } from '../color';

const custom9 = hsl(151, 0.65, 0.3);

export const green = {
  dark: {
    accent1: radixColors.greenDark.green1,
    accent2: radixColors.greenDark.green2,
    accent3: radixColors.greenDark.green3,
    accent4: radixColors.greenDark.green4,
    accent5: radixColors.greenDark.green5,
    accent6: radixColors.greenDark.green6,
    accent7: radixColors.greenDark.green7,
    accent8: radixColors.greenDark.green8,
    // accent9: radixColors.greenDark.green9,
    accent9: custom9,
    accent10: radixColors.greenDark.green10,
    accent11: radixColors.greenDark.green11,
    accent12: radixColors.greenDark.green12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.greenDarkA.greenA6,
  },
  light: {
    accent1: radixColors.green.green1,
    accent2: radixColors.green.green2,
    accent3: radixColors.green.green3,
    accent4: radixColors.green.green4,
    accent5: radixColors.green.green5,
    accent6: radixColors.green.green6,
    accent7: radixColors.green.green7,
    accent8: radixColors.green.green8,
    // accent9: radixColors.green.green9,
    accent9: custom9,
    accent10: radixColors.green.green10,
    accent11: radixColors.green.green11,
    accent12: radixColors.green.green12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.greenDarkA.greenA6,
  },
};
