import { describe, expect, test } from 'bun:test';
import { Button } from 'src/components/button/button';
import { render, screen } from 'src/test-utilities';

describe('<Button />', () => {
  test('Renders an accessible button element', () => {
    render(<Button>Action</Button>);

    const button = screen.getByRole('button', { name: /action/i });
    expect(button).toBeDefined();
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <>
        <Button>Button</Button>
        <Button size="sm">Button</Button>
        <Button size="md">Button</Button>
        <Button size="lg">Button</Button>
      </>,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
