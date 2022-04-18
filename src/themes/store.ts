import { MantineThemeOverride } from "@mantine/core";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

export type ThemeStoreShape = MantineThemeOverride;

const initialState: ThemeStoreShape = {
  colorScheme: "light",
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemePaletteOptions: (
      state,
      action: PayloadAction<MantineThemeOverride>
    ) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setThemePaletteOptions } = slice.actions;

export default { name: slice.name, reducer: slice.reducer };

export const selectThemeMode = (state: RootState) => state.theme.colorScheme;
