import { Metadata, MetadataRoute } from "next";

import { pathnames } from "@/services/internationalization";

export default function sitemap(): Array<
  MetadataRoute.Sitemap[number] & { alternates: Metadata["alternates"] }
> {
  return Object.values(pathnames).map((item) => ({
    alternates: { languages: { ru: item.ru } },
    lastModified: new Date(),
    url: item.en,
  }));
}
