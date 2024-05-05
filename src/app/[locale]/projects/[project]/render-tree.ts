import type { FeedSectionData } from "@/features/feed/@types";
import type { TFunc } from "@/features/internationalization";

import cqtDeployerImage from "/public/images/cqtdeployer.png";
import docs from "/public/images/docs.png";
import heartImage from "/public/images/heart.png";
import examplesImage from "/public/images/HeartExamples.png";

import { Project } from "./constants";

export const getProjectRenderTreeSections = (
  project: Project,
  t: TFunc<"project">
) => {
  switch (project) {
    case Project.C_QT_DEPLOYER:
      return getCQtDeployerPageSections(t);
    case Project.HEART:
      return getHeartPageSections(t);
    default:
      return null;
  }
};

const getCQtDeployerPageSections = (t: TFunc<"project">): FeedSectionData[] => [
  {
    actions: [
      {
        href: "https://github.com/QuasarApp/CQtDeployer/blob/main/README.md",
        text: t("c_qt_deployer_about_section_action_1"),
      },
    ],
    dataTree: [
      {
        data: t("c_qt_deployer_about_section_paragraph_1"),
        key: "paragraph_1",
        type: "paragraph",
      },
      {
        data: [
          {
            data: t("c_qt_deployer_about_section_list_item_1"),
            key: "list_item_1",
          },
          {
            data: t("c_qt_deployer_about_section_list_item_2"),
            key: "list_item_2",
          },
          {
            data: t("c_qt_deployer_about_section_list_item_3"),
            key: "list_item_3",
          },
          {
            data: t("c_qt_deployer_about_section_list_item_4"),
            key: "list_item_4",
          },
        ],
        description: t("c_qt_deployer_about_section_list_description"),
        key: "list_1",
        type: "list",
      },
    ],
    headline: t("c_qt_deployer_about_section_headline"),
    id: "about",
    image: cqtDeployerImage,
  },
  {
    actions: [
      {
        href: "https://github.com/QuasarApp/CQtDeployer/wiki/quickguide",
        text: t("c_qt_deployer_deploy_section_action_1"),
      },
    ],
    dataTree: [
      {
        data: t.rich("c_qt_deployer_deploy_section_paragraph_1"),
        key: "paragraph_1",
        type: "paragraph",
      },
      {
        data: t("c_qt_deployer_deploy_section_paragraph_2"),
        key: "paragraph_2",
        type: "paragraph",
      },
      {
        data: t("c_qt_deployer_deploy_section_paragraph_3"),
        key: "paragraph_3",
        type: "paragraph",
      },
      {
        data: t("c_qt_deployer_deploy_section_paragraph_4"),
        key: "paragraph_4",
        type: "paragraph",
      },
      {
        data: t("c_qt_deployer_deploy_section_paragraph_5"),
        key: "paragraph_5",
        type: "paragraph",
      },
      {
        data: t.rich("c_qt_deployer_deploy_section_example"),
        key: "example",
        type: "paragraph",
      },
      {
        data: t.rich("c_qt_deployer_deploy_section_example_1_label"),
        key: "example_1_label",
        type: "paragraph",
      },
      {
        data: t("c_qt_deployer_deploy_section_example_1_code"),
        key: "example_1_code",
        language: "bash",
        type: "code",
      },
      {
        data: t.rich("c_qt_deployer_deploy_section_example_2_label"),
        key: "example_2_label",
        type: "paragraph",
      },
      {
        data: t("c_qt_deployer_deploy_section_example_2_code"),
        key: "example_2_code",
        language: "bash",
        type: "code",
      },
      {
        data: [
          {
            data: t.rich("c_qt_deployer_deploy_section_list_item_1"),
            key: "list_item_1",
          },
          {
            data: t.rich("c_qt_deployer_deploy_section_list_item_2"),
            key: "list_item_2",
          },
          {
            data: t.rich("c_qt_deployer_deploy_section_list_item_3"),
            key: "list_item_3",
          },
          {
            data: t.rich("c_qt_deployer_deploy_section_list_item_4"),
            key: "list_item_4",
          },
          {
            data: t.rich("c_qt_deployer_deploy_section_list_item_5"),
            key: "list_item_5",
          },
        ],
        description: t("c_qt_deployer_deploy_section_list_description"),
        key: "list",
        type: "list",
      },
    ],
    headline: t("c_qt_deployer_deploy_section_headline"),
    id: "deploy",
    image: examplesImage,
  },
  {
    actions: [
      {
        href: "https://github.com/QuasarApp/CQtDeployer/wiki",
        text: t("c_qt_deployer_more_info_section_action_1"),
      },
      {
        href: "https://github.com/QuasarApp/CQtDeployer/releases",
        text: t("c_qt_deployer_more_info_section_action_2"),
      },
    ],
    dataTree: [
      {
        data: t("c_qt_deployer_more_info_section_paragraph_1"),
        key: "paragraph_1",
        type: "paragraph",
      },
    ],
    headline: t("c_qt_deployer_more_info_section_headline"),
    id: "more_info",
    image: cqtDeployerImage,
  },
];

const getHeartPageSections = (t: TFunc<"project">): FeedSectionData[] => [
  {
    actions: [
      {
        href: "https://doc.qt.io/qt-5/sql-driver.html",
        text: t("heart_about_heart_section_action_1"),
      },
    ],
    dataTree: [
      {
        data: [
          {
            data: t.rich("heart_about_heart_section_list_item_1"),
            key: "item_1",
          },
          {
            data: t.rich("heart_about_heart_section_list_item_2"),
            key: "item_2",
          },
        ],
        description: t("heart_about_heart_section_list_description"),
        key: "list",
        type: "list",
      },
      {
        data: t.rich("heart_about_heart_section_paragraph_1"),
        key: "paragraph_1",
        type: "paragraph",
      },
    ],
    headline: t("heart_about_heart_section_headline"),
    id: "about_heart",
    image: heartImage,
  },
  {
    actions: [
      {
        href: "https://github.com/QuasarApp/Heart",
        text: t("heart_examples_section_action_1"),
      },
    ],
    dataTree: [
      {
        data: t.rich("heart_examples_section_paragraph_1"),
        key: "paragraph_1",
        type: "paragraph",
      },
      {
        data: t("heart_examples_section_paragraph_2"),
        key: "paragraph_2",
        type: "paragraph",
      },
    ],
    headline: t("heart_examples_section_headline"),
    id: "examples",
    image: examplesImage,
  },
  {
    actions: [
      {
        href: "https://quasarapp.ddns.net/docs/heart/html/index.html",
        text: t("heart_documentation_section_action_1"),
      },
    ],
    dataTree: [
      {
        data: t("heart_documentation_section_paragraph_1"),
        key: "paragraph_1",
        type: "paragraph",
      },
    ],
    headline: t("heart_documentation_section_headline"),
    id: "docs",
    image: docs,
  },
];
