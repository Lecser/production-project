import { cn } from "shared/lib/classNames";
import cls from "./AppLink.module.scss";
import { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";
import { ValueOf } from "shared/lib/utilityTypes";

export const AppLinkTheme = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

export type AppLinkTheme = ValueOf<typeof AppLinkTheme>;

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...restProps
  } = props;
  return (
    <Link
      to={to}
      className={cn(cls.appLink, {}, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
};
