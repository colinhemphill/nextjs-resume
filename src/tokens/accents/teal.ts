import * as radixColors from '@radix-ui/colors';
import { hsl } from 'polished';
import { baseColors } from '../color';

const custom9 = hsl(173, 0.95, 0.26);

export const teal = {
  dark: {
    accent1: radixColors.tealDark.teal1,
    accent2: radixColors.tealDark.teal2,
    accent3: radixColors.tealDark.teal3,
    accent4: radixColors.tealDark.teal4,
    accent5: radixColors.tealDark.teal5,
    accent6: radixColors.tealDark.teal6,
    accent7: radixColors.tealDark.teal7,
    accent8: radixColors.tealDark.teal8,
    // accent9: radixColors.tealDark.teal9,
    accent9: custom9,
    accent10: radixColors.tealDark.teal10,
    accent11: radixColors.tealDark.teal11,
    accent12: radixColors.tealDark.teal12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.tealDarkA.tealA6,
  },
  light: {
    accent1: radixColors.teal.teal1,
    accent2: radixColors.teal.teal2,
    accent3: radixColors.teal.teal3,
    accent4: radixColors.teal.teal4,
    accent5: radixColors.teal.teal5,
    accent6: radixColors.teal.teal6,
    accent7: radixColors.teal.teal7,
    accent8: radixColors.teal.teal8,
    // accent9: radixColors.teal.teal9,
    accent9: custom9,
    accent10: radixColors.teal.teal10,
    accent11: radixColors.teal.teal11,
    accent12: radixColors.teal.teal12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.tealDarkA.tealA6,
  },
};
