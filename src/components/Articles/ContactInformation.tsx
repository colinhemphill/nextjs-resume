import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { CMSPrivateInformation } from '../../cms-integration/markdown/private';
import { SectionHeading } from '../SectionHeading/SectionHeading';

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
      <SectionHeading icon={faIdCard} level={3} text="Contact Information" />

      <ul className="mt-2">
        <li>
          <strong>Location:</strong> {personalInformation.attributes.location}
        </li>

        {/* private access required */}
        {privateInformation?.map((privateField) => (
          <li className="mt-3" key={privateField.attributes.label}>
            <strong>{privateField.attributes.label}</strong>{' '}
            <div dangerouslySetInnerHTML={{ __html: privateField.html }} />
          </li>
        ))}
      </ul>
    </article>
  );
};
