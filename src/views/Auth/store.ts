import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "interfaces";
import { RootState } from "store";

export type AuthState = {
  user: User | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: {
      reducer(state, action: PayloadAction<AuthState>) {
        const {
          payload: { user, token },
        } = action;
        state.user = user;
        state.token = token;
      },
      prepare(payload: AuthState, rememberMe: boolean) {
        return {
          payload,
          meta: {
            rememberMe,
          },
        };
      },
    },

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logout: () => {},
  },
});

export const { setCredentials, logout } = slice.actions;

export default { name: slice.name, reducer: slice.reducer };

export const selectCurrentUser = (state: RootState) => state.auth?.user;
