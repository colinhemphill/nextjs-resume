import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Box from '../../strum-design-system/components/Box/Box';
import Heading from '../../strum-design-system/components/Heading/Heading';
import Column from '../../strum-design-system/components/Layout/Column';
import Row from '../../strum-design-system/components/Layout/Row';
import SectionHeader from '../SectionHeader/SectionHeader';
import StarRating from '../StarRating/StarRating';

interface SkillsProps {
  skills: CMSSkills[];
}

const Skills: React.FC<SkillsProps> = (props) => {
  const { skills } = props;

  return (
    <Box marginTop={{ xs: 0, lg: 4 }}>
      <SectionHeader icon={faCheck} text="Skills &amp; Expertise" />
      <Row atoms={{ paddingTop: { xs: 2, lg: 0 } }}>
        {skills.map((skill) => (
          <Column key={skill.id} width={{ xs: 12, lg: 4 }}>
            <Heading level={4}>
              <StarRating stars={skill.level} /> {skill.level_name}
            </Heading>
            <p>{skill.skills_list}</p>
          </Column>
        ))}
      </Row>
    </Box>
  );
};

export default Skills;
