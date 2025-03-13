'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';
import { Button, ButtonProperties } from 'src/components/button/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from 'src/components/dropdown/dropdown-menu';
import { DropdownMenuLabel } from 'src/components/dropdown/dropdown-menu-label';
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from 'src/components/dropdown/dropdown-menu-radio';
import { DropdownMenuSeparator } from 'src/components/dropdown/dropdown-menu-separator';
import { cn } from 'src/helpers/utilities';

export type ThemeToggleProperties = Pick<
  ButtonProperties,
  'color' | 'variant'
> & {
  buttonTextVisible: boolean;
  labelButton: string;
  labelMenu: string;
  themeNameDark: string;
  themeNameLight: string;
  themeNameSystem: string;
};

function ThemeToggle({
  buttonTextVisible,
  color,
  labelButton,
  labelMenu,
  themeNameDark,
  themeNameLight,
  themeNameSystem,
  variant = 'outline',
}: ThemeToggleProperties): ReactNode {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn({
            'rounded-full': !buttonTextVisible,
          })}
          color={color}
          size={buttonTextVisible ? 'md' : 'icon'}
          variant={variant}
        >
          <div className="flex items-center gap-2">
            <SunIcon className="scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
            <MoonIcon className="absolute scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
            <span
              className={cn({
                'sr-only': !buttonTextVisible,
              })}
            >
              {labelButton}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>{labelMenu}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">
            {themeNameLight}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            {themeNameDark}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            {themeNameSystem}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ThemeToggle };
