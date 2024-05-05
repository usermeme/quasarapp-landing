import { useTranslations } from "next-intl";

import { ROUTES } from "@/features/navigation";

import { NavigationMenu } from "./@types";

export const useNavigationMenu = (): NavigationMenu => {
  const t = useTranslations("navigation");

  return [
    {
      href: ROUTES.ABOUT,
      label: t("about"),
    },
    {
      items: [
        {
          href: {
            params: { project: "c-qt-deployer" },
            pathname: ROUTES.PROJECT,
          },
          label: t("c_qt_deployer"),
        },
        {
          href: {
            params: { project: "heart" },
            pathname: ROUTES.PROJECT,
          },
          label: t("heart"),
        },
      ],
      label: t("projects"),
    },
    {
      href: ROUTES.CONTACTS,
      label: t("contacts"),
    },
  ];
};
