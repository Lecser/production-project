import { RoutePath } from 'app/providers/router/config/routeConfig';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about.svg';
import BarsIcon from 'shared/assets/icons/bars.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

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
        <AppLink theme={AppLinkTheme.SUBHEAD} to={RoutePath.main} className={cls.item}>
          <HomeIcon className={cls.icon} />
          <span className={cls.link}> {t('Главная')}</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.SUBHEAD} to={RoutePath.about} className={cls.item}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}> {t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher className={cls.theme} />
        <LangSwitcher short={collapsed} />
      </div>
    </aside>
  );
};
