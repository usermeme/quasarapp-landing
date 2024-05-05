"use client";

import { FC, useEffect, useState } from "react";

import { FormControlLabel, Switch } from "@/ui-kit/components";
import { LightMode, NightsStay } from "@/ui-kit/icons";
import { Mode, useColorScheme } from "@/ui-kit/theme";

import styles from "./ThemeToggler.module.scss";

interface ClientThemeTogglerProps {
  label: string;
  defaultMode: Mode;
}

export const ClientThemeToggler: FC<ClientThemeTogglerProps> = ({
  defaultMode,
  label,
}) => {
  const { mode, setMode, systemMode } = useColorScheme();

  const [checked, setChecked] = useState(defaultMode === "dark");

  const onToggle = () => {
    setMode(checked ? "light" : "dark");
  };

  useEffect(() => {
    setChecked(mode === "dark" || (mode === "system" && systemMode === "dark"));
  }, [mode, systemMode]);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onToggle}
          icon={<LightMode className={styles.thumb} />}
          checkedIcon={<NightsStay className={styles.thumb} />}
        />
      }
      label={label}
    />
  );
};
