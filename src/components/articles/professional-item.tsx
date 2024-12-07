import { ProfessionalExperience } from '@content';
import { ReactNode } from 'react';
import { Heading } from 'src/components/heading/heading';
import Prose from 'src/components/prose/prose';
import { cn } from 'src/helpers/utils';

export default function ProfessionalItem({
  body,
  organization,
  titles,
}: ProfessionalExperience): ReactNode {
  return (
    <article className="space-y-4">
      <Heading className="text-balance" level={3}>
        {organization}
      </Heading>

      <ul>
        {titles.map((title) => (
          <li className="group flex gap-6" key={title.title}>
            <div
              className={cn('flex flex-col items-center gap-[6px]', {
                hidden: titles.length === 1,
              })}
            >
              <span className="mt-[6px] block h-2 w-2 flex-none rounded-full bg-accent-11" />
              <div className="h-full w-[2px] rounded-full bg-accent-6 group-last:hidden" />
            </div>

            <div className="space-y-3 pb-4 group-last:pb-0">
              <div className="text-lg font-bold leading-none">
                {title.title}
              </div>
              <div className="text-sm leading-none tracking-wide text-neutral-11">
                {title.startDate}–{title.endDate ?? 'Current'}
              </div>
              {title.description && (
                <p className="text-sm">{title.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <Prose html={body.html} />
    </article>
  );
}
