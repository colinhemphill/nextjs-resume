import { render, screen } from '@test-utils';
import { describe, expect, test } from 'bun:test';
import ButtonLink from './ButtonLink';

describe('<ButtonLink />', () => {
  test('Snapshot', async () => {
    const { asFragment } = render(
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
    expect(asFragment).toMatchSnapshot();
  });

  test('Renders an accessible link element', async () => {
    render(<ButtonLink href="/">Home page</ButtonLink>);

    const button = screen.getByRole('link', { name: /home page/i });
    expect(button).toBeDefined();
  });
});
