import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import type { Locale } from "./@types";
import { SUPPORTED_LOCALES } from "./constants";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!SUPPORTED_LOCALES.includes(locale as Locale)) notFound();
  const { messages } = await import(`../messages/${locale}/index.ts`);
  return { messages };
});
