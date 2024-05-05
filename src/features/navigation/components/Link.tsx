"use client";
import { forwardRef, MouseEvent } from "react";

import { Link as UiKitLink } from "@/ui-kit/components";

import { LinkProps } from "../@types";
import { Link as BaseLink } from "../base";
import { navigationEventEmitter } from "../event-emitter";
import { shouldChangeRoute } from "../utils";

// https://github.com/vercel/next.js/blob/400ccf7b1c802c94127d8d8e0d5e9bdf9aab270c/packages/next/src/client/link.tsx#L169
const isModifiedEvent = (event: MouseEvent): boolean => {
  const eventTarget = event.currentTarget as HTMLAnchorElement | SVGAElement;
  const target = eventTarget.getAttribute("target");
  return (
    (target && target !== "_self") ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey || // triggers resource download
    (event.nativeEvent && event.nativeEvent.button === 2)
  );
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  props,
  ref
) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <UiKitLink
      {...props}
      component={BaseLink}
      ref={ref}
      onClick={(
        event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
      ) => {
        if (
          !isModifiedEvent(event) &&
          shouldChangeRoute(props.href, props.locale)
        ) {
          navigationEventEmitter.emit("routeChangeStart");
        }
        if (props.onClick) props.onClick(event);
      }}
    />
  );
});
