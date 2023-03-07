import { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { type ValueOf } from 'shared/lib/utilityTypes';

import cls from './Button.module.scss';

export const ThemeButton = {
  CLEAR: 'clear',
  OUTLINE: 'outline'
};

type ThemeButton = ValueOf<typeof ThemeButton>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { theme, className, children, ...restProps } = props;
  return (
    <button className={cn(cls.button, {}, [className, cls[theme]])} {...restProps}>
      {children}
    </button>
  );
};
