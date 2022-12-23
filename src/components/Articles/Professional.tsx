import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSProfessionalExperience } from '../../cms-integration/markdown/professional';
import ProfessionalItem from '../ProfessionalItem/ProfessionalItem';
import SectionHeading from '../SectionHeading/SectionHeading';

interface ProfessionalProps {
  professionalExperience: CMSProfessionalExperience[];
}

const Professional: React.FC<ProfessionalProps> = ({
  professionalExperience,
}) => {
  return (
    <>
      <article className="rounded-xl bg-neutral-light-3 p-12 dark:bg-neutral-dark-3">
        <div className="flex justify-center">
          <SectionHeading
            icon={faBriefcase}
            level={2}
            text="Professional Experience"
          />
        </div>

        {professionalExperience.map((professional) => (
          <ProfessionalItem key={professional.slug} {...professional} />
        ))}
      </article>
    </>
  );
};

export default Professional;
