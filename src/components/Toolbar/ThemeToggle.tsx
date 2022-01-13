import {
  DarkMode as MoonIcon,
  LightMode as SunIcon,
} from "@mui/icons-material";
import { IconButton, PaletteMode } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks";
import { selectThemeMode, setThemePaletteOptions } from "themes/store";

const ThemeToggle = () => {
  const dispatch = useAppDispatch();

  const themeMode = useAppSelector(selectThemeMode);

  const setThemeMode = () => {
    const mode: PaletteMode = themeMode === "light" ? "dark" : "light";

    dispatch(setThemePaletteOptions({ mode }));
  };

  return (
    <IconButton
      sx={{ bgcolor: "background.default", color: "text.primary" }}
      onClick={setThemeMode}
      size="small"
    >
      {themeMode === "dark" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
