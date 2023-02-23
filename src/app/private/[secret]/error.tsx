'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Heading } from '../../../components/Heading/Heading';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // log the error if you need to
    console.error(error);
  }, [error]);

  return (
    <div className="container mt-12 text-center">
      <div className="rounded-xl bg-neutral-light-3 py-12 dark:bg-neutral-dark-3">
        <Heading color="error11" level={2}>
          {error.message}
        </Heading>

        <div className="mt-4">
          <Link href="/">Visit public résumé</Link>
        </div>
      </div>
    </div>
  );
}
