import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSEducationalExperience } from '../../cms-integration/markdown/educational';
import Heading from '../../strum-design-system/components/Heading/Heading';
import { atoms } from '../../strum-design-system/sprinkles.css';
import { articleStyle } from '../Articles/article.css';

const EducationItem: React.FC<CMSEducationalExperience> = (props) => {
  return (
    <article className={articleStyle}>
      <Heading level={4} text={props.attributes.achievement} />
      <div>
        <FontAwesomeIcon
          className={atoms({ marginRight: 2 })}
          icon={faUniversity}
        />
        {props.attributes.institution}
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </article>
  );
};

export default EducationItem;
