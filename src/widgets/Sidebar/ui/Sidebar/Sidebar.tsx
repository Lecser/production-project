import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { type FC, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid='Sidebar'
      className={cn(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <button data-testid='Sidebar-toggle' onClick={onToggle}>
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher className={cls.theme} />
        <LangSwitcher />
      </div>
    </aside>
  );
};
