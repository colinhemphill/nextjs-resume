import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Heading, Text } from '@strum/react';
import React from 'react';
import { CMSProfessionalExperience } from '../../cms-integration/markdown/professional';
import { articleStyle } from '../Articles/article.css';

const ProfessionalItem: React.FC<CMSProfessionalExperience> = (props) => {
  return (
    <Box as="article" className={articleStyle}>
      <Heading level="3">
        <Box
          as="span"
          backgroundColor="neutral12"
          borderRadius="medium"
          color="neutral1"
          fontWeight="bold"
          paddingX="2"
        >
          {props.attributes.title}
        </Box>{' '}
        at {props.attributes.organization}
      </Heading>

      <Box marginBottom="3" marginTop="2">
        <Text>
          <Box as="span" marginRight="2">
            <FontAwesomeIcon icon={faCalendar} />
          </Box>
          {props.attributes.startDate}–
          {!props.attributes.endDate ? 'Current' : props.attributes.endDate}
        </Text>
      </Box>

      <Text as="p">
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
      </Text>
    </Box>
  );
};

export default ProfessionalItem;
