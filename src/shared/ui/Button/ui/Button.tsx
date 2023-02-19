import { cn } from "shared/lib/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { ValueOf } from "shared/lib/utilityTypes";

export const ThemeButton = {
  CLEAR: "clear",
};

type ThemeButton = ValueOf<typeof ThemeButton>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    theme = ThemeButton.CLEAR,
    className,
    children,
    ...restProps
  } = props;
  return (
    <button
      className={cn(cls.button, {}, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </button>
  );
};
