import type { FeedSectionData } from "@/features/feed/";
import { TFunc } from "@/features/internationalization";

export const getContactsRenderTreeSections = (
  t: TFunc<"contacts">
): FeedSectionData[] => {
  return [
    {
      dataTree: [
        {
          data: t("contact_us_paragraph"),
          key: "paragraph",
          type: "paragraph",
        },
        {
          data: [
            {
              data: t.rich("welcome_section_list_item_1"),
              key: "list_item_1",
            },
            {
              data: t.rich("welcome_section_list_item_2"),
              key: "list_item_2",
            },
            {
              data: t.rich("welcome_section_list_item_3"),
              key: "list_item_3",
            },
            {
              data: t.rich("welcome_section_list_item_4"),
              key: "list_item_4",
            },
          ],
          description: t("welcome_section_list_description"),
          key: "list",
          type: "list",
        },
      ],
      headline: t("contact_us_headline"),
      id: "contact_us",
    },
  ];
};
