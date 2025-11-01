import { personal, Salary } from '@content';
import { UserIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import Prose from 'src/components/prose/prose';
import SectionHeading from 'src/components/section-heading/section-heading';

interface AboutMeProperties {
  salary?: Salary;
}

export default function AboutMe({ salary }: AboutMeProperties): ReactNode {
  return (
    <article className="space-y-4">
      <SectionHeading Icon={UserIcon} level={3} text="About Me" />
      <Prose html={personal.body.html} />

      {salary && (
        <div className="space-y-1">
          {salary.currentSalary && (
            <div>
              <strong>Current salary:</strong> {salary.currentSalary}
            </div>
          )}
          {salary.desiredSalary && (
            <div>
              <strong>Desired salary:</strong> {salary.desiredSalary}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
