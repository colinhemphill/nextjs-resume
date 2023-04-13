import { render } from '@test-utils';
import { expect, test } from 'vitest';
import { Header } from './Header';

test('Snapshot', async () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
