import React from 'react';
import { Heading, HeadingProps } from '../Heading/Heading';

interface SectionHeadingProps {
  Icon?: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  level?: HeadingProps['level'];
  text: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  Icon,
  level = 3,
  text,
}) => {
  return (
    <Heading level={level}>
      <div className="flex items-center gap-2">
        {Icon && (
          <div className="hidden h-[1.2em] w-[1.2em] items-center justify-center rounded-full bg-neutral-12 md:flex">
            <Icon aria-hidden className="h-[0.8em] text-neutral-1" />
          </div>
        )}
        <span>{text}</span>
      </div>
    </Heading>
  );
};
