"use client";
import { useEffect, useRef } from "react";

export const useIntersection = <T extends Element>(
  callback: (isIntersecting: boolean, element: T) => void,
  options: IntersectionObserverInit = { rootMargin: "0px" }
): React.MutableRefObject<T | null> => {
  const elementRef = useRef<T>(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const element = elementRef.current;
    observer.current = new IntersectionObserver(
      ([entry]) => element && callback(entry.isIntersecting, element),
      options
    );

    if (element) observer.current?.observe(element);
    return () => {
      if (element) observer.current?.unobserve(element);
    };
  }, [callback, options]);

  return elementRef;
};
