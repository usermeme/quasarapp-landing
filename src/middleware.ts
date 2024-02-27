import createMiddleware from "next-intl/middleware";

import {
  DEFUALT_LOCALE,
  localePrefix,
  SUPPORTED_LOCALES,
} from "@/services/internationalization";

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: DEFUALT_LOCALE,

  localePrefix,
  // A list of all locales that are supported
  locales: SUPPORTED_LOCALES,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    // TODO: use here SUPPORTED_LOCALES after fix the issue
    // https://github.com/vercel/next.js/issues/56398
    "/(ru|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
