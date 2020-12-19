import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@testing-library/jest-dom';
import { render as rtlRender, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';
import withRouter from './withRouter';

function render(
  ui: ReactElement,
  { testRouterOptions = {}, ...renderOptions } = {},
): RenderResult {
  library.add(fab);
  function Wrapper({ children }) {
    return withRouter(<>{children}</>, testRouterOptions);
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
