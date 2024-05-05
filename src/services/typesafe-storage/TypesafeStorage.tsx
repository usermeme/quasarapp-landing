import { Nullable } from "@/types/helpers";

import { isClientSide } from "@/utils/document";

import {
  BaseStorageInstance,
  TypesafeStorageInterface,
  TypesafeStorageState,
} from "./@types";
import { LocalStorageMock } from "./constants";

class TypesafeStorage<T> implements TypesafeStorageInterface<T> {
  constructor(private instance: BaseStorageInstance) {}

  getItem<TKey extends keyof T>(key: TKey): Nullable<T[TKey]> {
    try {
      const result = this.instance.getItem(key.toString());
      return result ? JSON.parse(result) : null;
    } catch (error) {
      return null;
    }
  }

  setItem<TKey extends keyof T>(key: TKey, value: T[TKey]): void {
    this.instance.setItem(key.toString(), JSON.stringify(value));
  }

  removeItem<TKey extends keyof T>(key: TKey): void {
    this.instance.removeItem(key.toString());
  }
}

export const typesafeLocalStorage = new TypesafeStorage<TypesafeStorageState>(
  isClientSide() ? localStorage : new LocalStorageMock()
);
