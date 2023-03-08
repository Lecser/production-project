import { type FC } from 'react';
import LightIcon from 'shared/assets/icons/moon-light.svg';
import DarkIcon from 'shared/assets/icons/moon-night.svg';
import { Theme } from 'shared/config/theme/ThemeContext';
import { useTheme } from 'shared/config/theme/useTheme';
import { cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  const iconSwitcher = theme === Theme.DARK ? <LightIcon /> : <DarkIcon />;
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={cn(cls.themeSwitcher, {}, [className])}
    >
      {iconSwitcher}
    </Button>
  );
};
