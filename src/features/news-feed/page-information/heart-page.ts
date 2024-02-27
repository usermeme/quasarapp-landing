import type { TFunc } from "@/features/internationalization";
import { richComponents } from "@/features/internationalization";

import type { PageSection } from "../@types";

export const getHeartPageSections = (t: TFunc<"heart">): PageSection[] => [
  {
    actions: [
      {
        href: "https://doc.qt.io/qt-5/sql-driver.html",
        text: t("about_heart_section_action_1"),
      },
    ],
    dataTree: [
      {
        data: t.rich("about_heart_section_paragraph_1", richComponents),
        key: "paragraph_1",
        type: "paragraph",
      },
      {
        data: [
          { data: t("about_heart_section_list_item_1"), key: "item_1" },
          { data: t("about_heart_section_list_item_2"), key: "item_2" },
          { data: t("about_heart_section_list_item_3"), key: "item_3" },
        ],
        description: t("about_heart_section_list_description"),
        key: "list",
        type: "list",
      },
      {
        data: t("about_heart_section_paragraph_2"),
        key: "paragraph_2",
        type: "paragraph",
      },
    ],
    headline: t("about_heart_section_headline"),
    imageUrl: "/public/images/heart.png",
  },
  {
    actions: [
      {
        href: "https://github.com/QuasarApp/Heart",
        text: t("examples_section_action_1"),
      },
    ],
    dataTree: [
      {
        data: t.rich("examples_section_paragraph_1", richComponents),
        key: "paragraph_1",
        type: "paragraph",
      },
      {
        data: t("examples_section_paragraph_2"),
        key: "paragraph_2",
        type: "paragraph",
      },
    ],
    headline: t("examples_section_headline"),
    imageUrl: "/public/images/HeartExamples.png",
  },
  {
    actions: [
      {
        href: "https://quasarapp.ddns.net/docs/heart/html/index.html",
        text: t("documentation_section_action_1"),
      },
    ],
    dataTree: [
      {
        data: t("documentation_section_paragraph_1"),
        key: "paragraph_1",
        type: "paragraph",
      },
    ],
    headline: t("documentation_section_headline"),
    imageUrl: "/public/images/docs.png",
  },
];
