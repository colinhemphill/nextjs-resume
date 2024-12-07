import { personal } from '@content';
import { ReactNode } from 'react';
import { Heading } from 'src/components/heading/heading';
import PDFDownloadButton from 'src/components/pdf/pdf-download-button';
import { fullName } from 'src/helpers/utils';

export default function Header(): ReactNode {
  return (
    <header className="border-b border-neutral-6 bg-neutral-1 py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex-1 space-y-2">
            <Heading level={1}>{fullName}</Heading>
            <Heading color="muted" className="text-balance" level={2}>
              {personal.title}
            </Heading>
          </div>
          <PDFDownloadButton />
        </div>
      </div>
    </header>
  );
}
