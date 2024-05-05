import { StaticImageData } from "next/image";

import { RenderTreeProps } from "@/components/RenderTree/@types";

export interface PageMetaInformation {
  alternate: string;
  canonical: string;
  description: string;
  image: string;
  robots: "noindex, nofollow" | "index, follow";
  title: string;
}

export interface FeedSectionData {
  actions?: Array<{ text: string; href: string }>;
  dataTree: RenderTreeProps["data"];
  headline: string;
  id: string;
  image?: StaticImageData;
  main?: boolean;
}
