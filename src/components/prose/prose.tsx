import { ReactNode } from 'react';
import { cn } from 'src/helpers/utils';

interface ProseProperties {
  className?: string;
  html: string;
}

export default function Prose({ className, html }: ProseProperties): ReactNode {
  return (
    <div
      className={cn(
        'prose space-y-4 text-base text-neutral-12 [&>li]:space-y-2 [&>li]:marker:text-neutral-11 [&>ul]:list-inside [&>ul]:list-disc',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
