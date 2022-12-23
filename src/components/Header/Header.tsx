import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { getFullName } from '../../helpers/utils';
import { Heading } from '../Heading/Heading';
import PDFDownloadButton from '../PDF/PDFDownloadButton';

interface HeaderProps {
  personalInformation: CMSPersonalInformation;
  secret?: string;
}

export const Header: React.FC<HeaderProps> = ({
  personalInformation,
  secret,
}) => {
  return (
    <div className="mb-12 border-b-2 border-neutral-light-4 py-12 dark:border-neutral-dark-4">
      <div className="container">
        <div className="flex flex-col items-center text-center md:flex-row md:text-left">
          <div className="flex flex-1 flex-col gap-2">
            <Heading level={1}>{getFullName(personalInformation)}</Heading>
            <Heading color="neutral11" level={2}>
              {personalInformation.attributes.title}
            </Heading>
          </div>
          <div className="mt-6 md:mt-0">
            <PDFDownloadButton secret={secret} />
          </div>
        </div>
      </div>
    </div>
  );
};
