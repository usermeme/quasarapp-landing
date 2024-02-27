import type { Mode } from "@/ui-kit/theme";

export interface ThemeTogglerProps {
  defaultMode: Mode;
}

export interface ClientThemeTogglerProps extends ThemeTogglerProps {
  label: string;
}
