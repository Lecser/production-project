import { createContext, type Dispatch, type SetStateAction } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
