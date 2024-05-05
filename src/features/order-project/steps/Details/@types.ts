import { IndustryType } from "./constants";

export interface DetailsStepFormData {
  hasDesign?: boolean;
  description?: string;
  industryTypes?: Array<IndustryType>;
}
