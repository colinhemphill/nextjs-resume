import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ResumePageProps } from '../../pages';
import { buttonStyle } from '../../strum-design-system/components/Button/Button.css';
import { atoms } from '../../strum-design-system/sprinkles.css';

const PDFDownloadButton: React.FC<ResumePageProps> = (props) => {
  return (
    <a
      className={buttonStyle({
        color: 'primary',
        size: 'lg',
      })}
      href="/pdf"
      target="_blank"
    >
      <FontAwesomeIcon className={atoms({ marginRight: 2 })} icon={faFilePdf} />
      Download PDF
    </a>
  );
};

export default PDFDownloadButton;
