import { CssBaseline, ThemeProvider } from "@mui/material";
import { useAppSelector } from "hooks";
import { ReactElement, useMemo } from "react";

import { lightTheme, darkTheme } from "themes";
import { selectThemeMode } from "themes/store";

const ThemeWrapper = ({ children }: { children: ReactElement }) => {
  const mode = useAppSelector(selectThemeMode);

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default ThemeWrapper;
