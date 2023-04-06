import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import UserIcon from 'shared/assets/icons/user.svg';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader
} from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const initialReducers: ReducersList = {
    loginForm: loginReducer
  };
  useDynamicModuleLoader(initialReducers, true);

  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

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
export default LoginForm;
