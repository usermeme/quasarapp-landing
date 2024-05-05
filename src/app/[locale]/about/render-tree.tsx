import { type ReactNode } from "react";

import type { FeedSectionData } from "@/features/feed/";
import { TFunc } from "@/features/internationalization";

import quasarAppImage from "/public/images/quasarapp.png";

export const getAboutRenderTreeSections = (
  t: TFunc<"about">
): FeedSectionData[] => {
  return [
    {
      dataTree: [
        {
          data: t.rich("experience_section_paragraph_1"),
          key: "paragraph_1",
          type: "paragraph",
        },
        {
          data: t.rich("experience_section_paragraph_2"),
          key: "paragraph_2",
          type: "paragraph",
        },
        {
          data: t.rich("experience_section_paragraph_3", {
            link: (chunk: ReactNode): ReactNode => <span>{chunk}</span>,
          }),
          key: "paragraph_3",
          type: "paragraph",
        },
      ],
      headline: t("experience_section_headline"),
      id: "experience",
      image: quasarAppImage,
    },
    {
      dataTree: [
        {
          data: [
            {
              data: t.rich("supported_platforms_section_list_1_item_1"),
              key: "list_item_1",
            },
            {
              data: t.rich("supported_platforms_section_list_1_item_2"),
              key: "list_item_2",
            },
            {
              data: t.rich("supported_platforms_section_list_1_item_3"),
              key: "list_item_3",
            },
            {
              data: t.rich("supported_platforms_section_list_1_item_4"),
              key: "list_item_4",
            },
          ],
          description: t("supported_platforms_section_list_1_description"),
          key: "list_1",
          type: "list",
        },
      ],
      headline: t("supported_platforms_headline"),
      id: "supported_plarforms",
      image: quasarAppImage,
    },
    {
      dataTree: [
        {
          data: [
            {
              data: t.rich("chat_bots_section_list_1_item_1"),
              key: "list_item_1",
            },
            {
              data: t.rich("chat_bots_section_list_1_item_2"),
              key: "list_item_2",
            },
            {
              data: t.rich("chat_bots_section_list_1_item_3"),
              key: "list_item_3",
            },
            {
              data: t.rich("chat_bots_section_list_1_item_4"),
              key: "list_item_4",
            },
          ],
          description: t("chat_bots_section_list_1_description"),
          key: "list_1",
          type: "list",
        },
        {
          data: [
            {
              data: t.rich("chat_bots_section_list_2_item_1"),
              key: "list_item_1",
            },
            {
              data: t.rich("chat_bots_section_list_2_item_2"),
              key: "list_item_2",
            },
            {
              data: t.rich("chat_bots_section_list_2_item_3"),
              key: "list_item_3",
            },
          ],
          description: t("chat_bots_section_list_2_description"),
          key: "list_2",
          type: "list",
        },
      ],
      headline: t("chat_bots_headline"),
      id: "chat_bots",
      image: quasarAppImage,
    },
    {
      dataTree: [
        {
          data: t.rich("ordering_section_paragraph_1"),
          key: "paragraph_1",
          type: "paragraph",
        },
        {
          data: [
            {
              data: t.rich("ordering_section_list_1_item_1"),
              key: "list_item_1",
            },
            {
              data: t.rich("ordering_section_list_1_item_2"),
              key: "list_item_2",
            },
            {
              data: t.rich("ordering_section_list_1_item_3"),
              key: "list_item_3",
            },
          ],
          description: t("ordering_section_list_1_description"),
          key: "list_1",
          type: "list",
        },
        {
          data: [
            {
              data: t.rich("ordering_section_list_2_item_1"),
              key: "list_item_1",
            },
            {
              data: t.rich("ordering_section_list_2_item_2"),
              key: "list_item_2",
            },
          ],
          description: t("ordering_section_list_2_description"),
          key: "list_2",
          type: "list",
        },
        {
          data: t.rich("ordering_section_paragraph_2"),
          key: "paragraph_2",
          type: "paragraph",
        },
      ],
      headline: t("ordering_section_headline"),
      id: "order_project",
      image: quasarAppImage,
    },
  ];
};
