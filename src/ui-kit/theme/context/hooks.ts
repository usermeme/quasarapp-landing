"use client";

import { useCallback } from "react";
import { useColorScheme as useMuiColorScheme } from "@mui/material";
import { setCookie } from "cookies-next";

import type { Mode } from "./@types";
import { THEME_MODE_COOKIES_KEY } from "./constants";

export const useColorScheme = () => {
  const { setMode: muiSetMode, ...api } = useMuiColorScheme();
  const setMode = useCallback(
    (mode: Mode | null) => {
      setCookie(THEME_MODE_COOKIES_KEY, mode);
      muiSetMode(mode);
    },
    [muiSetMode]
  );

  return { ...api, setMode };
};
