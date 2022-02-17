import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms } from '../../sprinkles.css';
import { rounded } from '../../styles/borderRadius.css';
import colors from '../../themes/timbre/colors';
import {
  alertBackgroundAdjust,
  alertBorderAdjust,
  alertForegroundAdjust,
} from '../../utils/alerts';

const alertBaseStyle = style([
  rounded,
  {
    border: '1px solid transparent',
  },
]);

export const alertStyle = recipe({
  base: alertBaseStyle,
  defaultVariants: { color: 'primary', padding: 'm' },
  variants: {
    color: {
      green: {
        backgroundColor: alertBackgroundAdjust(colors.green),
        borderColor: alertBorderAdjust(colors.green),
        color: alertForegroundAdjust(colors.green),
      },
      primary: {
        backgroundColor: alertBackgroundAdjust(colors.primary),
        borderColor: alertBorderAdjust(colors.primary),
        color: alertForegroundAdjust(colors.primary),
      },
      red: {
        backgroundColor: alertBackgroundAdjust(colors.red),
        borderColor: alertBorderAdjust(colors.red),
        color: alertForegroundAdjust(colors.red),
      },
      yellow: {
        backgroundColor: alertBackgroundAdjust(colors.yellow),
        borderColor: alertBorderAdjust(colors.yellow),
        color: alertForegroundAdjust(colors.yellow),
      },
    },
    padding: {
      m: atoms({
        padding: 4,
      }),
      s: atoms({ padding: 2 }),
    },
  },
});

export type AlertVariants = RecipeVariants<typeof alertStyle>;
