import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import Box from '../../strum-design-system/components/Box/Box';
import SectionHeader from '../SectionHeader/SectionHeader';
import { articleStyle } from './article.css';

interface AboutMeProps {
  personalInformation: CMSPersonalInformation<unknown>;
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
  const { personalInformation } = props;
  const CMS = getCMSIntegration();

  return (
    <Box as="article" marginBottom={{ xs: 6, lg: 0 }}>
      <SectionHeader icon={faUser} text="About Me" />
      <CMS.RichTextComponent
        richText={personalInformation.about_me_description}
      />
    </Box>
  );
};

export default AboutMe;
