import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import Prose from '../Prose/Prose';
import { SectionHeading } from '../SectionHeading/SectionHeading';

interface AboutMeProps {
  personalInformation: CMSPersonalInformation;
}

const AboutMe: React.FC<AboutMeProps> = ({ personalInformation }) => {
  return (
    <article>
      <SectionHeading icon={faUser} level={3} text="About Me" />
      <Prose html={personalInformation.html} />
    </article>
  );
};

export default AboutMe;
