import { lazy } from 'react';

export const AboutPageAsync = lazy(
  async () =>
    new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import('./AboutPage')), 1_000);
    })
);
