import { useMemo } from "react";
import { CssVarsProvider } from "@mui/material-next";

import { usePreferColorSchemeListener } from "../listeners/prefer-color-scheme-listener";
import { themePalette } from "../palette";
import { COLOR_SCHEME_ATTRUBITE_KEY, usePreferences } from "../preferences";
import { ThemeProviderProps } from "./@types";
import { ThemeContext } from "./Context";

export const ThemeProvider: FCC<ThemeProviderProps> = ({
  children,
  defaultColorScheme,
  defaultThemeMode,
  onColorSchemeChange,
  onThemeModeChange,
}) => {
  const preferences = usePreferences({
    defaultColorScheme,
    defaultThemeMode,
    onColorSchemeChange,
    onThemeModeChange,
  });

  const value = useMemo(() => ({ preferences }), [preferences]);

  usePreferColorSchemeListener(preferences);

  return (
    <ThemeContext.Provider value={value}>
      <CssVarsProvider
        theme={themePalette}
        colorSchemeSelector={COLOR_SCHEME_ATTRUBITE_KEY}
      >
        {children}
      </CssVarsProvider>
    </ThemeContext.Provider>
  );
};
