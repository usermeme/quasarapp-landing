import type { LinkProps } from "@/features/navigation";

export interface NavigationMenuItem {
  label: string;
  href: LinkProps["href"];
}

export interface NavigationMenuSection {
  label: string;
  items: NavigationMenuItem[];
}

export type NavigationMenu = Array<NavigationMenuItem | NavigationMenuSection>;
