import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSLink } from '../../cms-integration/markdown/links';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { getFullName } from '../../helpers/utils';
import AutoGrid from '../../strum-design-system/components/AutoGrid/AutoGrid';
import AutoGridCell from '../../strum-design-system/components/AutoGrid/AutoGridCell';
import Container from '../../strum-design-system/components/Container/Container';
import { atoms } from '../../strum-design-system/sprinkles.css';
import { visuallyHidden } from '../../strum-design-system/styles/accessibility.css';
import colors from '../../strum-design-system/themes/timbre/colors';
import { footerLinkStyle, footerStyle } from './Footer.css';

interface FooterProps {
  personalInformation: CMSPersonalInformation;
  links?: CMSLink[];
}

const Footer: React.FC<FooterProps> = (props) => {
  const { personalInformation, links } = props;
  const fullName = getFullName(personalInformation);

  return (
    <footer className={footerStyle}>
      <Container>
        {links && (
          <AutoGrid guttersX={2} guttersY={2} horizontalAlign="center">
            {links.map((link) => (
              <AutoGridCell key={link.href}>
                <a
                  className="fa-3x"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className={visuallyHidden}>
                    {personalInformation.attributes.givenName} on {link.title}
                  </span>
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon color={colors.primary} icon={faCircle} />
                    <FontAwesomeIcon
                      aria-hidden
                      color={colors.white}
                      icon={['fab', link.iconName]}
                      transform="shrink-8"
                    />
                  </span>
                </a>
              </AutoGridCell>
            ))}
          </AutoGrid>
        )}

        <div className={atoms({ marginTop: 4 })}>
          Copyright ©{new Date().getFullYear()} {fullName}
        </div>

        <div>
          <small>
            This résumé was generated with{' '}
            <a
              className={footerLinkStyle}
              href="https://nextjs.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Next.js
            </a>{' '}
            and deployed on{' '}
            <a
              className={footerLinkStyle}
              href="https://vercel.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vercel
            </a>
            . Learn how to deploy your own resume with the{' '}
            <a
              className={footerLinkStyle}
              href="https://github.com/colinhemphill/nextjs-resume-generator"
              rel="noopener noreferrer"
              target="_blank"
            >
              nextjs-resume-generator
            </a>
            !
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
