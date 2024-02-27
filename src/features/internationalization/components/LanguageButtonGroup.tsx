import { usePathname, useRouter } from "@/features/navigation";

import { Locale, SUPPORTED_LOCALES } from "@/services/internationalization";

import { Button, ButtonGroup } from "@/ui-kit/components";

export const LanguageButtonGroup = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const changeLanguage = (locale: Locale) => push(pathname, { locale });

  return (
    <ButtonGroup>
      {SUPPORTED_LOCALES.map((locale) => (
        <Button key={locale} onClick={() => changeLanguage(locale)} />
      ))}
    </ButtonGroup>
  );
};
