"use server";

import { cookies } from "next/headers";

import { ColorScheme, ThemeMode } from "@/ui-kit/theme";

import { COLOR_SCHEME_COOKIE_KEY, THEME_MODE_COOKIE_KEY } from "./constants";

export const onColorSchemeChange = (colorScheme: ColorScheme) => {
  cookies().set(COLOR_SCHEME_COOKIE_KEY, colorScheme);
};

export const onThemeModeChange = (themeMode: ThemeMode) => {
  cookies().set(THEME_MODE_COOKIE_KEY, themeMode);
};
