import React from 'react';
import { CMSHobbies } from '../../cms-integration/markdown/hobbies';

interface HobbiesAndInterestsProps {
  hobbies: CMSHobbies;
}

export const HobbiesAndInterests: React.FC<HobbiesAndInterestsProps> = (
  props,
) => {
  return (
    <article
      className="prose lg:prose-xl prose-neutral mt-2"
      dangerouslySetInnerHTML={{ __html: props.hobbies.html }}
    />
  );
};
