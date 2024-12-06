import { additionalInfo } from '@content';
import { PaintBrushIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import SectionHeading from 'src/components/section-heading/section-heading';
import Prose from '../prose/prose';

export default function AdditionalInfo(): ReactNode {
  return (
    <article className="py-12">
      <div className="mb-6 flex justify-center">
        <SectionHeading
          Icon={PaintBrushIcon}
          level={2}
          text={additionalInfo.title}
        />
      </div>

      <Prose html={additionalInfo.body.html} />
    </article>
  );
}
