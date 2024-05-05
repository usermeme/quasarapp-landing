"use client";

import {
  Experimental_CssVarsProvider,
  experimental_extendTheme,
} from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { DARK_PALETTE, LIGHT_PALETTE } from "../palette";
import { font } from "../typography";
import { ThemeProviderProps } from "./@types";

const experimentalTheme = experimental_extendTheme({
  colorSchemes: { dark: DARK_PALETTE, light: LIGHT_PALETTE },
  cssVarPrefix: "",
  spacing: 4,
  typography: { fontFamily: font.style.fontFamily },
});

export const ThemeProvider: FCC<ThemeProviderProps> = ({
  children,
  defaultMode = "system",
}) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: false }}>
      <Experimental_CssVarsProvider
        theme={experimentalTheme}
        defaultMode={defaultMode}
      >
        {children}
      </Experimental_CssVarsProvider>
    </AppRouterCacheProvider>
  );
};
