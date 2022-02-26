import { readableColor } from 'polished';

export const getContrastingColor = (backgroundColor: string) =>
  readableColor(backgroundColor, '#25252D', '#FFFFFF');
