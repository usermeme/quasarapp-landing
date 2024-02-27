import type { TFunc } from "@/features/internationalization";
import { richComponents } from "@/features/internationalization";

import type { PageSection } from "../@types";

export const getMainPageSections = (t: TFunc<"dashboard">): PageSection[] => [
  {
    dataTree: [
      {
        data: t.rich("quasar_app_group_section_paragraph_1", richComponents),
        key: "paragraph_1",
        type: "paragraph",
      },
      {
        data: t("quasar_app_group_section_paragraph_2"),
        key: "paragraph_2",
        type: "paragraph",
      },
      {
        data: t("quasar_app_group_section_paragraph_3"),
        key: "paragraph_3",
        type: "paragraph",
      },
      {
        data: t("quasar_app_group_section_paragraph_4"),
        key: "paragraph_4",
        type: "paragraph",
      },
    ],
    headline: t("quasar_app_group_section_headline"),
    imageUrl: "/public/images/quasarapp.png",
  },
  {
    dataTree: [
      {
        data: [
          { data: t("supported_platforms_section_list_item_1"), key: "item_1" },
          { data: t("supported_platforms_section_list_item_2"), key: "item_2" },
          { data: t("supported_platforms_section_list_item_3"), key: "item_3" },
          { data: t("supported_platforms_section_list_item_4"), key: "item_4" },
        ],
        description: t("supported_platforms_section_list_description"),
        key: "list",
        type: "list",
      },
    ],
    headline: t("supported_platforms_section_headline"),
    imageUrl: "/public/images/crossplatforms.png",
  },
  {
    dataTree: [
      {
        data: t("order_project_section_paragraph_1"),
        key: "paragraph_1",
        type: "paragraph",
      },
      {
        data: t("order_project_section_paragraph_2"),
        key: "paragraph_2",
        type: "paragraph",
      },
      {
        data: t("order_project_section_paragraph_3"),
        key: "paragraph_3",
        type: "paragraph",
      },
      {
        data: t("order_project_section_paragraph_4"),
        key: "paragraph_4",
        type: "paragraph",
      },
      {
        data: t("order_project_section_paragraph_5"),
        key: "paragraph_5",
        type: "paragraph",
      },
    ],
    headline: t("order_project_section_headline"),
    imageUrl: "/public/images/icongoldcorp.png",
  },
];
