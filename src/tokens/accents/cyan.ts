import * as radixColors from '@radix-ui/colors';
import { hsl } from 'polished';
import { baseColors } from '../color';

const custom9 = hsl(190, 1, 0.3);

export const cyan = {
  dark: {
    accent1: radixColors.cyanDark.cyan1,
    accent2: radixColors.cyanDark.cyan2,
    accent3: radixColors.cyanDark.cyan3,
    accent4: radixColors.cyanDark.cyan4,
    accent5: radixColors.cyanDark.cyan5,
    accent6: radixColors.cyanDark.cyan6,
    accent7: radixColors.cyanDark.cyan7,
    accent8: radixColors.cyanDark.cyan8,
    // accent9: radixColors.cyanDark.cyan9,
    accent9: custom9,
    accent10: radixColors.cyanDark.cyan10,
    accent11: radixColors.cyanDark.cyan11,
    accent12: radixColors.cyanDark.cyan12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.cyanDarkA.cyanA6,
  },
  light: {
    accent1: radixColors.cyan.cyan1,
    accent2: radixColors.cyan.cyan2,
    accent3: radixColors.cyan.cyan3,
    accent4: radixColors.cyan.cyan4,
    accent5: radixColors.cyan.cyan5,
    accent6: radixColors.cyan.cyan6,
    accent7: radixColors.cyan.cyan7,
    accent8: radixColors.cyan.cyan8,
    // accent9: radixColors.cyan.cyan9,
    accent9: custom9,
    accent10: radixColors.cyan.cyan10,
    accent11: radixColors.cyan.cyan11,
    accent12: radixColors.cyan.cyan12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.cyanDarkA.cyanA6,
  },
};
