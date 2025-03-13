import { personal } from '@content';
import { describe, expect, mock, test } from 'bun:test';
import { fullName } from 'src/helpers/utilities';
import { render, screen } from 'src/test-utilities';
import Header from './header';

void mock.module('next/navigation', () => {
  return {
    useParams: mock().mockReturnValue({ secret: 'secret' }),
  };
});

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
