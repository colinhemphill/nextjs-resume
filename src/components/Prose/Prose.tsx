import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ProseProperties {
  className?: string;
  html: string;
}

export default function Prose({ className, html }: ProseProperties): ReactNode {
  return (
    <div
      className={twMerge(
        'prose mt-2 text-base text-neutral-12 [&>p]:mb-2',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
