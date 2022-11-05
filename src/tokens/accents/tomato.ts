import * as radixColors from '@radix-ui/colors';
import { hsl } from 'polished';
import { baseColors } from '../color';

const custom9 = hsl(10, 0.78, 0.48);

export const tomato = {
  dark: {
    accent1: radixColors.tomatoDark.tomato1,
    accent2: radixColors.tomatoDark.tomato2,
    accent3: radixColors.tomatoDark.tomato3,
    accent4: radixColors.tomatoDark.tomato4,
    accent5: radixColors.tomatoDark.tomato5,
    accent6: radixColors.tomatoDark.tomato6,
    accent7: radixColors.tomatoDark.tomato7,
    accent8: radixColors.tomatoDark.tomato8,
    // accent9: radixColors.tomatoDark.tomato9,
    accent9: custom9,
    accent10: radixColors.tomatoDark.tomato10,
    accent11: radixColors.tomatoDark.tomato11,
    accent12: radixColors.tomatoDark.tomato12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.tomatoDarkA.tomatoA6,
  },
  light: {
    accent1: radixColors.tomato.tomato1,
    accent2: radixColors.tomato.tomato2,
    accent3: radixColors.tomato.tomato3,
    accent4: radixColors.tomato.tomato4,
    accent5: radixColors.tomato.tomato5,
    accent6: radixColors.tomato.tomato6,
    accent7: radixColors.tomato.tomato7,
    accent8: radixColors.tomato.tomato8,
    // accent9: radixColors.tomato.tomato9,
    accent9: custom9,
    accent10: radixColors.tomato.tomato10,
    accent11: radixColors.tomato.tomato11,
    accent12: radixColors.tomato.tomato12,
    accentContrast: baseColors.white,
    accentTransparent: radixColors.tomatoDarkA.tomatoA6,
  },
};
