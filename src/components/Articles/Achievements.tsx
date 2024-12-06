import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import SectionHeading from 'src/components/section-heading/section-heading';
import { sortedAchievements } from 'src/helpers/utils';
import AchievementItem from './achievement-item';

export default function Achievements(): ReactNode {
  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading
            Icon={AcademicCapIcon}
            level={2}
            text="Achievements"
          />
        </div>

        {sortedAchievements.map((achievement) => (
          <AchievementItem key={achievement._id} {...achievement} />
        ))}
      </div>
    </article>
  );
}
