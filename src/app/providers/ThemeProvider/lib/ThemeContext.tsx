import { createContext, Dispatch, SetStateAction } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);
