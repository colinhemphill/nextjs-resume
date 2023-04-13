import { AccentColorsBright, ResumeConfig } from '../../edit-me/types/Config';
import config from '../../edit-me/config/resumeConfig';

const isBrightColor = (
  color: ResumeConfig['accentColor'],
): color is AccentColorsBright => {
  const brightColors = Object.values(AccentColorsBright) as Array<string>;
  return brightColors.includes(color);
};

export const contrastColor = isBrightColor(config.accentColor)
  ? '#000'
  : '#fff';
