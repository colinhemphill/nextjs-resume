import { Path, Svg } from '@react-pdf/renderer';
import React from 'react';
import resumeConfig from '../../../../edit-me/config/resumeConfig';
import { getNeutralColor } from '../../../helpers/colors';

const theme = resumeConfig.pdfTheme;
const neutralColor = getNeutralColor(12, theme);

export const CircleCheck: React.FC<PdfIconProps> = ({ size }) => {
  return (
    <Svg style={{ height: size, width: size }} viewBox="0 0 512 512">
      <Path
        fill={neutralColor}
        d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
      />
    </Svg>
  );
};
