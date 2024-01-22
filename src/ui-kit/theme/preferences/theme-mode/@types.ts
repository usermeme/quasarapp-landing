import { ThemeMode } from "./constants";

export type ChangeThemeMode = (
  callbackOrValue: CallbackOrValue<ThemeMode>
) => void;

export type OnThemeModeChange = (value: ThemeMode) => void;

export type UseThemeModeReturn = [ThemeMode, ChangeThemeMode];
