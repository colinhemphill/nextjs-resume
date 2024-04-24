import { BriefcaseIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { sortedProfessionalExperiences } from 'src/helpers/utils';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import ProfessionalItem from './ProfessionalItem';

const Professional: React.FC = () => {
  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading
            Icon={BriefcaseIcon}
            level={2}
            text="Professional Experience"
          />
        </div>

        {sortedProfessionalExperiences.map((professional) => (
          <ProfessionalItem key={professional._id} {...professional} />
        ))}
      </div>
    </article>
  );
};

export default Professional;
