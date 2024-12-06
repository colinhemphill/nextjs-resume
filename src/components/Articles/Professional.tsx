import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import SectionHeading from 'src/components/section-heading/section-heading';
import { sortedProfessionalExperiences } from 'src/helpers/utils';
import ProfessionalItem from './professional-item';

export default function Professional(): ReactNode {
  return (
    <article className="rounded-xl border border-neutral-6 bg-neutral-2 py-12 shadow-lg">
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
}
