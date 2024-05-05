import { useCallback } from "react";
import { setCookie } from "cookies-next";

import { YEAR_IN_SECONDS } from "@/constants/time";

import { Consent, CONSENT_COOKIES_KEY } from "./constants";
import {
  getAcceptedConsentPreferences,
  getRejectedConsentPreferences,
} from "./utils";

export const useConsentManager = (closeConsentManager: VoidFunction) => {
  const setCookiesConsets = useCallback(
    (consents: Record<Consent, boolean>) => {
      setCookie(CONSENT_COOKIES_KEY, consents, { maxAge: YEAR_IN_SECONDS });
      closeConsentManager();
    },
    [closeConsentManager]
  );

  const acceptAll = useCallback(() => {
    setCookiesConsets(getAcceptedConsentPreferences());
  }, [setCookiesConsets]);

  const acceptSelected = useCallback(
    (partialConsents: Partial<Record<Consent, boolean>>) => {
      const consents = Object.values(Consent).reduce<Record<Consent, boolean>>(
        (acc, cur) => {
          acc[cur] = Boolean(partialConsents[cur]);
          return acc;
        },
        getRejectedConsentPreferences()
      );

      setCookiesConsets(consents);
    },
    [setCookiesConsets]
  );

  const rejectAll = useCallback(
    () => setCookiesConsets(getRejectedConsentPreferences()),
    [setCookiesConsets]
  );

  return { acceptAll, acceptSelected, rejectAll };
};
