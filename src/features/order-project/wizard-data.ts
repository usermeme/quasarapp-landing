import { useCallback, useState } from "react";

import { useLatest } from "@/hooks/use-latest";

import type { OrderProjectWizardData } from "./@types";

export const useWizardData = () => {
  const [wizardData, setWizardData] = useState<Partial<OrderProjectWizardData>>(
    {}
  );

  const latestWizardDataRef = useLatest(wizardData);
  const getLatestWizardData = useCallback(
    () => latestWizardDataRef.current,
    [latestWizardDataRef]
  );

  const mergeWizardData = useCallback(
    (values: Partial<OrderProjectWizardData>) =>
      setWizardData((prevValues) => ({ ...prevValues, ...values })),
    []
  );

  return { getLatestWizardData, mergeWizardData, setWizardData };
};
