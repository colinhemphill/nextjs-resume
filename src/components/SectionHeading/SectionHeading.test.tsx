import { render, screen } from '@test-utils';
import { describe, expect, test } from 'bun:test';
import { SectionHeading } from './SectionHeading';

describe('<SectionHeading />', () => {
  test('Renders a heading', async () => {
    render(<SectionHeading text="Section Heading" />);

    const heading = screen.getByRole('heading', {
      level: 3,
      name: /Section Heading/i,
    });

    expect(heading).toBeDefined();
  });

  test('Snapshot', async () => {
    const { asFragment } = render(<SectionHeading text="Section Heading" />);
    expect(asFragment).toMatchSnapshot();
  });
});
