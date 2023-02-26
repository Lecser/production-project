import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <header className={cn(cls.navbar, {}, [className])}>
      <nav className={cls.links}>
        <AppLink theme={AppLinkTheme.SUBHEAD} to='/' className={cls.mainLink}>
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SUBHEAD} to='/about'>
          {t('О сайте')}
        </AppLink>
      </nav>
    </header>
  );
};
