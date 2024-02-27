import type { TFunc } from "@/features/internationalization";
import { richComponents } from "@/features/internationalization";

import type { PageSection } from "../@types";

export const getCQtDeployerPageSections = (
  t: TFunc<"c_qt_deployer">
): PageSection[] => [
  {
    actions: [
      {
        href: "https://github.com/QuasarApp/CQtDeployer/blob/main/README.md",
        text: t("c_qt_deployer_section_action_1"),
      },
    ],
    dataTree: [
      {
        data: t("c_qt_deployer_section_paragraph_1"),
        key: "paragraph_1",
        type: "paragraph",
      },
      {
        data: [
          { data: t("c_qt_deployer_section_list_item_1"), key: "list_item_1" },
          { data: t("c_qt_deployer_section_list_item_2"), key: "list_item_2" },
          { data: t("c_qt_deployer_section_list_item_3"), key: "list_item_3" },
          { data: t("c_qt_deployer_section_list_item_4"), key: "list_item_4" },
        ],
        description: t("c_qt_deployer_section_list_description"),
        key: "list_1",
        type: "list",
      },
    ],
    headline: t("c_qt_deployer_section_headline"),
    imageUrl: "/public/images/cqtdeployer.png",
  },
  {
    actions: [
      {
        href: "https://github.com/QuasarApp/CQtDeployer/wiki/quickguide",
        text: t("deploy_section_action_1"),
      },
    ],
    dataTree: [
      {
        data: t("deploy_section_paragraph_1"),
        key: "paragraph_1",
        type: "paragraph",
      },
      {
        data: t("deploy_section_paragraph_2"),
        key: "paragraph_2",
        type: "paragraph",
      },
      {
        data: t("deploy_section_paragraph_3"),
        key: "paragraph_3",
        type: "paragraph",
      },
      {
        data: t("deploy_section_paragraph_4"),
        key: "paragraph_4",
        type: "paragraph",
      },
      {
        data: t("deploy_section_paragraph_5"),
        key: "paragraph_5",
        type: "paragraph",
      },
      {
        data: t.rich("deploy_section_example", richComponents),
        key: "example",
        type: "paragraph",
      },
      {
        data: t.rich("deploy_section_example_1_label", richComponents),
        key: "example_1_label",
        type: "paragraph",
      },
      {
        data: t("deploy_section_example_1_code"),
        key: "example_1_code",
        language: "bash",
        type: "code",
      },
      {
        data: t.rich("deploy_section_example_2_label", richComponents),
        key: "example_2_label",
        type: "paragraph",
      },
      {
        data: t("deploy_section_example_2_code"),
        key: "example_2_code",
        language: "bash",
        type: "code",
      },
      {
        data: [
          { data: t("deploy_section_list_item_1"), key: "list_item_1" },
          { data: t("deploy_section_list_item_2"), key: "list_item_2" },
          { data: t("deploy_section_list_item_3"), key: "list_item_3" },
          { data: t("deploy_section_list_item_4"), key: "list_item_4" },
          { data: t("deploy_section_list_item_5"), key: "list_item_5" },
        ],
        description: t("deploy_section_list_description"),
        key: "list",
        type: "list",
      },
    ],
    headline: t("deploy_section_headline"),
    imageUrl: "/public/images/HeartExamples.png",
  },
  {
    actions: [
      {
        href: "https://github.com/QuasarApp/CQtDeployer/wiki",
        text: t("more_info_section_action_1"),
      },
      {
        href: "https://github.com/QuasarApp/CQtDeployer/releases",
        text: t("more_info_section_action_2"),
      },
    ],
    dataTree: [
      {
        data: t("more_info_section_paragraph_1"),
        key: "paragraph_1",
        type: "paragraph",
      },
    ],
    headline: t("more_info_section_headline"),
    imageUrl: "/public/images/cqtdeployer.png",
  },
];
