import { allSkills } from '@content';
import { CheckIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Heading } from 'src/components/heading/heading';
import Prose from 'src/components/prose/prose';
import SectionHeading from 'src/components/section-heading/section-heading';
import StarRating from 'src/components/star-rating/star-rating';

export default function Skills(): ReactNode {
  return (
    <article className="space-y-4 md:col-span-2">
      <SectionHeading
        Icon={CheckIcon}
        level={3}
        text="Skills &amp; Expertise"
      />

      <div className="grid grid-flow-row gap-x-6 gap-y-2 lg:grid-flow-col">
        {allSkills.map((skill, skillIndex) => (
          <div className="space-y-2" key={skill._id}>
            <Heading level={4}>
              <div className="flex items-center gap-2">
                <StarRating
                  stars={(allSkills.length - skillIndex) as 1 | 2 | 3}
                />
                {skill.title}
              </div>
            </Heading>

            <Prose className="text-neutral-11" html={skill.body.html} />
          </div>
        ))}
      </div>
    </article>
  );
}
