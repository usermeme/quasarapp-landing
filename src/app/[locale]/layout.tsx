import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { ThemeWrapper } from "@/features/theme";

import { Locale, SUPPORTED_LOCALES } from "@/services/internationalization";

const inter = Inter({ subsets: ["latin"] });

type LocaleLayoutProps = {
  children: ReactNode;
  params: { locale: Locale };
};

export function generateStaticParams(): Array<LocaleLayoutProps["params"]> {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<LocaleLayoutProps, "children">) {
  const t = await getTranslations({ locale });

  return {
    title: t("dashboard.quasar_app_group"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inter.className, "flex h-full flex-col")}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeWrapper>{children}</ThemeWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
