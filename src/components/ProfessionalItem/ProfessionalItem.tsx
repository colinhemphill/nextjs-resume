import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Heading from '../../strum-design-system/components/Heading/Heading';

interface ProfessionalItemProps extends CMSPRofessionalExperience<JSX.Element> {
  pdf?: boolean;
}

const ProfessionalItem: React.FC<ProfessionalItemProps> = (props) => {
  const {
    end_date,
    is_current,
    organization_name,
    pdf = false,
    position_description,
    position_title,
    start_date,
  } = props;

  return (
    <article>
      <Heading level={4}>
        <span>{position_title}</span> at {organization_name}
      </Heading>
      <div>
        <FontAwesomeIcon icon={faCalendar} />
        {start_date}–{is_current ? 'Current' : end_date}
      </div>
      <div>{position_description}</div>
    </article>
  );
};

export default ProfessionalItem;
