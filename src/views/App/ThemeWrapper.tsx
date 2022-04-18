import { MantineProvider } from "@mantine/core";
import { useAppSelector } from "hooks";
import { ReactElement, useMemo } from "react";

import { lightTheme, darkTheme } from "themes";
import { selectThemeMode } from "themes/store";

const ThemeWrapper = ({ children }: { children: ReactElement }) => {
  const colorScheme = useAppSelector(selectThemeMode);

  const theme = useMemo(
    () => (colorScheme === "light" ? lightTheme : darkTheme),
    [colorScheme]
  );

  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      {children}
    </MantineProvider>
  );
};
export default ThemeWrapper;
