import { type FC } from "react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { FeedContainer, FeedSection } from "@/features/feed";

import { SUPPORTED_LOCALES } from "@/services/internationalization";

import { getCookiesPolicyRenderTreeSections } from "./render-tree";

const CookiesPolicyPage: FC<NextIntlPageProps> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("cookies");

  const sections = getCookiesPolicyRenderTreeSections(t);

  return (
    <FeedContainer>
      {sections.map((section, index) => (
        <FeedSection flattened key={section.id} main={!index} {...section} />
      ))}
    </FeedContainer>
  );
};

export const generateStaticParams = (): Array<NextIntlPageProps["params"]> =>
  SUPPORTED_LOCALES.map((locale) => ({ locale }));

export default CookiesPolicyPage;
