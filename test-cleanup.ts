import { cleanup } from '@testing-library/react';
import { afterEach, mock } from 'bun:test';

afterEach(cleanup);

afterEach(() => {
  mock.clearAllMocks();
});
