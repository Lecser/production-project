import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <header className={cn(cls.navbar, {}, [className])}>
      <nav className={cls.links} />
    </header>
  );
};
