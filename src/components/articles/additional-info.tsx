import { additionalInfo } from '@content';
import { PaintBrushIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import Prose from 'src/components/prose/prose';
import SectionHeading from 'src/components/section-heading/section-heading';

export default function AdditionalInfo(): ReactNode {
  return (
    <article className="space-y-8 py-12">
      <div className="flex justify-center">
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
