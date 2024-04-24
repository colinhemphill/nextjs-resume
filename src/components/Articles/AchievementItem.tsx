import { Achievement } from '@content';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';

const AchievementItem: React.FC<Achievement> = ({
  achievement,
  body,
  organization,
}) => {
  return (
    <article className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      <Heading className="text-balance" level={3}>
        {achievement}
      </Heading>

      <div className="mt-1 flex items-center gap-2 font-medium tracking-wide">
        <AcademicCapIcon className="h-6" />
        {organization}
      </div>

      <Prose html={body.html} />
    </article>
  );
};

export default AchievementItem;
