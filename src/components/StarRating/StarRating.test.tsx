import { render } from '@test-utils';
import { describe, expect, test } from 'bun:test';
import { StarRating } from './StarRating';

describe('<StarRating />', () => {
  test('Snapshot', async () => {
    const { asFragment } = render(<StarRating stars={3} />);
    expect(asFragment).toMatchSnapshot();
  });
});
