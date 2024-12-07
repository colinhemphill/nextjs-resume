import { DocumentIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Button } from 'src/components/button/button';

interface PDFDownloadButtonProperties {
  secret?: string;
}

export default function PDFDownloadButton({
  secret,
}: PDFDownloadButtonProperties): ReactNode {
  return (
    <Button asChild size="lg">
      <a href={secret ? `/api/pdf?secret=${secret}` : '/api/pdf'}>
        <DocumentIcon />
        View or Download PDF
      </a>
    </Button>
  );
}
