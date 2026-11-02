'use client';

import { DocumentIcon } from '@heroicons/react/24/solid';
import { Button } from '@src/components/button/button';
import { useParams } from 'next/navigation';
import { ReactNode } from 'react';

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
