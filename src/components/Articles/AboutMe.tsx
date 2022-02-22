import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import Box from '../../strum-design-system/components/Box/Box';
import SectionHeader from '../SectionHeader/SectionHeader';

interface AboutMeProps {
  personalInformation: CMSPersonalInformation;
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
  const { personalInformation } = props;

  return (
    <Box as="article" marginBottom={{ xs: 6, lg: 0 }}>
      <SectionHeader icon={faUser} text="About Me" />
      <div dangerouslySetInnerHTML={{ __html: personalInformation.html }} />
    </Box>
  );
};

export default AboutMe;
