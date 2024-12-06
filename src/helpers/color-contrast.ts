import config from '../../edit-me/config/resume-config';
import { AccentColorsBright, ResumeConfig } from '../../edit-me/types/config';

const isBrightColor = (
  color: ResumeConfig['accentColor'],
): color is AccentColorsBright => {
  const brightColors = Object.values(AccentColorsBright) as string[];
  return brightColors.includes(color);
};

export const contrastColor = isBrightColor(config.accentColor)
  ? '#000'
  : '#fff';
