import type { FC } from "react";
import { LinkProps } from "next/link";
import { useTranslations } from "next-intl";

import { Menu, MenuItem } from "@/ui-kit/components";

import { Link } from "../navigation";

interface NavigationMenuIten {
  labelKey: keyof IntlMessages["navigation"];
  href: LinkProps["href"];
}
interface NavigationMenuProps {
  data: NavigationMenuIten[];
}
export const NavigationMenu: FC<NavigationMenuProps> = ({ data }) => {
  const t = useTranslations("navigation");

  return (
    <Menu>
      {data.map((item) => (
        <MenuItem key={item.labelKey} href={item.href} component={Link}>
          {t(item.labelKey)}
        </MenuItem>
      ))}
    </Menu>
  );
};
