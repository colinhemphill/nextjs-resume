import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSSkillCategory } from '../../cms-integration/markdown/skills';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { StarRating } from '../StarRating/StarRating';

interface SkillsProps {
  skills: CMSSkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <article>
      <SectionHeading icon={faCheck} level={3} text="Skills &amp; Expertise" />

      <div className="mt-2 grid grid-flow-row gap-6 lg:grid-flow-col">
        {skills.map((skill, skillIndex) => (
          <div key={skill.attributes.title}>
            <Heading level={4}>
              <div className="flex items-center gap-2">
                <StarRating stars={(skills.length - skillIndex) as 1 | 2 | 3} />
                {skill.attributes.title}
              </div>
            </Heading>

            <Prose html={skill.html} />
          </div>
        ))}
      </div>
    </article>
  );
};

export default Skills;
