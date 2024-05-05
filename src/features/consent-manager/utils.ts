import { getCookie } from "cookies-next";

import { Nullable, Option } from "@/types/helpers";

import { Consent, CONSENT_COOKIES_KEY, REQUIRED_CONSENTS } from "./constants";

const getPredefinedConsentPreferences = (
  getValue: (consent: Consent) => boolean
): Record<Consent, boolean> =>
  Object.values(Consent).reduce((acc, cur) => {
    acc[cur] = getValue(cur);
    return acc;
  }, {} as Record<Consent, boolean>);

export const getAcceptedConsentPreferences = () =>
  getPredefinedConsentPreferences(() => true);

export const getRejectedConsentPreferences = () =>
  getPredefinedConsentPreferences((consent) =>
    REQUIRED_CONSENTS.includes(consent)
  );

export const getConsentPreferences = (): Nullable<
  Record<Consent, Option<boolean>>
> => {
  try {
    const consentCookies = getCookie(CONSENT_COOKIES_KEY);
    if (!consentCookies) return null;
    return JSON.parse(consentCookies);
  } catch (error) {
    return null;
  }
};
