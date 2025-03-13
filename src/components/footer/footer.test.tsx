import { describe, expect, test } from 'bun:test';
import { render } from 'src/test-utilities';
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
