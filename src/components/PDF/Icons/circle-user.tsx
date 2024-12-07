import { resumeConfig } from '@config/resume-config';
import { Path, Svg } from '@react-pdf/renderer';
import { ReactNode } from 'react';
import { PdfIconProperties } from 'src/components/pdf/icons/pdf-icon';
import { getNeutralColor } from 'src/helpers/colors';

const theme = resumeConfig.pdfTheme;
const neutralColor = getNeutralColor(12, theme);

export default function CircleUser({ size }: PdfIconProperties): ReactNode {
  return (
    <Svg style={{ height: size, width: size }} viewBox="0 0 512 512">
      <Path
        fill={neutralColor}
        d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
      />
    </Svg>
  );
}
