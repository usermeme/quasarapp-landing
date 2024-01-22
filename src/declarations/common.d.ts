declare type CallbackOrValue<TValue> = TValue | ((prevValue: TValue) => TValue);
