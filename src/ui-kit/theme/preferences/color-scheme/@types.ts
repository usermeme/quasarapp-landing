import { ColorScheme } from "./constants";

export type ChangeColorScheme = (
  callbackOrValue: CallbackOrValue<ColorScheme>
) => void;

export type OnColorSchemeChange = (value: ColorScheme) => void;

export type UseColorSchemeReturn = [ColorScheme, ChangeColorScheme];
