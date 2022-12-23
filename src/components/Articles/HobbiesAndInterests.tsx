import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSHobbies } from '../../cms-integration/markdown/hobbies';
import Prose from '../Prose/Prose';
import { SectionHeading } from '../SectionHeading/SectionHeading';

interface HobbiesAndInterestsProps {
  hobbies: CMSHobbies;
}

export const HobbiesAndInterests: React.FC<HobbiesAndInterestsProps> = ({
  hobbies,
}) => {
  return (
    <article className="py-12">
      <div className="mb-6 flex justify-center">
        <SectionHeading
          icon={faPaintBrush}
          level={2}
          text="Hobbies &amp; Interests"
        />
      </div>

      <Prose html={hobbies.html} />
    </article>
  );
};
