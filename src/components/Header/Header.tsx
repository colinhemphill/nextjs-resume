import { personal } from '@content';
import { ReactNode } from 'react';
import { fullName } from '../../helpers/utils';
import { Heading } from '../heading/heading';
import PDFDownloadButton from '../pdf/pdf-download-button';

interface HeaderProperties {
  secret?: string;
}

export default function Header({ secret }: HeaderProperties): ReactNode {
  return (
    <div className="mb-12 border-b-2 border-neutral-4 py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex-1 space-y-2">
            <Heading level={1}>{fullName}</Heading>
            <Heading color="neutralSubtle" className="text-balance" level={2}>
              {personal.title}
            </Heading>
          </div>
          <PDFDownloadButton secret={secret} />
        </div>
      </div>
    </div>
  );
}
