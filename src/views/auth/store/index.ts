import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "services/auth";
import { RootState } from "store";

export type AuthState = {
  user: User | null;
  token: string | null;
  rememberMe: boolean | null;
};

export const AUTH_NAME = "auth";

const slice = createSlice({
  name: AUTH_NAME,
  initialState: { user: null, token: null, rememberMe: false } as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, token, rememberMe },
      }: PayloadAction<{
        user: User;
        token: string;
        rememberMe: boolean | null;
      }>
    ) => {
      state.user = user;
      state.token = token;
      state.rememberMe = rememberMe;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth?.user;
