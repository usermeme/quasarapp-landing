"use client";

import { type FC, useState } from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";

import { getPathname, Link, usePathname } from "@/features/navigation";

import { AppPathname, Locale } from "@/services/internationalization";

import {
  BoxProps,
  Collapse,
  List,
  ListItemText,
  MenuItem,
} from "@/ui-kit/components";
import { ExpandLess, ExpandMore } from "@/ui-kit/icons";

import type { HrefOrHrefWithParams } from "@/../node_modules/next-intl/dist/types/src/navigation/shared/utils.d.ts";

import type { NavigationMenuItem, NavigationMenuSection } from "./@types";

interface AppMenuItemProps {
  item: NavigationMenuItem;
  onClick: () => void;
  sx?: BoxProps["sx"];
}
export const AppMenuItem: FC<AppMenuItemProps> = ({ item, onClick, sx }) => {
  const locale = useLocale() as Locale;

  const params: never = useParams();
  const pathname = usePathname();

  const selected =
    getPathname({ href: { params, pathname }, locale }) ===
    getPathname({
      href: item.href as HrefOrHrefWithParams<AppPathname>,
      locale,
    });

  return (
    <MenuItem
      component={Link}
      href={item.href}
      key={item.label}
      onClick={onClick}
      selected={selected}
      sx={sx}
    >
      <ListItemText>{item.label}</ListItemText>
    </MenuItem>
  );
};

interface AppMenuSectionProps {
  section: NavigationMenuSection;
  onItemClick: () => void;
}
export const AppMenuSection: FC<AppMenuSectionProps> = ({
  onItemClick,
  section,
}) => {
  const [opened, setOpened] = useState(false);
  const toggleOpened = () => setOpened((prevValue) => !prevValue);

  return (
    <>
      <MenuItem onClick={toggleOpened}>
        <ListItemText>{section.label}</ListItemText>
        {opened ? <ExpandLess /> : <ExpandMore />}
      </MenuItem>
      <Collapse in={opened} timeout="auto">
        <List component="div" disablePadding>
          {section.items.map((item) => (
            <AppMenuItem
              item={item}
              key={item.label}
              onClick={onItemClick}
              sx={{ pl: 8 }}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};
