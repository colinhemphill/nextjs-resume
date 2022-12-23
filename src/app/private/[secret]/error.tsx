'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import ButtonLink from '../../../components/Button/ButtonLink';
import { Heading } from '../../../components/Heading/Heading';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="container text-center">
      <Heading level={2}>Not authorized</Heading>

      <div className="mt-4">
        <Link href="/">Visit public résumé</Link>
      </div>
    </div>
  );
}
