import { type FC, type PropsWithChildren } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { cn } from 'shared/lib/classNames/classNames';
import { type ValueOf } from 'shared/lib/utilityTypes';

import cls from './AppLink.module.scss';

export const AppLinkTheme = {
  SUBHEAD: 'appLink',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

export type AppLinkTheme = ValueOf<typeof AppLinkTheme>;

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...restProps } = props;
  return (
    <Link to={to} className={cn(cls.appLink, {}, [className, cls[theme]])} {...restProps}>
      {children}
    </Link>
  );
};
