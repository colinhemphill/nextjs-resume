import { render } from '../../test-utils';
import { Footer } from './Footer';

describe('<Footer />', () => {
  test('Snapshot without links', async () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  test('Snapshot with links', async () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
