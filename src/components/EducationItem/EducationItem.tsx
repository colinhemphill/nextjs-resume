import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Heading from '../../strum-design-system/components/Heading/Heading';
import { atoms } from '../../strum-design-system/sprinkles.css';

interface EducationItemsProps extends CMSEducationalExperience<JSX.Element> {
  pdf?: boolean;
}

const EducationItem: React.FC<EducationItemsProps> = (props) => {
  const {
    achievement_description,
    achievement_title,
    organization_name,
    pdf = false,
  } = props;

  return (
    <article>
      <Heading level={4} text={achievement_title} />
      <div>
        <FontAwesomeIcon
          className={atoms({ marginRight: 2 })}
          icon={faUniversity}
        />
        {organization_name}
      </div>
      <div>{achievement_description}</div>
    </article>
  );
};

export default EducationItem;
