import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { RichText, RichTextComponent } from '../../lib/cms';
import SectionHeader from '../SectionHeader/SectionHeader';

interface Props {
  personalInformation: CMSPersonalInformation<RichText>;
}

const AboutMe = (props: Props): JSX.Element => {
  const { personalInformation } = props;

  return (
    <article>
      <SectionHeader icon={faUser} text="About Me" />
      <RichTextComponent richText={personalInformation.about_me_description} />
    </article>
  );
};

export default AboutMe;
