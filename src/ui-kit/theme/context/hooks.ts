"use client";

import { useCallback } from "react";
import { useColorScheme as useMuiColorScheme } from "@mui/material";
import { setCookie } from "cookies-next";

import { getConsentPreferences } from "@/features/consent-manager";

import { YEAR_IN_SECONDS } from "@/constants/time";

import type { Mode } from "./@types";
import { THEME_MODE_COOKIES_KEY } from "./constants";

export const useColorScheme = () => {
  const { setMode: muiSetMode, ...api } = useMuiColorScheme();
  const setMode = useCallback(
    (mode: Mode | null) => {
      const consentPreferences = getConsentPreferences();
      if (consentPreferences?.functional) {
        setCookie(THEME_MODE_COOKIES_KEY, mode, { maxAge: YEAR_IN_SECONDS });
      }
      muiSetMode(mode);
    },
    [muiSetMode]
  );

  return { ...api, setMode };
};
