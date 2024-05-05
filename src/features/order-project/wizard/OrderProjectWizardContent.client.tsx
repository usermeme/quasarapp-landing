"use client";
import type { FC } from "react";

import { CircularProgress } from "@/ui-kit/components";

import { useWizardDraft } from "../draft";
import { useWizardData } from "../wizard-data";
import { OrderProjectWizardSteps } from "./OrderProjectWizardSteps.client";

interface OrderProjectWizardContentProps {
  closeDialog: VoidFunction;
}
export const OrderProjectWizardContent: FC<
  OrderProjectWizardContentProps
> = () => {
  const { getLatestWizardData, mergeWizardData, setWizardData } =
    useWizardData();
  const { draftStep, loading, storeDraftData, storeDraftStep } = useWizardDraft(
    { setWizardData }
  );

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <OrderProjectWizardSteps
      draftStep={draftStep}
      getLatestWizardData={getLatestWizardData}
      mergeWizardData={mergeWizardData}
      storeDraftData={storeDraftData}
      storeDraftStep={storeDraftStep}
    />
  );
};
