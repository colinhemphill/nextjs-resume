import { ReactNode } from 'react';
import { cn } from 'src/helpers/utils';

interface ProseProperties {
  className?: string;
  html: string;
}

export default function Prose({ className, html }: ProseProperties): ReactNode {
  return (
    <div
      className={cn('prose text-base text-neutral-12 [&>p]:mb-2', className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
