import { CssVarsThemeOptions, extendTheme } from "@mui/material-next";

import { ColorScheme } from "../preferences";

const LIGHT_PALETTE: CssVarsThemeOptions = {};
const DARK_PALETTE: CssVarsThemeOptions = {};

export const themePalette = extendTheme({
  colorSchemes: {
    [ColorScheme.LIGHT]: LIGHT_PALETTE,
    [ColorScheme.DARK]: DARK_PALETTE,
  },
});
