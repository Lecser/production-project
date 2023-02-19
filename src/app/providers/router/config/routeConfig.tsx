import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { type RouteProps } from 'react-router-dom';
import { type ValueOf } from 'shared/lib/utilityTypes';

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about'
} as const;

export type AppRoutes = ValueOf<typeof AppRoutes>;

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  }
};
