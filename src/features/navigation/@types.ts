import { ComponentProps } from "react";

import { AppPathname } from "@/services/internationalization";

import { Link as BaseLink } from "./base";

export type LinkProps = ComponentProps<typeof BaseLink<AppPathname>>;

export type RouteEventType = "routeChangeStart" | "routeChangeComplete";
