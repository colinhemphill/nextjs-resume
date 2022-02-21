import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import usePrefersDarkMode from '../../helpers/useDarkMode';
import { buttonStyle } from '../../strum-design-system/components/Button/Button.css';
import Container from '../../strum-design-system/components/Container/Container';
import Heading from '../../strum-design-system/components/Heading/Heading';
import Column from '../../strum-design-system/components/Layout/Column';
import Row from '../../strum-design-system/components/Layout/Row';
import { atoms } from '../../strum-design-system/sprinkles.css';
import { headerStyle } from './Header.css';

interface HeaderProps {
  pdf?: boolean;
  secret?: string;
  subtitle: string;
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { pdf = false, secret, subtitle, title } = props;
  const darkMode = usePrefersDarkMode();

  let pdfAPI = '/api/pdf';
  if (secret) {
    pdfAPI += `?secret=${secret}`;
  }

  return (
    <header className={headerStyle}>
      <Container atoms={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Row verticalAlign="center">
          <Column>
            <Heading atoms={{ color: 'white' }} level={1} text={title} />
            <Heading atoms={{ color: 'white' }} level={2} text={subtitle} />
          </Column>
          {!pdf && (
            <Column
              atoms={{ paddingTop: { xs: 4, md: 0 } }}
              width={{ xs: 12, sm: 12, md: 'auto' }}
            >
              <a
                className={buttonStyle({
                  color: darkMode ? 'primary' : 'dark',
                  size: 'lg',
                })}
                href={pdfAPI}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  className={atoms({ marginRight: 2 })}
                  icon={faFilePdf}
                />
                Download as PDF
              </a>
            </Column>
          )}
        </Row>
      </Container>
    </header>
  );
};

export default Header;
