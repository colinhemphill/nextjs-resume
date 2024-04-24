import { ProfessionalExperience } from '@content';
import { CalendarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';

const ProfessionalItem: React.FC<ProfessionalExperience> = ({
  body,
  endDate,
  organization,
  startDate,
  title,
}) => {
  return (
    <article className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      <Heading className="text-balance" level={3}>
        <span className="rounded-md bg-neutral-12 px-2 text-neutral-1">
          {title}
        </span>
        <span> at {organization}</span>
      </Heading>

      <div className="mt-1 flex items-center gap-2 font-medium tracking-wide">
        <CalendarIcon className="inline h-6" />
        {startDate}–{!endDate ? 'Current' : endDate}
      </div>

      <Prose html={body.html} />
    </article>
  );
};

export default ProfessionalItem;
