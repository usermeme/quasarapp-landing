import type {
  ChangeColorScheme,
  ColorScheme,
  OnColorSchemeChange,
} from "../color-scheme";
import type {
  ChangeThemeMode,
  OnThemeModeChange,
  ThemeMode,
} from "../theme-mode";

export interface UsePreferencesPayload {
  defaultColorScheme: ColorScheme;
  defaultThemeMode: ThemeMode;
  onColorSchemeChange: OnColorSchemeChange;
  onThemeModeChange: OnThemeModeChange;
}

export interface UsePreferencesReturn {
  changeColorScheme: ChangeColorScheme;
  changeThemeMode: ChangeThemeMode;
  colorScheme: ColorScheme;
  themeMode: ThemeMode;
  togglePreferColor: () => void;
}
