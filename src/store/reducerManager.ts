import { Action, combineReducers, Reducer } from "@reduxjs/toolkit";
import { logout } from "views/auth/store";
import { DynamicReducerNames, ReducerMap, StoreShape } from "./types";

// reference: https://redux.js.org/usage/code-splitting#using-a-reducer-manager

export function createReducerManager(initialReducers: ReducerMap) {
  // Create an object which maps keys to reducers
  const reducers = { ...initialReducers };

  // Create the initial combinedReducer
  let combinedReducer = combineReducers(reducers);

  // An array which is used to delete state keys when reducers are removed
  let keysToRemove: DynamicReducerNames[] = [];

  return {
    getReducerMap: () => reducers,

    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: (state: StoreShape | undefined, action: Action) => {
      // If any reducers have been removed, clean up their state first
      if (keysToRemove.length > 0) {
        state = state && { ...state };
        for (let key of keysToRemove) {
          state && delete state[key];
        }
        keysToRemove = [];
      }

      if (action.type === logout.type) {
        state = undefined;
      }

      // Delegate to the combined reducer
      return combinedReducer(state, action);
    },

    // Adds a new reducer with the specified key
    add: (key: DynamicReducerNames, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      // Add the reducer to the reducer mapping
      reducers[key] = reducer;

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },

    // Removes a reducer with the specified key
    remove: (key: DynamicReducerNames) => {
      if (!key || !reducers[key]) {
        return;
      }

      // Remove it from the reducer mapping
      delete reducers[key];

      // Add the key to the list of keys to clean up
      keysToRemove.push(key);

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },
  };
}
