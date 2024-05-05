import { PlatformType } from "./constants";

export interface ChoosePlatformsStepFormData {
  platforms?: Record<PlatformType, boolean>;
}
