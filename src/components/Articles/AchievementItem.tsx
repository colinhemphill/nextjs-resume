import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSAchievement } from '../../cms-integration/markdown/achievements';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';

const AchievementItem: React.FC<CMSAchievement> = ({ attributes, html }) => {
  return (
    <article className="border-t-2 border-neutral-light-6 py-6 first-of-type:border-none last-of-type:pb-0 dark:border-neutral-dark-2">
      <Heading level={3}>{attributes.achievement}</Heading>

      <div className="mt-1 font-medium tracking-wide">
        <FontAwesomeIcon className="mr-2" icon={faUniversity} />
        {attributes.institution}
      </div>

      <Prose html={html} />
    </article>
  );
};

export default AchievementItem;
