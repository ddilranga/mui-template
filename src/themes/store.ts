import { PaletteOptions } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

export type ThemeStoreShape = PaletteOptions;

const initialState: ThemeStoreShape = {
  mode: "light",
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemePaletteOptions: (state, action: PayloadAction<PaletteOptions>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setThemePaletteOptions } = slice.actions;

export default { name: slice.name, reducer: slice.reducer };

export const selectThemeMode = (state: RootState) => state.theme.mode;
