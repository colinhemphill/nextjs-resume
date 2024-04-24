import { allSkills } from '@content';
import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { StarRating } from '../StarRating/StarRating';

const Skills: React.FC = () => {
  return (
    <article>
      <SectionHeading
        Icon={CheckIcon}
        level={3}
        text="Skills &amp; Expertise"
      />

      <div className="mt-2 grid grid-flow-row gap-6 lg:grid-flow-col">
        {allSkills.map((skill, skillIndex) => (
          <div key={skill._id}>
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
};

export default Skills;
