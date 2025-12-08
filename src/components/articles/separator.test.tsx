import { describe, expect, test } from 'bun:test';
import { render } from 'src/test-utilities';
import Separator from './separator';

describe('<Separator />', () => {
  test('Renders as horizontal rule', () => {
    const { container } = render(<Separator />);

    const hr = container.querySelector('hr');
    expect(hr).toBeDefined();
  });

  test('Has proper styling classes', () => {
    const { container } = render(<Separator />);

    const hr = container.querySelector('hr');
    expect(hr?.className).toContain('w-full');
    expect(hr?.className).toContain('rounded-full');
    expect(hr?.className).toContain('border');
  });

  test('Has last-of-type:hidden class', () => {
    const { container } = render(<Separator />);

    const hr = container.querySelector('hr');
    expect(hr?.className).toContain('last-of-type:hidden');
  });

  test('Snapshot', () => {
    const { asFragment } = render(<Separator />);
    expect(asFragment).toMatchSnapshot();
  });

  test('Multiple separators render correctly', () => {
    const { container } = render(
      <>
        <Separator />
        <Separator />
        <Separator />
      </>,
    );

    const separators = container.querySelectorAll('hr');
    expect(separators.length).toBe(3);
  });
});
