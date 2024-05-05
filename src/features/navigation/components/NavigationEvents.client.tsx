"use client";
import { type FC, useEffect } from "react";
/**
 * usePathname should be from next/navigation not from createLocalizedPathnamesNavigation
 * if use from createLocalizedPathnamesNavigation
 * the change language will not trigger the event
 */
import { usePathname, useSearchParams } from "next/navigation";

import { navigationEventEmitter } from "../event-emitter";

export const ClientWithNavigationEvents: FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    navigationEventEmitter.emit("routeChangeComplete");
  }, [pathname, searchParams]);

  return null;
};
