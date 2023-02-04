import {FC, PropsWithChildren, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';

export const ThemeProvider: FC<PropsWithChildren<{}>> = (props) => {
  const {children} = props

  const getTheme = (theme: Theme | string | null): Theme | null =>
    Object.values(Theme as any).some((item: Theme) => theme === item) ? (theme as Theme) : null;

  const defaultTheme: Theme = getTheme(localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) || Theme.DARK;

  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => (
    {theme: theme, setTheme: setTheme,}

  ), [theme])


  return (
    <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
  );
};

 