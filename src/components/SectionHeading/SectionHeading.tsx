// import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Heading, Text } from '@strum/react';
import { HeadingRecipe } from '@strum/react/dist/types/components/Heading/Heading.css';
import React from 'react';

interface SectionHeadingProps {
  icon: JSX.Element;
  level?: HeadingRecipe['level'];
  text: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { icon, level = '3', text } = props;

  return (
    <Box marginBottom={level === '2' ? '6' : '2'}>
      <Heading level={level}>
        <Box as="span" className="fa-layers fa-fw" marginRight="2">
          <Text as="span" color="neutral12">
            {/* <FontAwesomeIcon icon={faCircle} /> */}
          </Text>
          <Text as="span" color="neutral1">
            {/* <FontAwesomeIcon icon={icon} transform="shrink-7" /> */}
          </Text>
        </Box>
        {text}
      </Heading>
    </Box>
  );
};

export default SectionHeading;
