import { AppPathname } from "@/services/internationalization";

import {
  AnalyticsOutlined,
  ArchitectureOutlined,
  SvgIconComponent,
} from "@/ui-kit/icons";

import { ROUTES } from "../navigation";

export enum Consent {
  FUNCTIONAL = "functional",
  ANALYTICS = "analytics",
}

export const CONSENT_COOKIES_KEY = "consent";

export const CONSENT_OPTIONS: Array<{
  key: Consent;
  titleKey: keyof IntlMessages["consent_manager"];
  descriptionKey: keyof IntlMessages["consent_manager"];
  Icon: SvgIconComponent;
}> = [
  {
    Icon: ArchitectureOutlined,
    descriptionKey: "functional_consent_description",
    key: Consent.FUNCTIONAL,
    titleKey: "functional_consent_title",
  },
  {
    Icon: AnalyticsOutlined,
    descriptionKey: "analytics_consent_description",
    key: Consent.ANALYTICS,
    titleKey: "analytics_consent_title",
  },
];

export const FREE_COOKIE_CONSENT_ROUTES: AppPathname[] = [
  ROUTES.COOKIES_POLICY,
];

export const REQUIRED_CONSENTS = [Consent.FUNCTIONAL];
