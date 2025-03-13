import { links } from '@config/links';
import { personal } from '@content';
import { ReactNode } from 'react';
import { Button } from 'src/components/button/button';
import { fullName } from 'src/helpers/utilities';

export default function Footer(): ReactNode {
  return (
    <footer className="border-neutral-6 bg-neutral-2 text-neutral-12 border-t py-12">
      <div className="container space-y-8 text-center">
        <div className="flex flex-wrap justify-center gap-3">
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

        <div className="space-y-1">
          <div>
            Copyright © {new Date().getFullYear()} {fullName}
          </div>
          <div className="text-sm">
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
      </div>
    </footer>
  );
}
