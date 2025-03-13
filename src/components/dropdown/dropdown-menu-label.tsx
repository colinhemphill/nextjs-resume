'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { type ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { cn } from 'src/helpers/utilities';

const DropdownMenuLabel = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ children, className, inset, ...properties }, reference) => (
  <DropdownMenuPrimitive.Label
    ref={reference}
    className={cn(
      'text-neutral-11 px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className,
    )}
    {...properties}
  >
    {children}
  </DropdownMenuPrimitive.Label>
));

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

export { DropdownMenuLabel };
