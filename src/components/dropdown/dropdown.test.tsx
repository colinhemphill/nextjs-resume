import { DropdownMenuRadioItem } from '@radix-ui/react-dropdown-menu';
import { describe, expect, test } from 'bun:test';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from 'src/components/dropdown/dropdown-menu';
import { DropdownMenuLabel } from 'src/components/dropdown/dropdown-menu-label';
import { DropdownMenuRadioGroup } from 'src/components/dropdown/dropdown-menu-radio';
import { DropdownMenuSeparator } from 'src/components/dropdown/dropdown-menu-separator';
import { render } from 'src/test-utilities';

describe('<Dropdown />', () => {
  test('Snapshot', () => {
    const { asFragment } = render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open dropdown</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup>
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
