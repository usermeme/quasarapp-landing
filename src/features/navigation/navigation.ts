import { createSharedPathnamesNavigation } from "next-intl/navigation";

import {
  localePrefix,
  SUPPORTED_LOCALES,
} from "@/services/internationalization";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    localePrefix,
    locales: SUPPORTED_LOCALES,
  });
