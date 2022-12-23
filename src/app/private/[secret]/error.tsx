'use client';

import Link from 'next/link';
import { Heading } from '../../../components/Heading/Heading';

export default function Error() {
  return (
    <div className="container mt-12 text-center">
      <div className="rounded-xl bg-neutral-light-3 py-12 dark:bg-neutral-dark-3">
        <Heading color="error11" level={2}>
          Not authorized
        </Heading>

        <div className="mt-4">
          <Link href="/">Visit public résumé</Link>
        </div>
      </div>
    </div>
  );
}
