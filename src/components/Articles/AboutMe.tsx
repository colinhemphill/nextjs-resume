import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import SectionHeader from '../SectionHeader/SectionHeader';

interface AboutMeProps {
  personalInformation: CMSPersonalInformation<unknown>;
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
  const { personalInformation } = props;
  const CMS = getCMSIntegration();

  return (
    <article>
      <SectionHeader icon={faUser} text="About Me" />
      <CMS.RichTextComponent
        richText={personalInformation.about_me_description}
      />
    </article>
  );
};

export default AboutMe;
