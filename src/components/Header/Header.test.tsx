import { personal } from '@content';
import { render, screen } from '@test-utils';
import { describe, expect, test } from 'bun:test';
import { fullName } from 'src/helpers/utils';
import { Header } from './Header';

describe('<Header />', () => {
  test('Renders headings and PDF button', () => {
    render(<Header />);

    expect(
      screen.getByRole('heading', { level: 1, name: fullName }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: personal.title }),
    ).toBeDefined();
    expect(
      screen.getByRole('link', { name: /view or download pdf/i }),
    ).toBeDefined();
  });

  test('Snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment).toMatchSnapshot();
  });
});
