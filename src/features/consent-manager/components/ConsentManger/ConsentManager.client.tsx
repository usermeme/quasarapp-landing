"use client";

import { type FC, useCallback, useEffect, useState } from "react";
import { noop } from "lodash";
import { useTranslations } from "next-intl";

import { Link, ROUTES, usePathname } from "@/features/navigation";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@/ui-kit/components";

import CookiesIcon from "/public/icons/cookies.svg";

import { Consent, FREE_COOKIE_CONSENT_ROUTES } from "../../constants";
import { useConsentManager } from "../../hooks";
import { getConsentPreferences } from "../../utils";
import { OptionsMenuButton } from "./ConsentManagerOptions.client";

const CONSENT_MANAGER_DIALOG_ID = "consent-manager-id";

interface ConsentManagerContent {
  closeDialog: VoidFunction;
}
const ConsentManagerContent: FC<ConsentManagerContent> = ({ closeDialog }) => {
  const t = useTranslations("consent_manager");

  const { acceptAll, acceptSelected, rejectAll } =
    useConsentManager(closeDialog);

  return (
    <>
      <DialogContent sx={{ display: "flex", pb: 0, placeContent: "center" }}>
        <CookiesIcon height={120} width={120} />
      </DialogContent>
      <DialogTitle align="center" id={CONSENT_MANAGER_DIALOG_ID}>
        {t("consent_manager_header")}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {t.rich("consent_manager_description", {
            innerLink: (chunk) => (
              <Link href={ROUTES.COOKIES_POLICY}>{chunk}</Link>
            ),
          })}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Stack direction="column" width="100%">
          <Button fullWidth variant="contained" autoFocus onClick={acceptAll}>
            {t("accept_all")}
          </Button>
          <Button fullWidth onClick={rejectAll}>
            {t("reject_all")}
          </Button>
          <OptionsMenuButton fullWidth acceptSelected={acceptSelected}>
            {t("more_options")}
          </OptionsMenuButton>
        </Stack>
      </DialogActions>
    </>
  );
};

export const ClientConsentManager: FC = () => {
  const [opened, setOpened] = useState(false);

  const pathname = usePathname();
  const closeDialog = useCallback(() => setOpened(false), []);

  useEffect(() => {
    if (FREE_COOKIE_CONSENT_ROUTES.includes(pathname)) {
      setOpened(false);
      return;
    }

    const consentPreferences = getConsentPreferences();

    const shouldShowConsentManager =
      /**
       * If the consent preferences not been selected
       */
      !consentPreferences ||
      /**
       * if new consents was added
       */
      Object.values(Consent).some((item) => !(item in consentPreferences));

    setOpened(shouldShowConsentManager);
  }, [pathname]);

  return (
    <Dialog
      aria-labelledby={CONSENT_MANAGER_DIALOG_ID}
      open={opened}
      maxWidth="xs"
      /**
       * remove possibility to close the modal via outside click
       */
      onClose={noop}
    >
      <ConsentManagerContent closeDialog={closeDialog} />
    </Dialog>
  );
};
