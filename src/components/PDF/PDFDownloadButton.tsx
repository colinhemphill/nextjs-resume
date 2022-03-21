import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import usePrefersDarkMode from '../../helpers/useDarkMode';
import { buttonStyle } from '../../strum-design-system/components/Button/Button.css';
import { atoms } from '../../strum-design-system/sprinkles.css';

interface PDFDownloadButtonProps {
  secret?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = (props) => {
  const { secret } = props;
  const darkMode = usePrefersDarkMode();

  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      className={buttonStyle({
        color: darkMode ? 'primary' : 'medium',
        size: 'lg',
      })}
      href={secret ? `/api/pdf?secret=${secret}` : '/api/pdf'}
      target="_blank"
    >
      <FontAwesomeIcon className={atoms({ marginRight: 2 })} icon={faFilePdf} />
      View or Download PDF
    </a>
  );
};

export default PDFDownloadButton;
