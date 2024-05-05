import { Nullable } from "@/types/helpers";

export interface BaseStorageInstance {
  getItem: (key: string) => Nullable<string>;
  removeItem: (key: string) => void;
  setItem: (key: string, value: string) => void;
}

export interface TypesafeStorageInterface<T> {
  getItem<TKey extends keyof T>(key: TKey): Nullable<T[TKey]>;
  removeItem<TKey extends keyof T>(key: TKey): void;
  setItem<TKey extends keyof T>(key: TKey, value: T[TKey]): void;
}

declare global {
  namespace TypesafeStorage {
    interface ExtendableState {}
  }
}

export interface TypesafeStorageState extends TypesafeStorage.ExtendableState {}
