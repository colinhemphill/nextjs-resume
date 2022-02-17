import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
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
    <article className="mt-xs">
      <SectionHeader icon={faCheck} text="Skills & Expertise" />
      <Row>
        {skills.map((skill, index) => (
          <Column key={skill.id}>
            <h4 className="h5 text-uppercase">
              <StarRating stars={skill.level} /> {skill.level_name}
            </h4>
            <p>{skill.skills_list}</p>
          </Column>
        ))}
      </Row>
    </article>
  );
};

export default Skills;
