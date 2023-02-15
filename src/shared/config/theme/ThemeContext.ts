import {createContext, Dispatch, SetStateAction} from 'react';
import {ValueOf} from 'shared/lib/utilityTypes';



export const Theme = {
  LIGHT: 'light',
  DARK: 'dark'
} as const

export type Theme = ValueOf<typeof Theme>

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'