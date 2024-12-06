import { Path, Svg } from '@react-pdf/renderer';
import { ReactNode } from 'react';
import { PdfIconProperties } from 'src/components/pdf/icons/pdf-icon';
import resumeConfig from '../../../../edit-me/config/resume-config';
import { getNeutralColor } from '../../../helpers/colors';

const theme = resumeConfig.pdfTheme;
const neutralColor = getNeutralColor(12, theme);

export default function CircleGraduationCap({
  size,
}: PdfIconProperties): ReactNode {
  return (
    <Svg style={{ height: size, width: size }} viewBox="0 0 512 512">
      <Path
        fill={neutralColor}
        d="M0,256C-0,115.563 115.563,0 256,0C396.437,-0 512,115.563 512,256C512,396.437 396.437,512 256,512C115.563,512 0,396.437 0,256ZM256.005,108.949C251.05,108.949 246.156,109.805 241.507,111.457L69.921,173.424C64.109,175.565 60.256,181.07 60.256,187.248C60.256,193.427 64.109,198.932 69.921,201.073L105.339,213.858C95.307,229.64 89.618,248.298 89.618,267.934L89.618,285.123C89.618,302.496 83.011,320.419 75.977,334.55C72.001,342.502 67.474,350.332 62.213,357.55C60.256,360.181 59.705,363.606 60.806,366.726C61.907,369.846 64.476,372.17 67.657,372.965L106.807,382.753C109.376,383.426 112.129,382.936 114.392,381.529C116.656,380.122 118.246,377.798 118.736,375.168C123.996,348.986 121.366,325.496 117.451,308.674C115.494,299.988 112.863,291.118 109.193,282.982L109.193,267.934C109.193,249.46 115.432,232.026 126.26,218.079C134.151,208.597 144.367,200.951 156.356,196.241L252.396,158.498C257.412,156.54 263.101,158.987 265.058,164.003C267.016,169.019 264.569,174.708 259.553,176.666L163.513,214.409C155.928,217.406 149.26,221.994 143.816,227.622L241.446,262.857C246.095,264.508 250.989,265.365 255.944,265.365C260.898,265.365 265.792,264.508 270.441,262.857L442.089,201.073C447.9,198.993 451.754,193.427 451.754,187.248C451.754,181.07 447.9,175.565 442.089,173.424L270.502,111.457C265.853,109.805 260.96,108.949 256.005,108.949ZM138.555,338.954C138.555,360.548 191.163,382.998 256.005,382.998C320.847,382.998 373.454,360.548 373.454,338.954L364.095,250.01L277.109,281.453C270.319,283.9 263.162,285.123 256.005,285.123C248.848,285.123 241.629,283.9 234.901,281.453L147.914,250.01L138.555,338.954Z"
      />
    </Svg>
  );
}
