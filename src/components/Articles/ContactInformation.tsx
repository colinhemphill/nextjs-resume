// import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { Box, Nav, NavItem, Text } from '@strum/react';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { CMSPrivateInformation } from '../../cms-integration/markdown/private';

interface ContactInformationProps {
  personalInformation: CMSPersonalInformation;
  privateInformation?: CMSPrivateInformation[];
}

const ContactInformation: React.FC<ContactInformationProps> = (props) => {
  const { personalInformation, privateInformation } = props;

  return (
    <Box as="article">
      {/* <SectionHeading icon={faIdCard} text="Contact Information" /> */}
      <Nav direction="vertical">
        <NavItem>
          <Text as="p">
            <strong>Location: </strong>
            {personalInformation.attributes.location}
          </Text>
        </NavItem>
      </Nav>
      {/* <UnorderedList direction="vertical">
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
      </UnorderedList> */}
    </Box>
  );
};

export default ContactInformation;
