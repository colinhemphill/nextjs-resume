'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { type ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { cn } from 'src/helpers/utilities';

const DropdownMenuSeparator = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ children, className, ...properties }, reference) => (
  <DropdownMenuPrimitive.Separator
    ref={reference}
    className={cn('bg-neutral-6 -mx-1 my-1 h-px', className)}
    {...properties}
  >
    {children}
  </DropdownMenuPrimitive.Separator>
));

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

export { DropdownMenuSeparator };
