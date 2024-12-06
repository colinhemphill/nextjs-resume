import { PreviousTitle, ProfessionalExperience } from '@content';
import { ReactNode } from 'react';
import { sortedPreviousTitles } from 'src/helpers/utils';
import { Heading } from '../heading/heading';
import Prose from '../prose/prose';

export default function ProfessionalItem({
  body,
  endDate,
  organization,
  startDate,
  title,
  previousTitles,
}: ProfessionalExperience): ReactNode {
  const previousTitlesSorted = previousTitles
    ? sortedPreviousTitles(previousTitles)
    : [];

  return (
    <article className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      <Heading className="text-balance" level={3}>
        <span className="rounded-md bg-neutral-12 px-2 text-neutral-1">
          {title}
        </span>
        <span> at {organization}</span>
      </Heading>

      <div className="mt-1 font-medium tracking-wide">
        {previousTitlesSorted.length === 0 ? (
          <>
            {startDate}–{endDate ?? 'Current'}
          </>
        ) : (
          <>
            <p>
              {startDate}–{endDate ?? 'Current'}
            </p>
            {previousTitlesSorted.map((previousTitle: PreviousTitle, index) => (
              <p key={index}>
                {previousTitle.title} {previousTitle.startDate}–
                {previousTitle.endDate}
              </p>
            ))}
          </>
        )}
      </div>

      <Prose html={body.html} />
    </article>
  );
}
