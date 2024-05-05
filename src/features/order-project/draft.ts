import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";

import { Nullable } from "@/types/helpers";

import { typesafeLocalStorage } from "@/services/typesafe-storage";

import { OrderProjectWizardData } from "./@types";
import { OrderProjectStep } from "./constants";

interface UseWizardDraftProps {
  setWizardData: Dispatch<SetStateAction<Partial<OrderProjectWizardData>>>;
}
export const useWizardDraft = ({ setWizardData }: UseWizardDraftProps) => {
  const [, startTransition] = useTransition();
  const [loading, setLoading] = useState(true);
  const [draftStep, setDraftStep] = useState<Nullable<OrderProjectStep>>(null);

  const storeDraftData = useCallback(
    (data: Partial<OrderProjectWizardData>) => {
      typesafeLocalStorage.setItem("orderProjectDraftData", data);
    },
    []
  );
  const storeDraftStep = useCallback((step: OrderProjectStep) => {
    typesafeLocalStorage.setItem("orderProjectDraftStep", step);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setLoading(true);
      const step = typesafeLocalStorage.getItem("orderProjectDraftStep");
      const draftData = typesafeLocalStorage.getItem("orderProjectDraftData");

      setDraftStep(step);
      setWizardData(draftData || {});

      setLoading(false);
    });
  }, [setWizardData]);

  return { draftStep, loading, storeDraftData, storeDraftStep };
};
