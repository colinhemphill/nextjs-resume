import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import SectionHeading from '../SectionHeading/SectionHeading';

interface AboutMeProps {
  personalInformation: CMSPersonalInformation;
}

const AboutMe: React.FC<AboutMeProps> = ({ personalInformation }) => {
  return (
    <article>
      <SectionHeading icon={faUser} level={3} text="About Me" />

      <div
        className="prose lg:prose-xl prose-neutral mt-2"
        dangerouslySetInnerHTML={{ __html: personalInformation.html }}
      />
    </article>
  );
};

export default AboutMe;
