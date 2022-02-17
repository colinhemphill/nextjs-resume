import { darken, desaturate, lighten } from 'polished';
import { compose } from './compose';

export const alertBackgroundAdjust = compose(desaturate(0.1), lighten(0.35));
export const alertForegroundAdjust = darken(0.25);
export const alertBorderAdjust = compose(alertBackgroundAdjust, darken(0.1));
