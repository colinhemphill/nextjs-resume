import { personal } from '@content';
import { UserIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import SectionHeading from 'src/components/section-heading/section-heading';
import Prose from '../prose/prose';

export default function AboutMe(): ReactNode {
  return (
    <article className="space-y-4">
      <SectionHeading Icon={UserIcon} level={3} text="About Me" />
      <Prose html={personal.body.html} />
    </article>
  );
}
