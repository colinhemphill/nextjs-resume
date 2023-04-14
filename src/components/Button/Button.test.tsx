import { render, screen } from '@test-utils';
import { describe, expect, test } from 'vitest';
import Button from './Button';

describe('<Button />', () => {
  test('Snapshot', async () => {
    const { container } = render(
      <>
        <Button>Button</Button>
        <Button size="sm">Button</Button>
        <Button size="md">Button</Button>
        <Button size="lg">Button</Button>
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  test('Renders an accessible button element', async () => {
    render(<Button>Action</Button>);

    const button = screen.getByRole('button', { name: /action/i });
    expect(button).toBeDefined();
  });
});
