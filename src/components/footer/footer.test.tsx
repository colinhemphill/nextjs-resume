import Footer from './footer';
import { render } from '@src/test-utilities';
import { describe, expect, test } from 'bun:test';

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
