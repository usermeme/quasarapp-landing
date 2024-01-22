import { useCallback, useState } from "react";

import { changeHtmlAttribute } from "@/utils/document";

import type {
  ChangeThemeMode,
  OnThemeModeChange,
  UseThemeModeReturn,
} from "./@types";
import { THEME_MODE_ATTRUBITE_KEY, ThemeMode } from "./constants";

export const useThemeMode = (
  defaultValue: ThemeMode,
  onThemeModeChange: OnThemeModeChange
): UseThemeModeReturn => {
  const [colorScheme, setColorScheme] = useState(defaultValue);

  const changeThemeMode: ChangeThemeMode = useCallback(
    (callbackOrValue) => {
      setColorScheme((prevValue) => {
        const value =
          typeof callbackOrValue === "function"
            ? callbackOrValue(prevValue)
            : callbackOrValue;

        changeHtmlAttribute(THEME_MODE_ATTRUBITE_KEY, value);
        onThemeModeChange(value);
        return value;
      });
    },
    [onThemeModeChange]
  );

  return [colorScheme, changeThemeMode];
};
