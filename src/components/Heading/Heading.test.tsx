import { render, screen } from '@test-utils';
import { describe, expect, test } from 'vitest';
import { Heading } from './Heading';

describe('<Heading />', () => {
  test('Snapshot', () => {
    const { container } = render(
      <>
        <Heading color="neutral" level={1}>
          Heading 1
        </Heading>
        <Heading color="neutralSubtle" level={2}>
          Heading 2
        </Heading>
        <Heading color="primary" level={3}>
          Heading 3
        </Heading>
        <Heading color="danger" level={4}>
          Heading 4
        </Heading>
        <Heading level={5}>Heading 5</Heading>
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  test('Renders an accessible heading', () => {
    render(<Heading level={1}>Level 1 Heading</Heading>);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /Level 1 Heading/i,
    });

    expect(heading).toBeDefined();
  });
});
