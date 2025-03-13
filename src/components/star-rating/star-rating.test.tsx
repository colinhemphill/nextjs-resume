import { describe, expect, test } from 'bun:test';
import StarRating from 'src/components/star-rating/star-rating';
import { render } from 'src/test-utilities';

describe('<StarRating />', () => {
  test('Snapshot', () => {
    const { asFragment } = render(<StarRating stars={3} />);
    expect(asFragment).toMatchSnapshot();
  });
});
