import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSHobbies } from '../../cms-integration/markdown/hobbies';
import SectionHeader from '../SectionHeader/SectionHeader';

interface HobbiesAndInterestsProps {
  hobbies: CMSHobbies;
}

const HobbiesAndInterests: React.FC<HobbiesAndInterestsProps> = (props) => {
  return (
    <article>
      <SectionHeader icon={faDiceD20} text="Hobbies &amp; Interests" />
      <div dangerouslySetInnerHTML={{ __html: props.hobbies.html }} />
    </article>
  );
};

export default HobbiesAndInterests;
