import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  async () =>
    new Promise((res) => {
      // @ts-expect-error
      setTimeout(() => res(import('./ProfilePage')), 1_000);
    })
);
