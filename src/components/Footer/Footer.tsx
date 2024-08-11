import { personal } from '@content';
import { links } from 'edit-me/config/links';
import React from 'react';
import { fullName } from 'src/helpers/utils';
import ButtonLink from '../Button/ButtonLink';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-neutral-3 py-12 text-neutral-12">
      <div className="container text-center">
        {links && (
          <div className="flex justify-center">
            <div className="grid grid-flow-col gap-2">
              {links.map((link) => (
                <ButtonLink
                  className="h-12 w-12 rounded-full p-0"
                  href={link.href}
                  key={link.title}
                >
                  <span className="sr-only">
                    {personal.givenName} on {link.title}
                  </span>
                  <link.icon aria-hidden size={18} />
                </ButtonLink>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6">
          Copyright © {new Date().getFullYear()} {fullName}
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
          . Learn how to deploy your own résumé with the{' '}
          <a
            className="link"
            href="https://github.com/colinhemphill/nextjs-resume"
          >
            nextjs-resume
          </a>
          !
        </div>
      </div>
    </footer>
  );
};
