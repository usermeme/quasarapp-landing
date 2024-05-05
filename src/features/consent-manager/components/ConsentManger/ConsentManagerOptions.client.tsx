"use client";

import { type FC, useCallback, useState } from "react";
import { useTranslations } from "next-intl";

import { Nullable } from "@/types/helpers";

import {
  Box,
  Button,
  ButtonProps,
  FocusTrap,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
} from "@/ui-kit/components";

import { Consent, CONSENT_OPTIONS, REQUIRED_CONSENTS } from "../../constants";
import { getConsentPreferences } from "../../utils";

const getOptionLabelId = (key: Consent) => `option-label-id-${key}`;
const OPTIONS_MENU_BUTTON_ID = "consent-manager-options-button-id";
const OPTIONS_MENU_ID = "consent-manager-options-id";

interface ConsentManagerOptions {
  acceptSelected: (partialConsents: Partial<Record<Consent, boolean>>) => void;
}
const ConsentManagerOptions: FC<ConsentManagerOptions> = ({
  acceptSelected,
}) => {
  const t = useTranslations("consent_manager");
  const [selectedPreferences, setSelectedPreferences] = useState<
    Partial<Record<Consent, boolean>>
  >(
    () =>
      getConsentPreferences() || {
        [Consent.FUNCTIONAL]: true,
        [Consent.ANALYTICS]: false,
      }
  );

  const togglePreference = useCallback((key: Consent) => {
    setSelectedPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  return (
    <>
      {CONSENT_OPTIONS.map(({ Icon, descriptionKey, key, titleKey }) => (
        <MenuItem
          sx={{ maxWidth: 428 }}
          disabled={REQUIRED_CONSENTS.includes(key)}
          key={key}
          onClick={(event) => {
            event.preventDefault();
            togglePreference(key);
          }}
        >
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText
            primary={t(titleKey)}
            primaryTypographyProps={{
              component: "label",
              id: getOptionLabelId(key),
            }}
            secondary={t(descriptionKey)}
            secondaryTypographyProps={{ sx: { textWrap: "wrap" } }}
          />

          <Switch
            checked={Boolean(selectedPreferences[key])}
            disabled={REQUIRED_CONSENTS.includes(key)}
            inputProps={{ "aria-labelledby": getOptionLabelId(key) }}
            onChange={() => togglePreference(key)}
          />
        </MenuItem>
      ))}

      <Box component="li" sx={{ px: 2, py: 1, width: "100%" }}>
        <Button
          fullWidth
          onClick={() => acceptSelected(selectedPreferences)}
          variant="contained"
        >
          {t("accept_selected")}
        </Button>
      </Box>
    </>
  );
};

type OptionsMenuProps = Omit<ButtonProps, "onClick"> & ConsentManagerOptions;
export const OptionsMenuButton: FCC<OptionsMenuProps> = ({
  acceptSelected,
  ...rest
}) => {
  const [anchorEl, setAnchorEl] = useState<Nullable<HTMLElement>>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        {...rest}
        aria-controls={open ? OPTIONS_MENU_ID : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        id={OPTIONS_MENU_BUTTON_ID}
        onClick={handleClick}
      />
      <FocusTrap open={open}>
        <Menu
          MenuListProps={{ "aria-labelledby": OPTIONS_MENU_BUTTON_ID }}
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: "left", vertical: "top" }}
          id={OPTIONS_MENU_ID}
          onClose={handleClose}
          open={open}
          transformOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          <ConsentManagerOptions acceptSelected={acceptSelected} />
        </Menu>
      </FocusTrap>
    </>
  );
};
