import { Box, Text } from '@strum/react';
import React from 'react';
import { CMSHobbies } from '../../cms-integration/markdown/hobbies';

interface HobbiesAndInterestsProps {
  hobbies: CMSHobbies;
}

const HobbiesAndInterests: React.FC<HobbiesAndInterestsProps> = (props) => {
  return (
    <Box as="article">
      <Text>
        <div dangerouslySetInnerHTML={{ __html: props.hobbies.html }} />
      </Text>
    </Box>
  );
};

export default HobbiesAndInterests;
