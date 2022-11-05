import * as radixColors from '@radix-ui/colors';
import { hsl } from 'polished';
import { baseColors } from '../color';

const custom9 = hsl(206, 1, 0.4);

export const blue = {
  dark: {
    accent1: radixColors.blueDark.blue1,
    accent2: radixColors.blueDark.blue2,
    accent3: radixColors.blueDark.blue3,
    accent4: radixColors.blueDark.blue4,
    accent5: radixColors.blueDark.blue5,
    accent6: radixColors.blueDark.blue6,
    accent7: radixColors.blueDark.blue7,
    accent8: radixColors.blueDark.blue8,
    // accent9: radixColors.blueDark.blue9,
    accent9: custom9,
    accent10: radixColors.blueDark.blue10,
    accent11: radixColors.blueDark.blue11,
    accent12: radixColors.blueDark.blue12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.blueDarkA.blueA6,
  },
  light: {
    accent1: radixColors.blue.blue1,
    accent2: radixColors.blue.blue2,
    accent3: radixColors.blue.blue3,
    accent4: radixColors.blue.blue4,
    accent5: radixColors.blue.blue5,
    accent6: radixColors.blue.blue6,
    accent7: radixColors.blue.blue7,
    accent8: radixColors.blue.blue8,
    // accent9: radixColors.blue.blue9,
    accent9: custom9,
    accent10: radixColors.blue.blue10,
    accent11: radixColors.blue.blue11,
    accent12: radixColors.blue.blue12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.blueA.blueA6,
  },
};
