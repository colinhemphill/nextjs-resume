import { Box, Container, Heading, Stack } from '@strum/react';
import React from 'react';
import { getFullName } from '../../helpers/utils';
import { ResumePageProps } from '../../pages';
import PDFDownloadButton from '../PDF/PDFDownloadButton';

const Header: React.FC<ResumePageProps> = (props) => {
  const { personalInformation, secret } = props;

  return (
    <Box
      as="header"
      borderBottomStyle="solid"
      borderColor="neutral6"
      borderWidth="2"
      paddingY="6"
    >
      <Container>
        <Stack
          alignItems="center"
          direction={{ xs: 'vertical', md: 'horizontal' }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          wrap={false}
        >
          <div>
            <Heading color="neutral12" level="1">
              {getFullName(personalInformation)}
            </Heading>
            <Heading color="neutral11" level="2">
              {personalInformation.attributes.title}
            </Heading>
          </div>
          <div>
            <PDFDownloadButton secret={secret} />
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
