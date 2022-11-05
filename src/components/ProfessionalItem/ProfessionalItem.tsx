import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Heading } from '@strum/react';
import React from 'react';
import { CMSProfessionalExperience } from '../../cms-integration/markdown/professional';
import { articleStyle } from '../Articles/article.css';

const ProfessionalItem: React.FC<CMSProfessionalExperience> = (props) => {
  return (
    <article className={articleStyle}>
      <Heading level="3">
        <Box
          as="span"
          backgroundColor="neutral1"
          borderRadius="medium"
          color="neutral12"
          paddingX="2"
        >
          {props.attributes.title}
        </Box>{' '}
        at {props.attributes.organization}
      </Heading>
      <div>
        <FontAwesomeIcon icon={faCalendar} />
        {props.attributes.startDate}–
        {!props.attributes.endDate ? 'Current' : props.attributes.endDate}
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </article>
  );
};

export default ProfessionalItem;
