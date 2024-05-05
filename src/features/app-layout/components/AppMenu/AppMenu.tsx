import { FC, Suspense } from "react";
import { useTranslations } from "next-intl";

import { OrderProjectWizard } from "@/features/order-project";

import { ClientAppMenu } from "./AppMenu.client";
import { useNavigationMenu } from "./hooks";

interface AppMenuProps {
  appBarClassName?: string;
}
export const AppMenu: FC<AppMenuProps> = ({ appBarClassName }) => {
  const t = useTranslations("navigation");
  const navigationMenu = useNavigationMenu();
  const label = t("menu");

  return (
    <ClientAppMenu
      actions={
        <Suspense>
          <OrderProjectWizard />
        </Suspense>
      }
      appBarClassName={appBarClassName}
      navigationMenu={navigationMenu}
      label={label}
    />
  );
};
