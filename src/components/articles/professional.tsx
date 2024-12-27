import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { Fragment, ReactNode } from 'react';
import Separator from 'src/components/articles/separator';
import SectionHeading from 'src/components/section-heading/section-heading';
import { sortedProfessionalExperiences } from 'src/helpers/utils';
import ProfessionalItem from './professional-item';

export default function Professional(): ReactNode {
  return (
    <article className="border-neutral-6 bg-neutral-2 rounded-xl border py-12 shadow-md">
      <div className="container space-y-8">
        <SectionHeading
          className="justify-center"
          Icon={BriefcaseIcon}
          level={2}
          text="Professional Experience"
        />

        {sortedProfessionalExperiences.map((professional) => (
          <Fragment key={professional._id}>
            <ProfessionalItem {...professional} />
            <Separator />
          </Fragment>
        ))}
      </div>
    </article>
  );
}
