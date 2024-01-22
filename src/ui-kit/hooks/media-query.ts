import { useEffect } from "react";

export const useMediaQueryListener = (
  query: string,
  callback: (mathes: MediaQueryListEvent) => void
) => {
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    matchMedia.addEventListener("change", callback);

    return () => {
      matchMedia.removeEventListener("change", callback);
    };
  }, [callback, query]);
};
