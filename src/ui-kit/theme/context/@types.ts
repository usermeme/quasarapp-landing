import type {
  ColorScheme,
  OnColorSchemeChange,
  OnThemeModeChange,
  ThemeMode,
  UsePreferencesReturn,
} from "../preferences";

export interface ThemeContextProps {
  preferences: UsePreferencesReturn;
}

export interface ThemeProviderProps {
  defaultColorScheme: ColorScheme;
  defaultThemeMode: ThemeMode;
  onColorSchemeChange: OnColorSchemeChange;
  onThemeModeChange: OnThemeModeChange;
}
