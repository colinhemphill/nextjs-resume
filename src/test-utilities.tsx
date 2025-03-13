import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }): ReactNode => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };

export { default as userEvent } from '@testing-library/user-event';
