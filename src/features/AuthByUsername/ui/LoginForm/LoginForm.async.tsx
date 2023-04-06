import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { FC, lazy } from 'react';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  async () =>
    new Promise((res) => {
      setTimeout(() => res(import('./LoginForm')), 1_000);
    })
);
