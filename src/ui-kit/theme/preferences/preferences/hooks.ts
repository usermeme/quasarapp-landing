import { useCallback, useMemo } from "react";

import { ColorScheme, useColorScheme } from "../color-scheme";
import { ThemeMode, useThemeMode } from "../theme-mode";
import type { UsePreferencesPayload, UsePreferencesReturn } from "./@types";

export const usePreferences = ({
  defaultColorScheme,
  defaultThemeMode,
  onColorSchemeChange,
  onThemeModeChange,
}: UsePreferencesPayload): UsePreferencesReturn => {
  const [colorScheme, changeColorScheme] = useColorScheme(
    defaultColorScheme,
    onColorSchemeChange
  );
  const [themeMode, changeThemeMode] = useThemeMode(
    defaultThemeMode,
    onThemeModeChange
  );

  const togglePreferColor = useCallback(() => {
    changeThemeMode(ThemeMode.MANUAL);
    changeColorScheme((prevValue) =>
      prevValue === ColorScheme.LIGHT ? ColorScheme.DARK : ColorScheme.LIGHT
    );
  }, [changeColorScheme, changeThemeMode]);

  return useMemo(
    () => ({
      changeColorScheme,
      changeThemeMode,
      colorScheme,
      themeMode,
      togglePreferColor,
    }),
    [
      changeColorScheme,
      changeThemeMode,
      colorScheme,
      themeMode,
      togglePreferColor,
    ]
  );
};
