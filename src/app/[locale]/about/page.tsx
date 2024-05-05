import { type FC } from "react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { FeedContainer, FeedSection } from "@/features/feed";

import { SUPPORTED_LOCALES } from "@/services/internationalization";

import { getAboutRenderTreeSections } from "./render-tree";

const AboutPage: FC<NextIntlPageProps> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("about");

  const sections = getAboutRenderTreeSections(t);

  return (
    <FeedContainer>
      {sections.map((section, index) => (
        <FeedSection key={section.id} main={!index} {...section} />
      ))}
    </FeedContainer>
  );
};

export const generateMetadata = async ({
  params: { locale },
}: NextIntlPageProps): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    description: t("about_description"),
    keywords: t("about_keywords"),
    openGraph: {
      description: t("about_description"),
      images: ["/images/quasarappBanner.png"],
      siteName: "QuasarApp",
      title: t("about_title"),
      url: "https://github.com/QuasarApp",
    },
    title: t("about_title"),
  };
};

export const generateStaticParams = (): Array<NextIntlPageProps["params"]> =>
  SUPPORTED_LOCALES.map((locale) => ({ locale }));

export default AboutPage;
