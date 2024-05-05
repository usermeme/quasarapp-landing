import { TypesafeStorageInterface } from "./@types";

export class LocalStorageMock<T> implements TypesafeStorageInterface<T> {
  getItem() {
    return null;
  }
  setItem(): void {}
  removeItem(): void {}
}
