import { faMortarBoard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { sortedAchievements } from 'src/helpers/utils';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import AchievementItem from './AchievementItem';

const Achievements: React.FC = () => {
  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading icon={faMortarBoard} level={2} text="Achievements" />
        </div>

        {sortedAchievements.map((achievement) => (
          <AchievementItem key={achievement._id} {...achievement} />
        ))}
      </div>
    </article>
  );
};

export default Achievements;
