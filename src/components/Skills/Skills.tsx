import { faCheck } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import StarRating from '../StarRating/StarRating';

interface Props {
  skills: CMSSkills[];
}

const Skills = (props: Props): JSX.Element => {
  const { skills } = props;

  return (
    <article className="mt-xs">
      <SectionHeader icon={faCheck} text="Skills & Expertise" />
      <div className="row mt-xxs">
        {skills.map((skill, index) => (
          <div
            className={classnames('col-lg', {
              'mt-lg-0 mt-xxs': index > 0,
            })}
            key={skill.id}
          >
            <h4 className="h5 text-uppercase">
              <StarRating stars={skill.level} /> {skill.level_name}
            </h4>
            <p>{skill.skills_list}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Skills;
