// reference: https://github.com/matthew-gerstman/redux-codesplit-typecheck-example/blob/master/redux-utils/types.ts

import { Reducer } from "redux";

export type FullStoreShape = {};

export type StoreShape = Partial<FullStoreShape>;

export type NamespaceKey = keyof StoreShape;

export type ReducerMap = Partial<{
  [k in NamespaceKey]: Reducer<FullStoreShape[k]>;
}>;
