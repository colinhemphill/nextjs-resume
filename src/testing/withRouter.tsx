import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { NextRouter } from 'next/router';
import React from 'react';

export default function withTestRouter(
  tree: React.ReactElement,
  router: Partial<NextRouter> = {},
): JSX.Element {
  const {
    route = '',
    pathname = '',
    query = {},
    asPath = '',
    push = async () => true,
    replace = async () => true,
    reload = () => null,
    back = () => null,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isFallback = false,
    events = {
      emit: () => null,
      off: () => null,
      on: () => null,
    },
  } = router;

  return (
    <RouterContext.Provider
      value={
        {
          asPath,
          back,
          beforePopState,
          events,
          isFallback,
          pathname,
          prefetch,
          push,
          query,
          reload,
          replace,
          route,
        } as NextRouter
      }
    >
      {tree}
    </RouterContext.Provider>
  );
}
