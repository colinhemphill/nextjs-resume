import { render } from '../../test-utils';
import { StarRating } from './StarRating';

describe('<StarRating />', () => {
  test('Snapshot', async () => {
    const { container } = render(<StarRating stars={3} />);
    expect(container).toMatchSnapshot();
  });
});
