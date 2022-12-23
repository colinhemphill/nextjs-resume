import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSProfessionalExperience } from '../../cms-integration/markdown/professional';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';

const ProfessionalItem: React.FC<CMSProfessionalExperience> = ({
  attributes,
  html,
}) => {
  return (
    <article className="border-t-2 border-neutral-light-6 py-6 first-of-type:border-none last-of-type:pb-0 dark:border-neutral-dark-2">
      <Heading level={3}>
        <span className="rounded-md bg-neutral-light-12 px-2 text-neutral-light-1 dark:bg-neutral-dark-12 dark:text-neutral-dark-1">
          {attributes.title}
        </span>
        <span> at {attributes.organization}</span>
      </Heading>

      <div className="mt-1 font-medium tracking-wide">
        <FontAwesomeIcon className="mr-2" icon={faCalendar} />
        {attributes.startDate}–
        {!attributes.endDate ? 'Current' : attributes.endDate}
      </div>

      <Prose html={html} />
    </article>
  );
};

export default ProfessionalItem;
