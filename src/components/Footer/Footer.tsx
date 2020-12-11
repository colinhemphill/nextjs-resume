import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React from 'react';
import { cmsLink, cmsName } from '../../lib/cms';
import { getFullName } from '../../lib/helpers';
import { CMSLink } from '../../_types/CMSLink';
import styles from './Footer.module.scss';

interface Props {
  personalInformation: CMSPersonalInformation<unknown>;
  links: CMSLink[];
}

const Footer = (props: Props): JSX.Element => {
  const { personalInformation, links } = props;
  const fullName = getFullName(personalInformation);

  return (
    <footer className={classnames(styles.footer, 'd-print-none d-block')}>
      <div className="container">
        <div className="row no-gutters justify-content-center">
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

        <div className="mt-xxs">
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
              href={cmsLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {cmsName}
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
