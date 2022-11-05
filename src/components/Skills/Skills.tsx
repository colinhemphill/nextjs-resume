import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@strum/react';
import React from 'react';
import { CMSSkillCategory } from '../../cms-integration/markdown/skills';
import SectionHeading from '../SectionHeading/SectionHeading';

interface SkillsProps {
  skills: CMSSkillCategory[];
}

const Skills: React.FC<SkillsProps> = (props) => {
  const { skills } = props;

  return (
    <Box marginTop={{ xs: '0', lg: '4' }}>
      <SectionHeading icon={faCheck} text="Skills &amp; Expertise" />
      {/* <Row atoms={{ paddingTop: { xs: 2, lg: 0 } }}>
        {skills.map((skill, skillIndex) => (
          <Column key={skill.slug} width={{ xs: 12, lg: 4 }}>
            <Heading level={4}>
              <StarRating stars={(skills.length - skillIndex) as 1 | 2 | 3} />{' '}
              {skill.attributes.title}
            </Heading>
            <div dangerouslySetInnerHTML={{ __html: skill.html }} />
          </Column>
        ))}
      </Row> */}
    </Box>
  );
};

export default Skills;
