import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import Box from '../../strum-design-system/components/Box/Box';
import Column from '../../strum-design-system/components/Layout/Column';
import Row from '../../strum-design-system/components/Layout/Row';
import NavListItem from '../../strum-design-system/components/Nav/NavListItem';
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
    <Box as="article" marginBottom={{ xs: 6, lg: 0 }}>
      <SectionHeader icon={faIdCard} text="Contact Information" />
      <UnorderedList direction="vertical">
        <NavListItem>
          <Row>
            <Column width={{ xs: 'auto' }}>
              <strong>Location:</strong>
            </Column>
            <Column>{personalInformation.location}</Column>
          </Row>
        </NavListItem>
        {privateInformation &&
          privateInformation.map((privateField) => (
            <NavListItem key={privateField.label}>
              <Row>
                <Column width={{ xs: 'auto' }}>
                  <strong>{privateField.label}:</strong>
                </Column>
                <Column>
                  <CMS.RichTextComponent richText={privateField.content} />
                </Column>
              </Row>
            </NavListItem>
          ))}
      </UnorderedList>
    </Box>
  );
};

export default ContactInformation;
