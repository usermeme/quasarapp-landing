import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { Link } from "@/ui-kit/components";

import { COMPANY_EMAIL } from "@/constants/contacts";

import type { Locale } from "./@types";
import { SUPPORTED_LOCALES } from "./constants";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!SUPPORTED_LOCALES.includes(locale as Locale)) notFound();
  const { messages } = await import(`../../messages/${locale}/index.ts`);
  return {
    defaultTranslationValues: {
      b: (chunk) => <b>{chunk}</b>,
      email: () => (
        <Link href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</Link>
      ),
      link: (chunk) => {
        const chunkItem = Array.isArray(chunk) ? chunk[0] : chunk;
        const href = typeof chunkItem === "string" ? chunkItem : undefined;
        return (
          <Link href={href} target="_blank">
            {chunk}
          </Link>
        );
      },
    },
    messages,
  };
});
