import { type ButtonHTMLAttributes, memo, type PropsWithChildren } from 'react';
import { cn } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  FILLED = 'filled',
  BACKGROUND = 'background',
  BACKGROUND_CONTENT = 'backgroundContent'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = memo((props: PropsWithChildren<ButtonProps>) => {
  const {
    theme = ButtonTheme.FILLED,
    className,
    children,
    square,
    size = ButtonSize.M,
    ...restProps
  } = props;

  const mods = { [cls.square]: square };

  return (
    <button className={cn(cls.button, mods, [className, cls[theme], cls[size]])} {...restProps}>
      {children}
    </button>
  );
});
