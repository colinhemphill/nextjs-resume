import SectionHeading from './section-heading';
import { render, screen } from '@src/test-utilities';
import { describe, expect, test } from 'bun:test';

describe('<SectionHeading />', () => {
  test('Renders a heading', () => {
    render(<SectionHeading text="Section Heading" />);

    const heading = screen.getByRole('heading', {
      level: 3,
      name: /section heading/i,
    });

    expect(heading).toBeDefined();
  });

  test('Snapshot', () => {
    const { asFragment } = render(<SectionHeading text="Section Heading" />);
    expect(asFragment).toMatchSnapshot();
  });
});
