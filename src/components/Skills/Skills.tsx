import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
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
    <article>
      <SectionHeader icon={faCheck} text="Skills &amp; Expertise" />
      <Row>
        {skills.map((skill, index) => (
          <Column key={skill.id}>
            <Heading level={4}>
              <StarRating stars={skill.level} /> {skill.level_name}
            </Heading>
            <p>{skill.skills_list}</p>
          </Column>
        ))}
      </Row>
    </article>
  );
};

export default Skills;
