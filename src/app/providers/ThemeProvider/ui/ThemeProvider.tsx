import { FC, ReactNode, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext";
// import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "./shared/config/theme/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme
    } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
      <ThemeContext.Provider value={defaultProps}>
          {children}
      </ThemeContext.Provider>
  );
};

export default ThemeProvider;
