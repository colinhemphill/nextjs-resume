import { CheckIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { CMSSkillCategory } from '../../cms-integration/markdown/skills';
import Heading from '../Heading/Heading';
import SectionHeading from '../SectionHeading/SectionHeading';
import StarRating from '../StarRating/StarRating';

interface SkillsProps {
  skills: CMSSkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <article>
      <SectionHeading Icon={CheckIcon} text="Skills &amp; Expertise" />

      <div className="mt-2 grid grid-flow-col gap-6">
        {skills.map((skill, skillIndex) => (
          <div key={skill.attributes.title}>
            <Heading level={4}>
              <div className="flex items-center gap-2">
                <StarRating stars={(skills.length - skillIndex) as 1 | 2 | 3} />
                {skill.attributes.title}
              </div>
            </Heading>
            <div
              className="prose lg:prose-xl prose-neutral mt-2"
              dangerouslySetInnerHTML={{ __html: skill.html }}
            />
          </div>
        ))}
      </div>

      {/* <div className="mt-2">
        {skills.map((skill, skillIndex) => (
          <div key={skill.attributes.title}>
            <Text size="large" weight="bold">
              <StarRating stars={(skills.length - skillIndex) as 1 | 2 | 3} />{' '}
              {skill.attributes.title}
            </Text>
            <Text color="neutral11">
              <div dangerouslySetInnerHTML={{ __html: skill.html }} />
            </Text>
          </div>
        ))}
      </div> */}
    </article>
  );
};

export default Skills;
