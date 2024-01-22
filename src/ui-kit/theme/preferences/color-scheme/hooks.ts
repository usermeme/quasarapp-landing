import { useCallback, useState } from "react";

import { changeHtmlAttribute } from "@/utils/document";

import type {
  ChangeColorScheme,
  OnColorSchemeChange,
  UseColorSchemeReturn,
} from "./@types";
import { COLOR_SCHEME_ATTRUBITE_KEY, ColorScheme } from "./constants";

export const useColorScheme = (
  defaultValue: ColorScheme,
  onColorSchemeChange: OnColorSchemeChange
): UseColorSchemeReturn => {
  const [colorScheme, setColorScheme] = useState(defaultValue);

  const changeColorScheme: ChangeColorScheme = useCallback(
    (callbackOrValue) => {
      setColorScheme((prevValue) => {
        const value =
          typeof callbackOrValue === "function"
            ? callbackOrValue(prevValue)
            : callbackOrValue;

        changeHtmlAttribute(COLOR_SCHEME_ATTRUBITE_KEY, value);
        onColorSchemeChange(value);
        return value;
      });
    },
    [onColorSchemeChange]
  );

  return [colorScheme, changeColorScheme];
};
