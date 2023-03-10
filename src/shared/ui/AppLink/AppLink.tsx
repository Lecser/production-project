import { type PropsWithChildren } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { cn } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  SUBHEAD = 'appLink',
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: PropsWithChildren<AppLinkProps>) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...restProps } = props;
  return (
    <Link to={to} className={cn(cls.appLink, {}, [className, cls[theme]])} {...restProps}>
      {children}
    </Link>
  );
};
