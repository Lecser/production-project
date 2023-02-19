import { cn } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import { FC } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  return (
    <div className={cn(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
