import type { FC } from "react";
import { useTranslations } from "next-intl";

import type { ThemeTogglerProps } from "./@types";
import { ClientThemeToggler } from "./ThemeToggler.client";

export const ThemeToggler: FC<ThemeTogglerProps> = ({ defaultMode }) => {
  const t = useTranslations("common");
  return (
    <ClientThemeToggler defaultMode={defaultMode} label={t("dark_theme")} />
  );
};
