import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { type FC, useState } from 'react';
import { cn } from 'shared/lib/classNames';
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
    <div className={cn(cls.sidebar, { [cls.collapsed]: collapsed }, [className as string])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
