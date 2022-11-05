import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@strum/react';
import React from 'react';

interface PDFDownloadButtonProps {
  secret?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = (props) => {
  const { secret } = props;

  return (
    <Button
      as="a"
      href={secret ? `/api/pdf?secret=${secret}` : '/api/pdf'}
      size="large"
    >
      <FontAwesomeIcon icon={faFilePdf} />
      View or Download PDF
    </Button>
  );
};

export default PDFDownloadButton;
