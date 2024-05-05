import { Pathnames } from "next-intl/navigation";

import { SUPPORTED_LOCALES } from "./constants";
import { encodePathSegments } from "./utils";

export const pathnames = encodePathSegments({
  "/about": {
    en: "/about",
    ru: "/о-нас",
  },
  "/contacts": {
    en: "/contacts",
    ru: "/контакты",
  },
  "/cookies-policy": {
    en: "/cookies-policy",
    ru: "/политика-использования-файлов-cookie",
  },
  "/projects/[project]": {
    en: "/projects/[project]",
    ru: "/проекты/[project]",
  },
} satisfies Pathnames<typeof SUPPORTED_LOCALES>);

// Use the default: `always`
export const localePrefix = "always";

export type AppPathname = keyof typeof pathnames;
