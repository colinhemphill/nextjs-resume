import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import Column from '../../strum-design-system/components/Layout/Column';
import Row from '../../strum-design-system/components/Layout/Row';
import UnorderedList from '../../strum-design-system/components/Nav/UnorderedList';
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
      <UnorderedList>
        <li>
          <Row>
            <Column width={{ xs: 'auto' }}>
              <strong>Location:</strong>
            </Column>
            <Column>{personalInformation.location}</Column>
          </Row>
        </li>
        {privateInformation &&
          privateInformation.map((privateField) => (
            <li key={privateField.label}>
              <Row>
                <Column width={{ xs: 'auto' }}>
                  <strong>{privateField.label}:</strong>
                </Column>
                <Column>
                  <CMS.RichTextComponent richText={privateField.content} />
                </Column>
              </Row>
            </li>
          ))}
      </UnorderedList>
    </article>
  );
};

export default ContactInformation;
