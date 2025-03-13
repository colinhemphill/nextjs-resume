'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { type ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { cn } from 'src/helpers/utilities';

const DropdownMenuItem = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ children, className, inset, ...properties }, reference) => (
  <DropdownMenuPrimitive.Item
    ref={reference}
    className={cn(
      'focus:bg-accent-11 focus:text-accent-1 relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      inset && 'pl-8',
      className,
    )}
    {...properties}
  >
    {children}
  </DropdownMenuPrimitive.Item>
));

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export { DropdownMenuItem };
