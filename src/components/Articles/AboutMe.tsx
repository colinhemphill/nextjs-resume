import { UserIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import SectionHeading from '../SectionHeading/SectionHeading';

interface AboutMeProps {
  personalInformation: CMSPersonalInformation;
}

const AboutMe: React.FC<AboutMeProps> = ({ personalInformation }) => {
  return (
    <article>
      <SectionHeading Icon={UserIcon} text="About Me" />
      <div className="prose lg:prose-xl prose-neutral mt-2">
        <div dangerouslySetInnerHTML={{ __html: personalInformation.html }} />
      </div>
    </article>
  );
};

export default AboutMe;
