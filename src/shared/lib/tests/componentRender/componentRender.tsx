import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router';
import i18nForTests from 'shared/config/i18n/i18nForTests';

import { render } from '@testing-library/react';

export interface RenderWithRouterOptions {
  route?: string;
}

export const componentRender = (component: ReactNode, options: RenderWithRouterOptions = {}) => {
  const { route = '/' } = options;
  render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>
  );
};
