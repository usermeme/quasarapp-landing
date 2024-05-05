import { type MutableRefObject, useRef } from "react";

export const useLatest = <T>(value: T): MutableRefObject<T> => {
  const valueRef = useRef(value);
  valueRef.current = value;
  return valueRef;
};
