"use client";

import { FC, ReactNode, useCallback, useMemo, useState } from "react";

import type { DrawerProps } from "@/ui-kit/components";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  MenuList,
  Stack,
  Toolbar,
} from "@/ui-kit/components";
import { Menu } from "@/ui-kit/icons";

import type {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuSection,
} from "./@types";
import styles from "./AppMenu.module.scss";
import { AppMenuItem, AppMenuSection } from "./AppMenuItem.client";

export const DRAWER_WIDTH = 320;

interface ClientAppMenuProps {
  actions: ReactNode;
  appBarClassName?: string;
  label: string;
  navigationMenu: NavigationMenu;
}

const MobileDrawer: FC<DrawerProps> = (props) => {
  return <Drawer {...props} keepMounted className={styles.mobile_drawer} />;
};

const DesktopDrawer: FC<DrawerProps> = (props) => {
  return (
    <Drawer {...props} variant="permanent" className={styles.desktop_drawer} />
  );
};

export const ClientAppMenu: FC<ClientAppMenuProps> = ({
  actions,
  appBarClassName,
  label,
  navigationMenu,
}) => {
  const [opened, setOpened] = useState(false);

  const openDrawer = useCallback(() => {
    setOpened(true);
  }, []);
  const closeDrawer = useCallback(() => {
    setOpened(false);
  }, []);

  const renderItem = useCallback(
    (item: NavigationMenuItem) => (
      <AppMenuItem item={item} key={item.label} onClick={closeDrawer} />
    ),
    [closeDrawer]
  );

  const renderSection = useCallback(
    (section: NavigationMenuSection) => (
      <AppMenuSection
        key={section.label}
        onItemClick={closeDrawer}
        section={section}
      />
    ),
    [closeDrawer]
  );

  const drawerContent = useMemo(
    () => (
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        width={DRAWER_WIDTH}
      >
        <Toolbar />
        <Divider />

        <MenuList>
          {navigationMenu.map((item) => {
            if ("items" in item) {
              return renderSection(item);
            }
            return renderItem(item);
          })}
        </MenuList>

        <Stack flex={1} margin={4} gap={2}>
          {actions}
        </Stack>
      </Box>
    ),
    [actions, navigationMenu, renderItem, renderSection]
  );

  const drawerProps: DrawerProps = {
    children: drawerContent,
    onClose: closeDrawer,
    open: opened,
  };
  return (
    <>
      <AppBar
        className={appBarClassName}
        component="div"
        elevation={0}
        position="static"
        sx={{ width: "auto" }}
        color="primary"
      >
        <Toolbar>
          <IconButton
            aria-label={label}
            color="inherit"
            edge="start"
            onClick={openDrawer}
            size="large"
            sx={{ mr: -4 }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MobileDrawer {...drawerProps} />
      <DesktopDrawer {...drawerProps} />
    </>
  );
};
