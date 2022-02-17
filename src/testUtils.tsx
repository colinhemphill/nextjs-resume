import { render } from '@testing-library/react';
import React from 'react';

const Wrapper: React.FC = ({ children }) => {
  return <>{children}</>;
};

const customRender = (ui, options?) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
