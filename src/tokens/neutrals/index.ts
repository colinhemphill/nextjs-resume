import { gray } from './gray';
import { mauve } from './mauve';
import { olive } from './olive';
import { sage } from './sage';
import { sand } from './sand';
import { slate } from './slate';

export const neutrals = {
  gray,
  mauve,
  olive,
  sage,
  sand,
  slate,
};

export type NeutralColor = keyof typeof neutrals;
