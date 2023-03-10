import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import UserIcon from 'shared/assets/icons/user.svg';
import { cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const [isAuthModal, setIsAuthModal] = useState(false);
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  const { t } = useTranslation();
  return (
    <header className={cn(cls.navbar, {}, [className])}>
      <nav className={cls.link}>
        <Button className={cls.loginBtn} theme={ButtonTheme.CLEAR} onClick={onToggleModal}>
          <UserIcon className={cls.mainLink} />
          {t('Войти')}
        </Button>

        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus.
        </Modal>
      </nav>
    </header>
  );
};
