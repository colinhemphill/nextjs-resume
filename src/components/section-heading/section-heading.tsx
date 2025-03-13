import React, { ReactNode } from 'react';
import { Heading, HeadingProperties } from 'src/components/heading/heading';
import { cn } from 'src/helpers/utilities';

interface SectionHeadingProperties {
  className?: string;
  Icon?: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  level?: HeadingProperties['level'];
  text: string;
}

export default function SectionHeading({
  className,
  Icon,
  level = 3,
  text,
}: SectionHeadingProperties): ReactNode {
  return (
    <Heading className={cn('flex items-center gap-3', className)} level={level}>
      {Icon && (
        <div className="bg-neutral-12 hidden h-[1em] w-[1em] items-center justify-center rounded-full md:flex">
          <Icon aria-hidden className="text-neutral-1 h-[0.6em]" />
        </div>
      )}
      <span>{text}</span>
    </Heading>
  );
}
