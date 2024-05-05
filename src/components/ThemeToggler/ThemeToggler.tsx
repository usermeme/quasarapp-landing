import { type FC } from "react";
import { cookies } from "next/headers";
import { useTranslations } from "next-intl";

import { Mode, THEME_MODE_COOKIES_KEY } from "@/ui-kit/theme";

import { ClientThemeToggler } from "./ThemeToggler.client";

export const ThemeToggler: FC = () => {
  const t = useTranslations("common");

  const cookiesList = cookies();
  const defaultMode = (cookiesList.get(THEME_MODE_COOKIES_KEY)?.value ||
    "system") as Mode;

  return (
    <ClientThemeToggler defaultMode={defaultMode} label={t("dark_theme")} />
  );
};
