import { render, screen } from '@test-utils';
import { describe, expect, test } from 'vitest';
import ButtonLink from './ButtonLink';

describe('<ButtonLink />', () => {
  test('Snapshot', async () => {
    const { container } = render(
      <>
        <ButtonLink href="/">Button</ButtonLink>
        <ButtonLink href="/" size="sm">
          Button
        </ButtonLink>
        <ButtonLink href="/" size="md">
          Button
        </ButtonLink>
        <ButtonLink href="/" size="lg">
          Button
        </ButtonLink>
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  test('Renders an accessible link element', async () => {
    render(<ButtonLink href="/">Home page</ButtonLink>);

    const button = screen.getByRole('link', { name: /home page/i });
    expect(button).toBeDefined();
  });
});
