import React from 'react';
import { getFullName } from '../../helpers/utils';
import { ResumePageProps } from '../../pages';
import Container from '../../strum-design-system/components/Container/Container';
import Heading from '../../strum-design-system/components/Heading/Heading';
import Column from '../../strum-design-system/components/Layout/Column';
import Row from '../../strum-design-system/components/Layout/Row';
import PDFDownloadButton from '../PDF/PDFDownloadButton';
import { headerStyle } from './Header.css';

const Header: React.FC<ResumePageProps> = (props) => {
  const { personalInformation, secret } = props;

  return (
    <header className={headerStyle}>
      <Container atoms={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Row verticalAlign="center">
          <Column>
            <Heading
              atoms={{ color: 'white' }}
              level={1}
              text={getFullName(personalInformation)}
            />
            <Heading
              atoms={{ color: 'white' }}
              level={2}
              text={personalInformation.attributes.title}
            />
          </Column>
          <Column
            atoms={{ paddingTop: { xs: 4, md: 0 } }}
            width={{ xs: 12, sm: 12, md: 'auto' }}
          >
            <PDFDownloadButton secret={secret} />
          </Column>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
