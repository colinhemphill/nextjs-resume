import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { getCMSIntegration } from '../../cms/';
import { getFullName } from '../../helpers';
import { CMSLink } from '../../_types/CMSLink';
import styles from './Footer.module.scss';

interface Props {
  personalInformation: CMSPersonalInformation<unknown>;
  links?: CMSLink[];
  pdf?: boolean;
}

const Footer = (props: Props): JSX.Element => {
  const { personalInformation, links, pdf = false } = props;
  const fullName = getFullName(personalInformation);
  const CMS = getCMSIntegration();

  return (
    <footer className={styles.footer}>
      <div className={pdf ? 'container-fluid' : 'container'}>
        {!pdf && links && (
          <div className="row gx-0 justify-content-center">
            {links.map((link) => (
              <div className="col-auto" key={link.href}>
                <a
                  className="d-block fa-3x"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">
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
              </div>
            ))}
          </div>
        )}

        <div className={!pdf && links?.length ? 'mt-xxs' : ''}>
          Copyright ©{new Date().getFullYear()} {fullName}
        </div>
        <div className="mt-xxxs">
          <small>
            This résumé was generated with{' '}
            <a
              className={styles.footerLink}
              href="https://nextjs.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Next.js
            </a>{' '}
            and{' '}
            <a
              className={styles.footerLink}
              href={CMS.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {CMS.name}
            </a>
            , and deployed on{' '}
            <a
              className={styles.footerLink}
              href="https://vercel.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vercel
            </a>
            . Learn how to deploy your own resume with the{' '}
            <a
              className={styles.footerLink}
              href="https://github.com/colinhemphill/nextjs-resume-generator"
              rel="noopener noreferrer"
              target="_blank"
            >
              nextjs-resume-generator
            </a>
            !
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
