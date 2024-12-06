import { Achievement } from '@content';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Heading } from '../heading/heading';
import Prose from '../prose/prose';

export default function AchievementItem({
  achievement,
  body,
  organization,
}: Achievement): ReactNode {
  return (
    <article className="space-y-4 border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      <div className="space-y-1">
        <Heading className="text-balance" level={3}>
          {achievement}
        </Heading>

        <div className="flex items-center gap-2 font-semibold tracking-wide text-neutral-11">
          <AcademicCapIcon className="h-4" />
          {organization}
        </div>
      </div>

      <Prose html={body.html} />
    </article>
  );
}
