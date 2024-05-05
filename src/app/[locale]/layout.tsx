import type { ReactNode } from "react";
import clsx from "clsx";
import { cookies } from "next/headers";
import { unstable_setRequestLocale } from "next-intl/server";

import "normalize.css";
import "@/styles/global.scss";
import "@/styles/root.scss";

import { AppLayout } from "@/features/app-layout";
import { ConsentManager } from "@/features/consent-manager";
import { WithNavigationEvents } from "@/features/navigation";

import { SUPPORTED_LOCALES } from "@/services/internationalization";

import type { Mode } from "@/ui-kit/theme";
import { font, THEME_MODE_COOKIES_KEY, ThemeProvider } from "@/ui-kit/theme";

import styles from "./layout.module.scss";

interface BaseLayoutProps extends NextIntlPageProps {
  children: ReactNode;
}

const BaseLayout = ({ children, params: { locale } }: BaseLayoutProps) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const cookiesList = cookies();
  const defaultMode = (cookiesList.get(THEME_MODE_COOKIES_KEY)?.value ||
    "system") as Mode;

  return (
    <html lang={locale} data-mui-color-scheme={defaultMode}>
      <WithNavigationEvents />
      <ThemeProvider defaultMode={defaultMode}>
        <body className={clsx(font.className, styles.body)}>
          <ConsentManager />
          <AppLayout>{children}</AppLayout>
        </body>
      </ThemeProvider>
    </html>
  );
};

export const generateStaticParams = (): Array<BaseLayoutProps["params"]> => {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
};

export default BaseLayout;
