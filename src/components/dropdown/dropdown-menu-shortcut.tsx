'use client';

import { ReactNode, type HTMLAttributes } from 'react';
import { cn } from 'src/helpers/utils';

function DropdownMenuShortcut({
  children,
  className,
  ...properties
}: HTMLAttributes<HTMLSpanElement>): ReactNode {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...properties}
    >
      {children}
    </span>
  );
}

DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export { DropdownMenuShortcut };
