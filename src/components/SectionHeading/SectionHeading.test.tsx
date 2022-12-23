import { render, screen } from '../../test-utils';
import { SectionHeading } from './SectionHeading';

describe('<SectionHeading />', () => {
  test('Snapshot', async () => {
    const { container } = render(<SectionHeading text="Section Heading" />);
    expect(container).toMatchSnapshot();
  });

  test('Renders a heading', async () => {
    render(<SectionHeading text="Section Heading" />);

    const heading = screen.getByRole('heading', {
      level: 3,
      name: /Section Heading/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
