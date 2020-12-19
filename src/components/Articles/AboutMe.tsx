import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import SectionHeader from '../SectionHeader/SectionHeader';

interface Props {
  personalInformation: CMSPersonalInformation<unknown>;
}

const AboutMe = (props: Props): JSX.Element => {
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
