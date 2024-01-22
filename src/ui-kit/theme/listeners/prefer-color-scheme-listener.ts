import { useCallback } from "react";

import { useMediaQueryListener } from "../../hooks/media-query";
import type { ChangeColorScheme } from "../preferences";
import { ColorScheme, ThemeMode } from "../preferences";

interface UsePreferColorSchemeListenerPayload {
  changeColorScheme: ChangeColorScheme;
  themeMode: ThemeMode;
}
export const usePreferColorSchemeListener = ({
  changeColorScheme,
  themeMode,
}: UsePreferColorSchemeListenerPayload) => {
  const preferColorListener = useCallback(
    (event: MediaQueryListEvent) => {
      if (themeMode === ThemeMode.SYSTEM) {
        const preferColor = event.matches
          ? ColorScheme.DARK
          : ColorScheme.LIGHT;
        changeColorScheme(preferColor);
      }
    },
    [changeColorScheme, themeMode]
  );
  useMediaQueryListener("(prefers-color-scheme: dark)", preferColorListener);
};
