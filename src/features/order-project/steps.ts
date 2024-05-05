import { useCallback, useState } from "react";

import { Nullable } from "@/types/helpers";

import { useLatest } from "@/hooks/use-latest";

import { DEFAULT_STEP, OrderProjectStep, STEPS_IN_ORDER } from "./constants";

interface UseWizardStepProps {
  draftStep: Nullable<OrderProjectStep>;
  storeDraftStep: (step: OrderProjectStep) => void;
}

export const useWizardStep = ({
  draftStep,
  storeDraftStep,
}: UseWizardStepProps) => {
  const [isWizardCompleted, setWizardCompleted] = useState(false);
  const [currentStep, setCurrentStep] = useState<OrderProjectStep>(
    draftStep || DEFAULT_STEP
  );
  const currentStepIndex = STEPS_IN_ORDER.findIndex(
    (step) => step === currentStep
  );
  const currentStepIndexRef = useLatest(currentStepIndex);
  const isLast = STEPS_IN_ORDER.length === currentStepIndex + 1;
  const isFirst = currentStepIndex === 0;

  const goNext = useCallback(() => {
    const nextStep = STEPS_IN_ORDER[currentStepIndexRef.current + 1];
    setCurrentStep(nextStep);
    storeDraftStep(nextStep);
  }, [currentStepIndexRef, storeDraftStep]);

  const goBack = useCallback(() => {
    const prevStep = STEPS_IN_ORDER[currentStepIndexRef.current - 1];
    setCurrentStep(prevStep);
  }, [currentStepIndexRef]);

  return {
    currentStep,
    currentStepIndex,
    goBack,
    goNext,
    isFirst,
    isLast,
    isWizardCompleted,
    setWizardCompleted,
  };
};
