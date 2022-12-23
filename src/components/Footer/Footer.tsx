import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSLink } from '../../cms-integration/markdown/links';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { getFullName } from '../../helpers/utils';

interface FooterProps {
  personalInformation: CMSPersonalInformation;
  links?: CMSLink[];
}

export const Footer: React.FC<FooterProps> = ({
  personalInformation,
  links,
}) => {
  const fullName = getFullName(personalInformation);

  return (
    <footer className="mt-12 bg-neutral-dark-3 py-12 text-neutral-dark-12">
      <div className="container text-center">
        {links && (
          <div className="flex justify-center">
            <div className="fa-3x grid grid-flow-col gap-2">
              {links.map((link) => (
                <a className="no-underline" href={link.href} key={link.title}>
                  <span className="sr-only">
                    {personalInformation.attributes.givenName} on {link.title}
                  </span>
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon
                      className="text-accent-light-10"
                      icon={faCircle}
                    />
                    <FontAwesomeIcon
                      aria-hidden
                      className="text-accent-light-contrast"
                      icon={link.icon}
                      transform="shrink-8"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6">
          Copyright ©{new Date().getFullYear()} {fullName}
        </div>

        <div className="mt-1 text-sm">
          This résumé was generated with{' '}
          <a className="link" href="https://nextjs.org/">
            Next.js
          </a>{' '}
          and deployed on{' '}
          <a className="link" href="https://vercel.com/">
            Vercel
          </a>
          . Learn how to deploy your own resume with the{' '}
          <a
            className="link"
            href="https://github.com/colinhemphill/nextjs-resume-generator"
          >
            nextjs-resume-generator
          </a>
          !
        </div>
      </div>
    </footer>
  );
};
