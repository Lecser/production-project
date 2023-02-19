import { cn } from "shared/lib/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { FC } from "react";
import { useTheme } from "shared/config/theme/useTheme";
import { Theme } from "shared/config/theme/ThemeContext";
import LightIcon from "shared/assets/icons/moon-light.svg";
import DarkIcon from "shared/assets/icons/moon-night.svg";
import { Button, ThemeButton } from "shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  const iconSwitcher = theme === Theme.DARK ? <LightIcon /> : <DarkIcon />;
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={cn(cls.themeSwitcher, {}, [className])}
    >
      {iconSwitcher}
    </Button>
  );
};
