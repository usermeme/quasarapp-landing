import { Pathnames } from "next-intl/navigation";

import { SUPPORTED_LOCALES } from "./constants";

const encodeRouteSegment = (segment: string) =>
  !segment.match(/^\[/) ? encodeURI(segment) : segment;

const encodeRoute = (route: string) =>
  route.split("/").map(encodeRouteSegment).join("/");

export const encodePathSegments = <
  TPaths extends Pathnames<typeof SUPPORTED_LOCALES>
>(
  paths: TPaths
): TPaths =>
  Object.entries(paths).reduce((acc, [path, routes]) => {
    if (typeof routes === "string") {
      acc[path] = encodeRoute(routes);
      return acc;
    }

    acc[path] = Object.entries(routes).reduce((routes, [lang, route]) => {
      routes[lang] = encodeRoute(route);
      return routes;
    }, {} as Record<string, string>);
    return acc;
  }, {} as Record<string, string | Record<string, string>>) as TPaths;
