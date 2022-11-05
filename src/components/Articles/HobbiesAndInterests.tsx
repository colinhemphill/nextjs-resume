import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSHobbies } from '../../cms-integration/markdown/hobbies';
import SectionHeading from '../SectionHeading/SectionHeading';

interface HobbiesAndInterestsProps {
  hobbies: CMSHobbies;
}

const HobbiesAndInterests: React.FC<HobbiesAndInterestsProps> = (props) => {
  return (
    <article>
      <SectionHeading icon={faDiceD20} text="Hobbies &amp; Interests" />
      <div dangerouslySetInnerHTML={{ __html: props.hobbies.html }} />
    </article>
  );
};

export default HobbiesAndInterests;
