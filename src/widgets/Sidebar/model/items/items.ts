import { RoutePath } from 'app/providers/router/config/routeConfig';
import React from 'react';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import userIcon from 'shared/assets/icons/user.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
  { path: RoutePath.main, icon: HomeIcon, text: 'Главная' },
  { path: RoutePath.about, icon: AboutIcon, text: 'О сайте' },
  { path: RoutePath.profile, icon: userIcon, text: 'Профиль' }
];
