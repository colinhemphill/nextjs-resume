'use client';

import { HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Button } from 'src/components/button/button';
import { Heading } from 'src/components/heading/heading';

export default function NotFound(): ReactNode {
  return (
    <div className="container text-center">
      <div className="space-y-4 rounded-xl border border-danger-6 bg-danger-1 p-12">
        <Heading color="danger" level={2}>
          This page was not found
        </Heading>

        <Button asChild color="neutral">
          <Link href="/">
            <HomeIcon /> Visit public résumé
          </Link>
        </Button>
      </div>
    </div>
  );
}
