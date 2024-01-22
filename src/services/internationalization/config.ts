import { Pathnames } from "next-intl/navigation";

import { SUPPORTED_LOCALES } from "./constants";

export const pathnames = {
  "/main": {
    en: "/main",
    ru: "/главная",
  },
} satisfies Pathnames<typeof SUPPORTED_LOCALES>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
