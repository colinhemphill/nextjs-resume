import { DocumentIcon } from '@heroicons/react/24/solid';
import React from 'react';
import ButtonLink from '../Button/ButtonLink';

interface PDFDownloadButtonProps {
  secret?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ secret }) => {
  return (
    <ButtonLink
      href={secret ? `/api/pdf?secret=${secret}` : '/api/pdf'}
      size="lg"
    >
      <DocumentIcon className="h-6" />
      View or Download PDF
    </ButtonLink>
  );
};

export default PDFDownloadButton;
