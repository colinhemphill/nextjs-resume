import { personal } from '@content';
import { links } from 'edit-me/config/links';
import { ReactNode } from 'react';
import { Button } from 'src/components/button/button';
import { fullName } from 'src/helpers/utils';

export default function Footer(): ReactNode {
  return (
    <footer className="border-t border-neutral-6 bg-neutral-2 py-12 text-neutral-12">
      <div className="container text-center">
        <div className="flex justify-center">
          <div className="grid grid-flow-col gap-2">
            {links.map((link) => (
              <Button
                asChild
                className="h-12 w-12 rounded-full"
                key={link.title}
                size="icon"
              >
                <a href={link.href}>
                  <span className="sr-only">
                    {personal.givenName} on {link.title}
                  </span>
                  <link.icon aria-hidden size={18} />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          Copyright © {new Date().getFullYear()} {fullName}
        </div>

        <div className="mt-1 text-sm">
          This résumé was generated with{' '}
          <a className="text-link" href="https://nextjs.org/">
            Next.js
          </a>
          . Learn how to deploy your own résumé with the{' '}
          <a
            className="text-link"
            href="https://github.com/colinhemphill/nextjs-resume"
          >
            nextjs-resume
          </a>
          !
        </div>
      </div>
    </footer>
  );
}
