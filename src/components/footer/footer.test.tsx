import { render } from '@test-utils';
import { describe, expect, test } from 'bun:test';
import Footer from './footer';

describe('<Footer />', () => {
  test('Snapshot without links', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment).toMatchSnapshot();
  });

  test('Snapshot with links', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment).toMatchSnapshot();
  });
});
