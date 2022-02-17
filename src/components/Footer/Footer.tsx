import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { getCMSIntegration } from '../../cms/';
import { getFullName } from '../../helpers/utils';
import AutoGrid from '../../strum-design-system/components/AutoGrid/AutoGrid';
import AutoGridCell from '../../strum-design-system/components/AutoGrid/AutoGridCell';
import Container from '../../strum-design-system/components/Container/Container';
import { visuallyHidden } from '../../strum-design-system/styles/accessibility.css';
import { CMSLink } from '../../_types/CMSLink';
import { footerLinkStyle, footerStyle } from './Footer.css';

interface FooterProps {
  personalInformation: CMSPersonalInformation<unknown>;
  links?: CMSLink[];
  pdf?: boolean;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { personalInformation, links, pdf = false } = props;
  const fullName = getFullName(personalInformation);
  const CMS = getCMSIntegration();

  return (
    <footer className={footerStyle}>
      <Container>
        {!pdf && links && (
          <AutoGrid>
            {links.map((link) => (
              <AutoGridCell key={link.href}>
                <a
                  className="fa-3x"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className={visuallyHidden}>
                    {personalInformation.given_name} on {link.title}
                  </span>
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon icon={faCircle} />
                    <FontAwesomeIcon
                      aria-hidden
                      color="white"
                      icon={['fab', link.icon_name]}
                      transform="shrink-8"
                    />
                  </span>
                </a>
              </AutoGridCell>
            ))}
          </AutoGrid>
        )}

        <div>
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
            and{' '}
            <a
              className={footerLinkStyle}
              href={CMS.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {CMS.name}
            </a>
            , and deployed on{' '}
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
