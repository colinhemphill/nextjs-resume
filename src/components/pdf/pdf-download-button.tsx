'use client';

import { DocumentIcon } from '@heroicons/react/24/solid';
import { useParams } from 'next/navigation';
import { ReactNode } from 'react';
import { Button } from 'src/components/button/button';

export default function PDFDownloadButton(): ReactNode {
  const { secret } = useParams<{ secret: string }>();

  return (
    <Button asChild size="lg">
      <a href={secret ? `/api/pdf?secret=${secret}` : '/api/pdf'}>
        <DocumentIcon />
        View or Download PDF
      </a>
    </Button>
  );
}
