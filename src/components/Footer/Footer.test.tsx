import { render } from '@test-utils';
import { describe, expect, test } from 'bun:test';
import { Footer } from './Footer';

describe('<Footer />', () => {
  test('Snapshot without links', async () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment).toMatchSnapshot();
  });

  test('Snapshot with links', async () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment).toMatchSnapshot();
  });
});
