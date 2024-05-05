import { type FC } from "react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { ContactsForm } from "@/features/contacts";
import { FeedContainer, FeedSection } from "@/features/feed";

import { SUPPORTED_LOCALES } from "@/services/internationalization";

import { SectionCard } from "@/components/SectionCard";

// import { SectionCard } from "@/components/SectionCard";
import { getContactsRenderTreeSections } from "./render-tree";

const ContactsPage: FC<NextIntlPageProps> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("contacts");

  const sections = getContactsRenderTreeSections(t);

  return (
    <FeedContainer>
      {sections.map((section, index) => (
        <FeedSection key={section.id} flattened main={!index} {...section} />
      ))}
      <SectionCard flattened>
        <ContactsForm />
      </SectionCard>
    </FeedContainer>
  );
};

export const generateStaticParams = (): Array<NextIntlPageProps["params"]> =>
  SUPPORTED_LOCALES.map((locale) => ({ locale }));

export default ContactsPage;
