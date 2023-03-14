import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import UserIcon from 'shared/assets/icons/user.svg';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { password, username, isLoading, error } = useSelector(getLoginState);
  const { t } = useTranslation();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ password, username }));
  }, [dispatch, password, username]);

  const ERROR_MESSAGE = t('Неверный email или пароль');

  return (
    <div className={cn(cls.loginForm, {}, [className])}>
      <UserIcon className={cls.loginIcon} />
      <Text text={t('Вход в аккаунт')} className={cls.loginTitle} />
      {error && <Text text={ERROR_MESSAGE} theme={TextTheme.ERROR} />}
      <Input
        value={username}
        onChange={onChangeUsername}
        autoFocus
        className={cls.input}
        placeholder={t('Имя пользователя')}
      />
      <Input
        value={password}
        onChange={onChangePassword}
        className={cls.input}
        placeholder={t('Пароль')}
      />
      <Button
        disabled={isLoading}
        onClick={onLoginClick}
        className={cls.loginBtn}
        theme={ButtonTheme.FILLED}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
