import { Box, BoxProps, Container } from '@strum/react';
import React, { PropsWithChildren } from 'react';

interface Section {
  color?: BoxProps['backgroundColor'];
}

const Section: React.FC<PropsWithChildren<Section>> = (props) => {
  const { children, color } = props;

  return (
    <Box as="section" backgroundColor={color} paddingY="8">
      <Container>{children}</Container>
    </Box>
  );
};

export default Section;
