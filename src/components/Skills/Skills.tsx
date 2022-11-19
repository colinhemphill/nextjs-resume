import { Stack, Text } from '@strum/react';
import React from 'react';
import { CMSSkillCategory } from '../../cms-integration/markdown/skills';
import StarRating from '../StarRating/StarRating';

interface SkillsProps {
  skills: CMSSkillCategory[];
}

const Skills: React.FC<SkillsProps> = (props) => {
  const { skills } = props;

  return (
    <Stack
      direction={{ xs: 'vertical', lg: 'horizontal' }}
      gap={{ xs: '4', lg: '8' }}
      wrap={false}
    >
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
    </Stack>
  );
};

export default Skills;
