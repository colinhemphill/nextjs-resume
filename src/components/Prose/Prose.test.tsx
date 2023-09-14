import { render, screen } from '@test-utils';
import { describe, expect, test } from 'bun:test';
import Prose from './Prose';

describe('<Prose />', () => {
  test('Renders html content', () => {
    render(<Prose html={'<h1>Test html</h1>'} />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /test html/i,
    });

    expect(heading).toBeDefined();
  });
});
