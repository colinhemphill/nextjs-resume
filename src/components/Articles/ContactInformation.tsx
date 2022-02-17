import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import Column from '../../strum-design-system/components/Layout/Column';
import Row from '../../strum-design-system/components/Layout/Row';
import SectionHeader from '../SectionHeader/SectionHeader';

interface ContactInformationProps {
  personalInformation: CMSPersonalInformation<unknown>;
  privateInformation?: CMSPrivateInformation<unknown>[];
}

const ContactInformation: React.FC<ContactInformationProps> = (props) => {
  const { personalInformation, privateInformation } = props;
  const CMS = getCMSIntegration();

  return (
    <article>
      <SectionHeader icon={faIdCard} text="Contact Information" />
      <ul className="list-unstyled">
        <li>
          <Row>
            <Column width={{ sm: 3, lg: 2 }}>
              <strong>Location:</strong>
            </Column>
            <Column>{personalInformation.location}</Column>
          </Row>
        </li>
        {privateInformation &&
          privateInformation.map((privateField) => (
            <li key={privateField.label}>
              <Row>
                <Column width={{ sm: 3, lg: 2 }}>
                  <strong>{privateField.label}:</strong>
                </Column>
                <Column>
                  <CMS.RichTextComponent richText={privateField.content} />
                </Column>
              </Row>
            </li>
          ))}
      </ul>
    </article>
  );
};

export default ContactInformation;
