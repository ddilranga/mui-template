import {
  DarkMode as MoonIcon,
  LightMode as SunIcon,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "configs";
import React from "react";

const ThemeToggle = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <IconButton
      sx={{ bgcolor: "background.default", color: "text.primary" }}
      onClick={colorMode.toggleColorMode}
      // color="inherit"
      size="small"
    >
      {theme.palette.mode === "dark" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
