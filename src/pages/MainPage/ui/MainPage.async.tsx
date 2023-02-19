import { lazy } from 'react';

export const MainPageAsync = lazy(
  async () =>
    new Promise((res) => {
      // @ts-expect-error
      setTimeout(() => res(import('./MainPage')), 1_000);
    })
);
