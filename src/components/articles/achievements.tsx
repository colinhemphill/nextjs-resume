import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { Fragment, ReactNode } from 'react';
import AchievementItem from 'src/components/articles/achievement-item';
import Separator from 'src/components/articles/separator';
import SectionHeading from 'src/components/section-heading/section-heading';
import { sortedAchievements } from 'src/helpers/utils';

export default function Achievements(): ReactNode {
  return (
    <article className="border-neutral-6 bg-neutral-2 rounded-xl border py-12 shadow-md">
      <div className="container space-y-8">
        <SectionHeading
          className="justify-center"
          Icon={AcademicCapIcon}
          level={2}
          text="Achievements"
        />

        {sortedAchievements.map((achievement) => (
          <Fragment key={achievement._id}>
            <AchievementItem key={achievement._id} {...achievement} />
            <Separator />
          </Fragment>
        ))}
      </div>
    </article>
  );
}
