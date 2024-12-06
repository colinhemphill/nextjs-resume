import { Path, Svg } from '@react-pdf/renderer';
import { ReactNode } from 'react';
import { PdfIconProperties } from 'src/components/pdf/icons/pdf-icon';
import resumeConfig from '../../../../edit-me/config/resume-config';
import { getNeutralColor } from '../../../helpers/colors';

const theme = resumeConfig.pdfTheme;
const neutralColor = getNeutralColor(12, theme);

export default function CircleBriefcase({
  size,
}: PdfIconProperties): ReactNode {
  return (
    <Svg style={{ height: size, width: size }} viewBox="0 0 512 512">
      <Path
        fill={neutralColor}
        d="M0,256C-0,115.563 115.563,0 256,0C396.437,-0 512,115.563 512,256C512,396.437 396.437,512 256,512C115.563,512 0,396.437 0,256ZM173.25,125.633L173.25,151.8L131.875,151.8C109.054,151.8 90.5,170.575 90.5,193.667L90.5,256.467L421.5,256.467L421.5,193.667C421.5,170.575 402.946,151.8 380.125,151.8L338.75,151.8L338.75,125.633C338.75,105.42 322.523,89 302.547,89L209.453,89C189.477,89 173.25,105.42 173.25,125.633ZM209.453,120.4L302.547,120.4C305.391,120.4 307.719,122.755 307.719,125.633L307.719,151.8L204.281,151.8L204.281,125.633C204.281,122.755 206.609,120.4 209.453,120.4ZM421.5,277.4L297.375,277.4L297.375,298.333C297.375,309.912 288.13,319.267 276.688,319.267L235.313,319.267C223.87,319.267 214.625,309.912 214.625,298.333L214.625,277.4L90.5,277.4L90.5,361.133C90.5,384.225 109.054,403 131.875,403L380.125,403C402.946,403 421.5,384.225 421.5,361.133L421.5,277.4Z"
      />
    </Svg>
  );
}
