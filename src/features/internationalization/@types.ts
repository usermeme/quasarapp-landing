import { useTranslations } from "next-intl";

export type TFunc<Namespace extends keyof IntlMessages> = ReturnType<
  typeof useTranslations<Namespace>
>;
