import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProfessionalItem = (
  props: CMSPRofessionalExperience<JSX.Element>,
): JSX.Element => {
  const {
    end_date,
    is_current,
    organization_name,
    position_description,
    position_title,
    start_date,
  } = props;

  return (
    <article className="mt-xs">
      <h4 className="d-inline-block">
        <span className="bg-dark px-xxxs text-white rounded">
          {position_title}
        </span>{' '}
        at {organization_name}
      </h4>
      <div>
        <FontAwesomeIcon className="mr-xxxs" icon={faCalendar} />
        {start_date}–{is_current ? 'Current' : end_date}
      </div>
      <div className="mt-xxs">{position_description}</div>
    </article>
  );
};

export default ProfessionalItem;
