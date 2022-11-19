import { Box, Container, Text } from '@strum/react';
import React from 'react';
import { CMSLink } from '../../cms-integration/markdown/links';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { getFullName } from '../../helpers/utils';

interface FooterProps {
  personalInformation: CMSPersonalInformation;
  links?: CMSLink[];
}

const Footer: React.FC<FooterProps> = (props) => {
  const { personalInformation, links } = props;
  const fullName = getFullName(personalInformation);

  return (
    <Box
      as="footer"
      borderColor="neutral6"
      borderTopStyle="solid"
      borderWidth="2"
      paddingY="8"
      textAlign="center"
    >
      <Container>
        <Text size="small">
          Copyright ©{new Date().getFullYear()} {fullName}
        </Text>
        {/* {links && (
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
                      icon={link.icon}
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
        </div> */}
      </Container>
    </Box>
  );
};

export default Footer;
