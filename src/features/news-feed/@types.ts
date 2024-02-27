import { LinkProps } from "next/link";

import { RenderTreeProps } from "@/components/RenderTree/@types";

export interface PageMetaInformation {
  alternate: string;
  canonical: string;
  description: string;
  image: string;
  robots: "noindex, nofollow" | "index, follow";
  title: string;
}

export interface PageSection {
  headline: string;
  dataTree: RenderTreeProps["data"];
  actions?: Array<{ text: string; href: LinkProps["href"] }>;
  imageUrl: string;
}
