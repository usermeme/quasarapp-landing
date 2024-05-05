import type { FeedSectionData } from "@/features/feed/";
import { TFunc } from "@/features/internationalization";

export const getCookiesPolicyRenderTreeSections = (
  t: TFunc<"cookies">
): FeedSectionData[] => {
  return [
    {
      dataTree: [
        {
          data: t("section_1_paragraph"),
          key: "paragraph_1",
          type: "paragraph",
        },
      ],
      headline: t("section_1_headline"),
      id: "section_1",
    },
    {
      dataTree: [
        {
          data: t("section_2_paragraph"),
          key: "paragraph_2",
          type: "paragraph",
        },
      ],
      headline: t("section_2_headline"),
      id: "section_2",
    },
    {
      dataTree: [
        {
          data: t("section_3_paragraph"),
          key: "paragraph_3",
          type: "paragraph",
        },
      ],
      headline: t("section_3_headline"),
      id: "section_3",
    },
    {
      dataTree: [
        {
          data: t("section_4_paragraph"),
          key: "paragraph_4",
          type: "paragraph",
        },
      ],
      headline: t("section_4_headline"),
      id: "section_4",
    },
    {
      dataTree: [
        {
          data: t("section_5_paragraph"),
          key: "paragraph_1",
          type: "paragraph",
        },
      ],
      headline: t("section_5_headline"),
      id: "section_5",
    },
    {
      dataTree: [
        {
          data: t("section_6_paragraph"),
          key: "paragraph_6",
          type: "paragraph",
        },
      ],
      headline: t("section_6_headline"),
      id: "section_6",
    },
    {
      dataTree: [
        {
          data: t.rich("section_7_paragraph"),
          key: "paragraph_7",
          type: "paragraph",
        },
      ],
      headline: t("section_7_headline"),
      id: "section_7",
    },
  ];
};
