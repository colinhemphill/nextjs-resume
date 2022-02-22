import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import SectionHeader from '../SectionHeader/SectionHeader';

interface HobbiesAndInterestsProps {
  personalInformation: CMSPersonalInformation;
}

const HobbiesAndInterests: React.FC<HobbiesAndInterestsProps> = (props) => {
  return (
    <article>
      <SectionHeader icon={faDiceD20} text="Hobbies &amp; Interests" />
      {/* <CMS.RichTextComponent
        richText={personalInformation.hobbies_and_interests}
      /> */}
    </article>
  );
};

export default HobbiesAndInterests;
