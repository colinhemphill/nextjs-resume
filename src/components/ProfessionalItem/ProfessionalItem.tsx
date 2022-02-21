import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Heading from '../../strum-design-system/components/Heading/Heading';
import { atoms } from '../../strum-design-system/sprinkles.css';
import { articleStyle } from '../Articles/article.css';

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
    <article className={articleStyle}>
      <Heading level={4}>
        <span
          className={atoms({
            backgroundColor: { darkMode: 'white', lightMode: 'dark' },
            borderRadius: 'rounded',
            color: { darkMode: 'dark', lightMode: 'white' },
            paddingX: 2,
          })}
        >
          {position_title}
        </span>{' '}
        at {organization_name}
      </Heading>
      <div>
        <FontAwesomeIcon
          className={atoms({ marginRight: 2 })}
          icon={faCalendar}
        />
        {start_date}–{is_current ? 'Current' : end_date}
      </div>
      <p className={atoms({ marginTop: 4 })}>{position_description}</p>
    </article>
  );
};

export default ProfessionalItem;
