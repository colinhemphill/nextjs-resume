import { Box, Heading, Text } from '@strum/react';
import React from 'react';
import { CMSEducationalExperience } from '../../cms-integration/markdown/educational';

const EducationItem: React.FC<CMSEducationalExperience> = (props) => {
  return (
    <Box as="article">
      <Heading level="3">{props.attributes.achievement}</Heading>

      <Box marginBottom="3" marginTop="2">
        <Box as="span" marginRight="2">
          {/* <FontAwesomeIcon icon={faUniversity} /> */}
        </Box>
        {props.attributes.institution}
      </Box>

      <Text as="p">
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
      </Text>
    </Box>
  );
};

export default EducationItem;
