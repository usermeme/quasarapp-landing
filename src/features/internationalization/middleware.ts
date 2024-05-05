import createMiddleware from "next-intl/middleware";
import { pathToRegexp } from "path-to-regexp";

import {
  DEFUALT_LOCALE,
  pathnames,
  SUPPORTED_LOCALES,
} from "@/services/internationalization";

import { isPathnameMatch, MiddlewareFactory } from "@/utils/middleware";

const matcher = [
  // Enable a redirect to a matching locale at the root
  pathToRegexp("/"),
  // Set a cookie to remember the previous locale for
  // all requests that have a locale prefix
  pathToRegexp(`/(${SUPPORTED_LOCALES.join("|")})/:path*`),
  // Enable redirects that add missing locales
  // (e.g. `/pathnames` -> `/en/pathnames`)
  pathToRegexp("/((?!_next|_vercel|.*\\..*).*)"),
];

const handleI18nRouting = createMiddleware({
  defaultLocale: DEFUALT_LOCALE,
  locales: SUPPORTED_LOCALES,
  pathnames: pathnames,
});

export const withI18n: MiddlewareFactory = (nextMiddleware) => {
  return async (request, nextFetchEvent) => {
    if (isPathnameMatch(request.nextUrl.pathname, matcher)) {
      const reponse = await handleI18nRouting(request);
      return reponse;
    }
    return nextMiddleware(request, nextFetchEvent);
  };
};
