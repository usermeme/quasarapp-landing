"use client";

import { FC, useCallback } from "react";

import { Nullable } from "@/types/helpers";

import { IconButton, MobileStepper } from "@/ui-kit/components";
import { KeyboardArrowLeft } from "@/ui-kit/icons";

import { OrderProjectWizardData } from "../@types";
import { OrderProjectStep, STEPS_IN_ORDER } from "../constants";
import { sendData } from "../send-data.actions";
import { useWizardStep } from "../steps";
import { BudgetStep } from "../steps/Budget";
import { ChoosePlatformsStep } from "../steps/ChoosePlatforms";
import { ComplexityStep } from "../steps/Complexity";
import { ContactsStep } from "../steps/Contacts";
import { DetailsStep } from "../steps/Details";
import { OrderProjectWizardCompleted } from "./OrderProjectWizardCompetes.client";

interface OrderProjectWizardStepsProps {
  draftStep: Nullable<OrderProjectStep>;
  getLatestWizardData: () => Partial<OrderProjectWizardData>;
  mergeWizardData: (values: Partial<OrderProjectWizardData>) => void;
  storeDraftData: (data: Partial<OrderProjectWizardData>) => void;
  storeDraftStep: (step: OrderProjectStep) => void;
}
export const OrderProjectWizardSteps: FC<OrderProjectWizardStepsProps> = ({
  draftStep,
  getLatestWizardData,
  mergeWizardData,
  storeDraftData,
  storeDraftStep,
}) => {
  const {
    currentStep,
    currentStepIndex,
    goBack,
    goNext,
    isFirst,
    isLast,
    isWizardCompleted,
    setWizardCompleted,
  } = useWizardStep({ draftStep, storeDraftStep });

  const completeWizard = useCallback(
    (data: Partial<OrderProjectWizardData>) => {
      const wizardData = { ...getLatestWizardData(), ...data };
      sendData(wizardData);
      setWizardCompleted(true);

      storeDraftData({});
      storeDraftStep(OrderProjectStep.CHOOSE_PLATFORMS);
    },
    [getLatestWizardData, setWizardCompleted, storeDraftData, storeDraftStep]
  );

  const completeStep = useCallback(
    (data: Partial<OrderProjectWizardData>) => {
      if (isLast) {
        completeWizard(data);
      } else {
        mergeWizardData(data);
        goNext();
      }
    },
    [completeWizard, goNext, isLast, mergeWizardData]
  );

  const stepProps = {
    completeStep,
    getLatestWizardData,
    storeDraftData,
  };

  if (isWizardCompleted) {
    return <OrderProjectWizardCompleted />;
  }

  return (
    <>
      <MobileStepper
        position="static"
        activeStep={currentStepIndex}
        backButton={
          <IconButton
            size="small"
            color="primary"
            onClick={goBack}
            disabled={isFirst}
          >
            <KeyboardArrowLeft />
          </IconButton>
        }
        nextButton={null}
        steps={STEPS_IN_ORDER.length}
        variant="dots"
      />

      {currentStep === OrderProjectStep.BUDGET && <BudgetStep {...stepProps} />}
      {currentStep === OrderProjectStep.CHOOSE_PLATFORMS && (
        <ChoosePlatformsStep {...stepProps} />
      )}
      {currentStep === OrderProjectStep.COMPLEXITY && (
        <ComplexityStep {...stepProps} />
      )}
      {currentStep === OrderProjectStep.CONTACTS && (
        <ContactsStep {...stepProps} />
      )}
      {currentStep === OrderProjectStep.DETAILS && (
        <DetailsStep {...stepProps} />
      )}
    </>
  );
};
