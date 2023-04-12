import { render } from '../../test-utils';
import { Header } from './Header';

describe('<Header />', () => {
  test('Snapshot', async () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
