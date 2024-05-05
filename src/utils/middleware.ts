import { NextMiddleware, NextResponse } from "next/server";

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export const stackMiddlewares = (
  factories: MiddlewareFactory[] = [],
  index = 0
): NextMiddleware => {
  const current = factories[index];

  if (current) {
    const next = stackMiddlewares(factories, index + 1);
    return current(next);
  }

  return () => NextResponse.next();
};

export const isPathnameMatch = (
  pathname: string,
  matchers: RegExp[]
): boolean => {
  return matchers.some((matcher) => pathname.match(matcher));
};
