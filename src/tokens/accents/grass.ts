import * as radixColors from '@radix-ui/colors';
import { hsl } from 'polished';
import { baseColors } from '../color';

const custom9 = hsl(131, 0.4, 0.37);

export const grass = {
  dark: {
    accent1: radixColors.grassDark.grass1,
    accent2: radixColors.grassDark.grass2,
    accent3: radixColors.grassDark.grass3,
    accent4: radixColors.grassDark.grass4,
    accent5: radixColors.grassDark.grass5,
    accent6: radixColors.grassDark.grass6,
    accent7: radixColors.grassDark.grass7,
    accent8: radixColors.grassDark.grass8,
    // accent9: radixColors.grassDark.grass9,
    accent9: custom9,
    accent10: radixColors.grassDark.grass10,
    accent11: radixColors.grassDark.grass11,
    accent12: radixColors.grassDark.grass12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.grassDarkA.grassA6,
  },
  light: {
    accent1: radixColors.grass.grass1,
    accent2: radixColors.grass.grass2,
    accent3: radixColors.grass.grass3,
    accent4: radixColors.grass.grass4,
    accent5: radixColors.grass.grass5,
    accent6: radixColors.grass.grass6,
    accent7: radixColors.grass.grass7,
    accent8: radixColors.grass.grass8,
    // accent9: radixColors.grass.grass9,
    accent9: custom9,
    accent10: radixColors.grass.grass10,
    accent11: radixColors.grass.grass11,
    accent12: radixColors.grass.grass12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.grassDarkA.grassA6,
  },
};
