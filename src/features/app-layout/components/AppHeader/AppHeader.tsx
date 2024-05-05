import { Suspense } from "react";

import { LanguageSelect } from "@/features/internationalization";

import { ThemeToggler } from "@/components/ThemeToggler";

import { AppBar, Stack, Toolbar } from "@/ui-kit/components";
interface AppHeaderProps {
  className?: string;
}
export const AppHeader = ({ className }: AppHeaderProps) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      className={className}
      sx={{ flexGrow: 1, width: "auto" }}
      color="primary"
    >
      <Toolbar
        component={Stack}
        direction="row"
        justifyContent="flex-end"
        spacing={4}
      >
        <LanguageSelect />
        <Suspense>
          <ThemeToggler />
        </Suspense>
      </Toolbar>
    </AppBar>
  );
};
