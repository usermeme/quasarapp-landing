export enum PlatformType {
  ANDROID = "Android",
  I_OS = "iOS",
  LINUX = "Linux",
  MAC_OS = "MacOS",
  WEB = "Web",
  WINDOWS = "Windows",
}

export const PLATFORM_TYPES_IN_ORDER: PlatformType[] = [
  PlatformType.ANDROID,
  PlatformType.I_OS,
  PlatformType.WINDOWS,
  PlatformType.MAC_OS,
  PlatformType.LINUX,
  PlatformType.WEB,
];
