import React, { ReactNode } from 'react';
import { cn } from 'src/helpers/utils';
import { Heading, HeadingProperties } from '../heading/heading';

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
    <Heading className={cn('flex items-center gap-2', className)} level={level}>
      {Icon && (
        <div className="hidden h-[1.2em] w-[1.2em] items-center justify-center rounded-full bg-neutral-12 md:flex">
          <Icon aria-hidden className="h-[0.8em] text-neutral-1" />
        </div>
      )}
      <span>{text}</span>
    </Heading>
  );
}
