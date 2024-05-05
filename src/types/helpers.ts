export type Option<T> = T | undefined;

export type Nullable<T> = T | null;

export type Nullish<T> = T | null | undefined;

export type ValueOf<T> = T[keyof T];
