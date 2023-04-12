import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { personal } from 'contentlayer/generated';
import React from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';

interface ContactInformationProps {
  // privateInformation?: CMSPrivateInformation[];
}

export const ContactInformation: React.FC = () => {
  return (
    <article>
      <SectionHeading icon={faIdCard} level={3} text="Contact Information" />

      <ul className="mt-2">
        <li>
          <strong>Location:</strong> {personal.location}
        </li>

        {/* private access required */}
        {/* {privateInformation?.map((privateField) => (
          <li className="mt-3" key={privateField.attributes.label}>
            <strong>{privateField.attributes.label}</strong>{' '}
            <div dangerouslySetInnerHTML={{ __html: privateField.html }} />
          </li>
        ))} */}
      </ul>
    </article>
  );
};
