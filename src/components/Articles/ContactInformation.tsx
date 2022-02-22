import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { CMSPrivateInformation } from '../../cms-integration/markdown/private';
import Box from '../../strum-design-system/components/Box/Box';
import Column from '../../strum-design-system/components/Layout/Column';
import Row from '../../strum-design-system/components/Layout/Row';
import NavListItem from '../../strum-design-system/components/Nav/NavListItem';
import UnorderedList from '../../strum-design-system/components/Nav/UnorderedList';
import SectionHeader from '../SectionHeader/SectionHeader';

interface ContactInformationProps {
  personalInformation: CMSPersonalInformation;
  privateInformation?: CMSPrivateInformation[];
}

const ContactInformation: React.FC<ContactInformationProps> = (props) => {
  const { personalInformation, privateInformation } = props;

  return (
    <Box as="article" marginBottom={{ xs: 6, lg: 0 }}>
      <SectionHeader icon={faIdCard} text="Contact Information" />
      <UnorderedList direction="vertical">
        <NavListItem>
          <Row>
            <Column width={{ xs: 'auto' }}>
              <strong>Location:</strong>
            </Column>
            <Column>{personalInformation.attributes.location}</Column>
          </Row>
        </NavListItem>
        {privateInformation &&
          privateInformation.map((privateField) => (
            <NavListItem key={privateField.attributes.label}>
              <Row>
                <Column width={{ xs: 'auto' }}>
                  <strong>{privateField.attributes.label}:</strong>
                </Column>
                <Column>
                  <div
                    dangerouslySetInnerHTML={{ __html: privateField.html }}
                  />
                </Column>
              </Row>
            </NavListItem>
          ))}
      </UnorderedList>
    </Box>
  );
};

export default ContactInformation;
