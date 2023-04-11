import { ThemeSwitcher } from "features/ThemeSwitcher";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import BarsIcon from "shared/assets/icons/bars.svg";
import { cn } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { sidebarItemsList } from "widgets/Sidebar/model/items/items";
import { SidebarItem } from "widgets/Sidebar/ui/SidebarItem/SidebarItem";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(true);

  const { t } = useTranslation();

  const onToggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid='Sidebar'
      className={cn(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        theme={ButtonTheme.BACKGROUND_CONTENT}
        data-testid='Sidebar-toggle'
        square
        onClick={onToggle}
      >
        <BarsIcon />
      </Button>

      <div className={cls.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher className={cls.theme} />
        <LangSwitcher short={collapsed} />
      </div>
    </aside>
  );
});
