import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading } from '@strum/react';
import React from 'react';
import { CMSEducationalExperience } from '../../cms-integration/markdown/educational';
import { articleStyle } from '../Articles/article.css';

const EducationItem: React.FC<CMSEducationalExperience> = (props) => {
  return (
    <article className={articleStyle}>
      <Heading level="3">{props.attributes.achievement}</Heading>
      <div>
        <FontAwesomeIcon icon={faUniversity} />
        {props.attributes.institution}
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </article>
  );
};

export default EducationItem;
