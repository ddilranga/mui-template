import { MantineThemeOverride } from "@mantine/core";
import fontFamily from "themes/shared/fonts";
import palette from "./palette";

const darkTheme: MantineThemeOverride = {
  colorScheme: "dark",
  fontFamily,
  primaryColor: "primary",
  colors: palette,
  headings: {
    fontFamily,
  },
};

export default darkTheme;
