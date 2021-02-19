import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props extends CMSEducationalExperience<JSX.Element> {
  pdf?: boolean;
}

const EducationItem = (props: Props): JSX.Element => {
  const {
    achievement_description,
    achievement_title,
    organization_name,
    pdf = false,
  } = props;

  return (
    <article className={pdf ? 'mt-xxs' : 'mt-xs'}>
      <h4 className="d-inline-block">{achievement_title}</h4>
      <div>
        <FontAwesomeIcon className="me-xxxs" icon={faUniversity} />
        {organization_name}
      </div>
      <div className={pdf ? 'mt-xxxs' : 'mt-xxs'}>
        {achievement_description}
      </div>
    </article>
  );
};

export default EducationItem;
