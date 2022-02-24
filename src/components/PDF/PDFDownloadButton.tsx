import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { getFullName } from '../../helpers/utils';
import { ResumePageProps } from '../../pages';
import { buttonStyle } from '../../strum-design-system/components/Button/Button.css';
import { atoms } from '../../strum-design-system/sprinkles.css';
import PDF from './PDF';

const PDFDownloadButton: React.FC<ResumePageProps> = (props) => {
  const year = new Date().getFullYear();

  return (
    <PDFDownloadLink
      className={buttonStyle({
        color: 'primary',
        size: 'lg',
      })}
      document={<PDF {...props} />}
      fileName={`${getFullName(props.personalInformation)}-Resume-${year}`}
    >
      <FontAwesomeIcon className={atoms({ marginRight: 2 })} icon={faFilePdf} />
      Download PDF
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
