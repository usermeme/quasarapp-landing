"use client";
import { useCallback, useMemo } from "react";

import { Locale } from "@/services/internationalization";

import { useRouter as useBaseRouter } from "./base";
import { navigationEventEmitter } from "./event-emitter";
import { shouldChangeRoute } from "./utils";

export const useRouter: typeof useBaseRouter = () => {
  const {
    back: baseBack,
    forward: baseForward,
    prefetch,
    push: basePush,
    refresh: baseRefresh,
    replace: baseReplace,
  } = useBaseRouter();

  const back: typeof baseBack = useCallback(() => {
    navigationEventEmitter.emit("routeChangeStart");
    baseBack();
  }, [baseBack]);

  const forward: typeof baseBack = useCallback(() => {
    navigationEventEmitter.emit("routeChangeStart");
    baseForward();
  }, [baseForward]);

  const push: typeof basePush = useCallback(
    (href, options) => {
      if (shouldChangeRoute(href, options?.locale as Locale)) {
        navigationEventEmitter.emit("routeChangeStart");
      }
      basePush(href, options);
    },
    [basePush]
  );

  const refresh: typeof baseRefresh = useCallback(() => {
    navigationEventEmitter.emit("routeChangeStart");
    baseRefresh();
  }, [baseRefresh]);

  const replace: typeof baseReplace = useCallback(
    (href, options) => {
      if (shouldChangeRoute(href, options?.locale as Locale)) {
        navigationEventEmitter.emit("routeChangeStart");
      }
      baseReplace(href, options);
    },
    [baseReplace]
  );

  return useMemo(
    () => ({ back, forward, prefetch, push, refresh, replace }),
    [back, forward, push, refresh, replace, prefetch]
  );
};
