"use client";
import { useParams } from "next/navigation";

import { usePathname, useRouter } from "@/features/navigation";

import { Locale, SUPPORTED_LOCALES } from "@/services/internationalization";

import { Button, ButtonGroup } from "@/ui-kit/components";

export const ClientLanguageSelect = () => {
  const { replace } = useRouter();
  // replace url with the same params and pathname
  const params: never = useParams();
  const pathname = usePathname();
  const changeLanguage = (locale: Locale) =>
    replace({ params, pathname }, { locale });

  return (
    <ButtonGroup>
      {SUPPORTED_LOCALES.map((locale) => (
        <Button
          key={locale}
          color="inherit"
          onClick={() => changeLanguage(locale)}
        >
          {locale}
        </Button>
      ))}
    </ButtonGroup>
  );
};
