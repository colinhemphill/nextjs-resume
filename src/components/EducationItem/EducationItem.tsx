import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const EducationItem = (
  props: CMSEducationalExperience<JSX.Element>,
): JSX.Element => {
  const {
    achievement_description,
    achievement_title,
    organization_name,
  } = props;

  return (
    <article className="mt-xs">
      <h4 className="d-inline-block">{achievement_title}</h4>
      <div>
        <FontAwesomeIcon className="mr-xxxs" icon={faUniversity} />
        {organization_name}
      </div>
      <div className="mt-xxs">{achievement_description}</div>
    </article>
  );
};

export default EducationItem;
