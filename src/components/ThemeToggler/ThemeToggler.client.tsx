"use client";

import { FC, useEffect, useState } from "react";

import { Stack, Switch, Typography } from "@/ui-kit/components";
import { useColorScheme } from "@/ui-kit/theme";

import type { ClientThemeTogglerProps } from "./@types";

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
    <Stack sx={{ alignItems: "center", flexDirection: "row" }}>
      <Switch checked={checked} onChange={onToggle} />
      <Typography>{label}</Typography>
    </Stack>
  );
};
