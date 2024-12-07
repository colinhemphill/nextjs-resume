import { Achievement } from '@content';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Heading } from 'src/components/heading/heading';
import Prose from 'src/components/prose/prose';

export default function AchievementItem({
  achievement,
  body,
  organization,
}: Achievement): ReactNode {
  return (
    <article className="space-y-4">
      <div className="space-y-1">
        <Heading className="text-balance" level={3}>
          {achievement}
        </Heading>

        <div className="flex items-center gap-2 text-lg font-semibold tracking-wide text-neutral-11">
          <AcademicCapIcon className="h-4" />
          {organization}
        </div>
      </div>

      <Prose html={body.html} />
    </article>
  );
}
