import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

interface Props {
  personalInformation: CMSPersonalInformation<unknown>;
}

const ContactInformation = (props: Props): JSX.Element => {
  const { personalInformation } = props;

  return (
    <article>
      <SectionHeader icon={faIdCard} text="Contact Information" />
      <ul className="list-unstyled">
        <li>
          <strong>Location:</strong> {personalInformation.location}
        </li>
      </ul>
    </article>
  );
};

export default ContactInformation;
