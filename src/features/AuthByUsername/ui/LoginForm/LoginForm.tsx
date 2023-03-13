import { useTranslation } from 'react-i18next';
import UserIcon from 'shared/assets/icons/user.svg';
import { cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={cn(cls.loginForm, {}, [className])}>
      <UserIcon className={cls.loginIcon} />
      <div className={cls.loginTitle}>{t('Вход в аккаунт')}</div>
      <Input autoFocus className={cls.input} placeholder={t('Имя пользователя')} />
      <Input className={cls.input} placeholder={t('Пароль')} />
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>
        {t('Войти')}
      </Button>
    </div>
  );
};
