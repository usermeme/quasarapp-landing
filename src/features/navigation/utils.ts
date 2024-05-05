import { AppPathname, Locale } from "@/services/internationalization";

import type {
  HrefOrHrefWithParams,
  HrefOrUrlObjectWithParams,
} from "@/../node_modules/next-intl/dist/types/src/navigation/shared/utils.d.ts";

import { getPathname } from "./base";

const getPathnameFromWindow = () => {
  const { pathname } = window.location;
  const [locale, ...routes] = pathname.split("/").filter(Boolean) as [
    Locale,
    ...string[]
  ];
  const encodedPathname = `/${routes.join("/")}`;
  return { encodedPathname, locale };
};

export const shouldChangeRoute = (
  href:
    | HrefOrHrefWithParams<AppPathname>
    | HrefOrUrlObjectWithParams<AppPathname>,
  locale?: Locale
): boolean => {
  const { encodedPathname: currentEncoddedPathname, locale: currentLocale } =
    getPathnameFromWindow();

  if (locale && currentLocale !== locale) {
    return true;
  }

  const pathname = getPathname({
    href: href as HrefOrHrefWithParams<AppPathname>,
    locale: locale || currentLocale,
  });

  return currentEncoddedPathname !== pathname;
};
