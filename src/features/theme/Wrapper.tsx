"use server";

import { cookies } from "next/headers";

import {
  ColorScheme,
  DEFAULT_COLOR_SHEME,
  DEFAULT_THEME_MODE,
  ThemeMode,
  ThemeProvider,
} from "@/ui-kit/theme";

import { COLOR_SCHEME_COOKIE_KEY, THEME_MODE_COOKIE_KEY } from "./constants";
import { onColorSchemeChange, onThemeModeChange } from "./handlers";

export const ThemeWrapper: FCC = ({ children }) => {
  const cookiesList = cookies();

  const defaultColorScheme =
    (cookiesList.get(COLOR_SCHEME_COOKIE_KEY)?.value as ColorScheme) ??
    DEFAULT_COLOR_SHEME;
  const defaultThemeMode =
    (cookiesList.get(THEME_MODE_COOKIE_KEY)?.value as ThemeMode) ??
    DEFAULT_THEME_MODE;

  return (
    <ThemeProvider
      defaultColorScheme={defaultColorScheme}
      defaultThemeMode={defaultThemeMode}
      onColorSchemeChange={onColorSchemeChange}
      onThemeModeChange={onThemeModeChange}
    >
      {children}
    </ThemeProvider>
  );
};
