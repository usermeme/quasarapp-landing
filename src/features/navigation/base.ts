import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

import {
  localePrefix,
  pathnames,
  SUPPORTED_LOCALES,
} from "@/services/internationalization";

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    localePrefix,
    locales: SUPPORTED_LOCALES,
    pathnames: pathnames,
  });
