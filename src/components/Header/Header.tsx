import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { getFullName } from '../../helpers/utils';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';

interface HeaderProps {
  personalInformation: CMSPersonalInformation;
}

const Header: React.FC<HeaderProps> = ({ personalInformation }) => {
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
            <Button size="lg" type="button">
              <FontAwesomeIcon
                className="mr-2 align-middle"
                icon={faFilePdf}
                size="lg"
              />
              <span className="align-middle">View or Download PDF</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
