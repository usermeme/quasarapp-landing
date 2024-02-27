import { ReactNode } from "react";
import { Menu } from "@mui/icons-material";
import clsx from "clsx";
import { cookies } from "next/headers";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import "normalize.css";

import { Locale, SUPPORTED_LOCALES } from "@/services/internationalization";

import { ThemeToggler } from "@/components/ThemeToggler";

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@/ui-kit/components";
import type { Mode } from "@/ui-kit/theme";
import { font, THEME_MODE_COOKIES_KEY, ThemeProvider } from "@/ui-kit/theme";

import styles from "./layout.module.scss";

interface LayoutHeaderProps {
  defaultMode: Mode;
}
const LayoutHeader = ({ defaultMode }: LayoutHeaderProps) => {
  const t = useTranslations("navigation");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label={t("menu")}
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box sx={{ justifySelf: "flex-end" }}>
            <ThemeToggler defaultMode={defaultMode} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: Locale };
}

const LocaleLayout = ({ children, params: { locale } }: LocaleLayoutProps) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const cookiesList = cookies();
  const defaultMode = (cookiesList.get(THEME_MODE_COOKIES_KEY)?.value ||
    "system") as Mode;

  return (
    <html lang={locale} data-mui-color-scheme={defaultMode}>
      <ThemeProvider defaultMode={defaultMode}>
        <body className={clsx(font.className, styles.body)}>
          <LayoutHeader defaultMode={defaultMode} />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
};

export const generateStaticParams = (): Array<LocaleLayoutProps["params"]> => {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
};

export const generateMetadata = async ({
  params: { locale },
}: Omit<LocaleLayoutProps, "children">) => {
  const t = await getTranslations({ locale });

  return {
    title: t("dashboard.quasar_app_group"),
  };
};

export default LocaleLayout;
