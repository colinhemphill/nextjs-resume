'use client';

import { HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { ReactNode, useEffect } from 'react';
import { Button } from 'src/components/button/button';
import { Heading } from '../components/heading/heading';

export default function Error({ error }: { error: Error }): ReactNode {
  useEffect(() => {
    // log the error if you need to
    console.error(error);
  }, [error]);

  return (
    <div className="container text-center">
      <div className="space-y-4 rounded-xl border border-danger-6 bg-danger-1 p-12">
        <Heading color="danger" level={2}>
          {error.message}
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
