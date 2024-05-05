import { type Locale } from "@/services/internationalization";

declare global {
  type NextIntlPageProps<TParams = object> = {
    params: { locale: Locale } & TParams;
  };
}
