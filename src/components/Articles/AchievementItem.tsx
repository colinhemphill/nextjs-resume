import { Achievement } from '@content';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <Heading level={3}>{achievement}</Heading>

      <div className="mt-1 font-medium tracking-wide">
        <FontAwesomeIcon className="mr-2" icon={faUniversity} />
        {organization}
      </div>

      <Prose html={body.html} />
    </article>
  );
};

export default AchievementItem;
