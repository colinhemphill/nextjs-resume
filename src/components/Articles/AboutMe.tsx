import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Box, Text } from '@strum/react';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import SectionHeading from '../SectionHeading/SectionHeading';

interface AboutMeProps {
  personalInformation: CMSPersonalInformation;
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
  const { personalInformation } = props;

  return (
    <Box as="article">
      <SectionHeading icon={faUser} text="About Me" />
      <Text>
        <div dangerouslySetInnerHTML={{ __html: personalInformation.html }} />
      </Text>
    </Box>
  );
};

export default AboutMe;
