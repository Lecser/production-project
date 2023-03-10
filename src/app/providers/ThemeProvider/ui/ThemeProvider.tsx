import { type PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'shared/config/theme/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
}

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const { children, initialTheme } = props;

  const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  document.body.className = theme;

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
