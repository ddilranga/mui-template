import { MantineThemeOverride } from "@mantine/core";
import fontFamily from "themes/shared/fonts";
import palette from "./palette";

const lightTheme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily,
  primaryColor: "primary",
  colors: palette,
  headings: {
    fontFamily,
  },
};

export default lightTheme;
