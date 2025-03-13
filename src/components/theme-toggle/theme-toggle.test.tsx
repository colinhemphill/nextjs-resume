import { beforeAll, describe, expect, test } from 'bun:test';
import { ThemeToggle } from 'src/components/theme-toggle/theme-toggle';
import { render, screen, userEvent } from 'src/test-utilities';

describe('<Dropdown />', () => {
  beforeAll(() => {
    render(
      <ThemeToggle
        buttonTextVisible
        labelButton="Theme"
        labelMenu="Menu"
        themeNameDark="Dark"
        themeNameLight="Light"
        themeNameSystem="System"
      />,
    );
  });

  test('Renders the theme toggle', () => {
    const toggle = screen.getByRole('button', { name: /theme/i });
    expect(toggle).toBeDefined();
  });

  test('Renders toggle options', async () => {
    const user = userEvent.setup();
    const toggle = screen.getByRole('button', { name: /theme/i });

    await user.click(toggle);

    expect(screen.getByRole('menu')).toBeDefined();
    expect(screen.getByRole('separator')).toBeDefined();
    expect(screen.getByRole('group')).toBeDefined();

    expect(screen.getByRole('menuitemradio', { name: /light/i })).toBeDefined();
    expect(screen.getByRole('menuitemradio', { name: /dark/i })).toBeDefined();
    expect(
      screen.getByRole('menuitemradio', { name: /system/i }),
    ).toBeDefined();

    expect(toggle).toBeDefined();
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <ThemeToggle
        buttonTextVisible
        labelButton="Theme"
        labelMenu="Menu"
        themeNameDark="Dark"
        themeNameLight="Light"
        themeNameSystem="System"
      />,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
