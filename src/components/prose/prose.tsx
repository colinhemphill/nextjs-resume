import { ReactNode } from 'react';
import { cn } from 'src/helpers/utilities';

interface ProseProperties {
  className?: string;
  html: string;
}

export default function Prose({ className, html }: ProseProperties): ReactNode {
  return (
    <div
      className={cn(
        'prose text-neutral-12 [&>li]:marker:text-neutral-11 space-y-4 text-base [&>ul]:list-outside [&>ul]:list-disc [&>ul]:space-y-1 [&>ul]:pl-4',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
