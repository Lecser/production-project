import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const { t } = useTranslation();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    setIsAuthModal(false);
  }, [dispatch]);

  if (authData) {
    return (
      <nav className={cn(cls.navbar, {}, [className])}>
        <Button className={cls.link} theme={ButtonTheme.FILLED} onClick={onLogout}>
          {t('Выйти')}
        </Button>
      </nav>
    );
  }

  return (
    <nav className={cn(cls.navbar, {}, [className])}>
      <Button className={cls.link} theme={ButtonTheme.FILLED} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </nav>
  );
});
