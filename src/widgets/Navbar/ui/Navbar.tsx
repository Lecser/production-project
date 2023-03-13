import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const [isAuthModal, setIsAuthModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const { t } = useTranslation();
  return (
    <header className={cn(cls.navbar, {}, [className])}>
      <nav className={cls.link}>
        <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE} onClick={onShowModal}>
          {t('Войти')}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </nav>
    </header>
  );
};
