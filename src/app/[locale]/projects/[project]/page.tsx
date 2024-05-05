import { type FC } from "react";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { FeedContainer, FeedSection } from "@/features/feed";

import { SUPPORTED_LOCALES } from "@/services/internationalization";

import { Project } from "./constants";
import { getProjectRenderTreeSections } from "./render-tree";

type ProjectPageProps = NextIntlPageProps<{ project: Project }>;

const ProjectPage: FC<ProjectPageProps> = ({ params: { locale, project } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("project");
  const sections = getProjectRenderTreeSections(project, t);

  if (!sections) {
    return notFound();
  }

  return (
    <FeedContainer>
      {sections.map((section, index) => (
        <FeedSection key={section.id} main={!index} {...section} />
      ))}
    </FeedContainer>
  );
};

export const generateStaticParams = (): Array<ProjectPageProps["params"]> =>
  Object.values(Project).reduce(
    (acc, project) => [
      ...acc,
      ...SUPPORTED_LOCALES.map((locale) => ({ locale, project })),
    ],
    [] as Array<ProjectPageProps["params"]>
  );

export default ProjectPage;
