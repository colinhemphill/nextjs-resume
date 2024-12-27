import { AccentColors, NeutralColors } from '@config-types/config';

export default function getColorScale(
  colorName: string,
  color: AccentColors | NeutralColors,
): Record<string, Record<number, string>> {
  return {
    [colorName]: {
      1: `var(--color-${color}-1)`,
      2: `var(--color-${color}-2)`,
      3: `var(--color-${color}-3)`,
      4: `var(--color-${color}-4)`,
      5: `var(--color-${color}-5)`,
      6: `var(--color-${color}-6)`,
      7: `var(--color-${color}-7)`,
      8: `var(--color-${color}-8)`,
      9: `var(--color-${color}-9)`,
      10: `var(--color-${color}-10)`,
      11: `var(--color-${color}-11)`,
      12: `var(--color-${color}-12)`,
    },
  };
}
