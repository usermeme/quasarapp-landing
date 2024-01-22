import { createContext, useContext } from "react";
import { noop } from "lodash";

import { ThemeContextProps } from "./@types";
import { DEFAULT_COLOR_SHEME, DEFAULT_THEME_MODE } from "./constants";

export const ThemeContext = createContext<ThemeContextProps>({
  preferences: {
    changeColorScheme: noop,
    changeThemeMode: noop,
    colorScheme: DEFAULT_COLOR_SHEME,
    themeMode: DEFAULT_THEME_MODE,
    togglePreferColor: noop,
  },
});

export const useTheme = () => useContext(ThemeContext);
