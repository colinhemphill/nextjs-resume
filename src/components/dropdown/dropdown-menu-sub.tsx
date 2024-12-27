'use client';

import { ChevronRightIcon } from '@heroicons/react/24/solid';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { type ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { cn } from 'src/helpers/utils';

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuSubContent = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ children, className, ...properties }, reference) => (
  <DropdownMenuPrimitive.SubContent
    ref={reference}
    className={cn(
      'bg-neutral-1 text-neutral-12 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border-neutral-6 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg',
      className,
    )}
    {...properties}
  >
    {children}
  </DropdownMenuPrimitive.SubContent>
));

DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuSubTrigger = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...properties }, reference) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={reference}
    className={cn(
      'focus:bg-accent-11 focus:text-neutral-1 data-[state=open]:bg-accent-11 data-[state=open]:text-neutral-1 flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      inset && 'pl-8',
      className,
    )}
    {...properties}
  >
    {children}
    <ChevronRightIcon className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));

DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

export { DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger };
