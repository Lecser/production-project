import { routeConfig } from 'app/providers/router/config/routeConfig';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        element={
          <Suspense fallback={<PageLoader />}>
            <div className='page-wrapper'>{element}</div>
          </Suspense>
        }
        path={path}
      />
    ))}
  </Routes>
);
