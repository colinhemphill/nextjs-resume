import { render, screen } from '../../test-utils';
import { Heading } from './Heading';

describe('<Heading />', () => {
  test('Snapshot', () => {
    const { container } = render(<Heading level={1}>Heading</Heading>);
    expect(container).toMatchSnapshot();
  });

  test('Renders a heading', () => {
    render(<Heading level={1}>Level 1 Heading</Heading>);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /Level 1 Heading/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
