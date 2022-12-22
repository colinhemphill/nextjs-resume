import { IdentificationIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { CMSPrivateInformation } from '../../cms-integration/markdown/private';
import SectionHeading from '../SectionHeading/SectionHeading';

interface ContactInformationProps {
  personalInformation: CMSPersonalInformation;
  privateInformation?: CMSPrivateInformation[];
}

export const ContactInformation: React.FC<ContactInformationProps> = ({
  personalInformation,
  privateInformation,
}) => {
  return (
    <article>
      <SectionHeading Icon={IdentificationIcon} text="Contact Information" />
      <ul className="mt-2">
        <li>
          <strong>Location:</strong> {personalInformation.attributes.location}
        </li>
        {privateInformation &&
          privateInformation.map((privateField) => (
            <li key={privateField.attributes.label}>
              <strong>{privateField.attributes.label}</strong>{' '}
              <div dangerouslySetInnerHTML={{ __html: privateField.html }} />
            </li>
          ))}
      </ul>
    </article>
  );
};
