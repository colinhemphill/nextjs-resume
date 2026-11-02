import Prose from './prose';
import { render, screen } from '@src/test-utilities';
import { describe, expect, test } from 'bun:test';

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
