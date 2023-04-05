import { faMortarBoard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSAchievement } from '../../cms-integration/markdown/achievements';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import AchievementItem from './AchievementItem';

interface AchievementsProps {
  achievements: CMSAchievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading icon={faMortarBoard} level={2} text="Achievements" />
        </div>

        {achievements.map((achievement) => (
          <AchievementItem key={achievement.slug} {...achievement} />
        ))}
      </div>
    </article>
  );
};

export default Achievements;
